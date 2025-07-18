import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TransportManager } from "./configs/transports/transportManager.js";
import { SueroTerapiaDetoxTool } from "./features/tools/SueroTerapiaDetoxTool.js";
import { TerapiasNaturalesTool } from "./features/tools/TerapiasNaturalesTool.js";
import { SueroTerapiaAntiageTool } from "./features/tools/SueroTerapiaAntiageTool.js";
import { CosmetologiaFallBackTool } from "./features/tools/CosmetologiaFallBackTool.js";
import { SueroTerapiaMetabolicaTool } from "./features/tools/SueroTerapiaMetabolicaTool.js";
import { TratamientosCorporalesTool } from "./features/tools/TratamientosCorporalesTool.js";
import { SueroTerapiaAntiestresTool } from "./features/tools/SueroTerapiaAntiestresTool.js";
import { SueroTerapiaInfoGeneralTool } from "./features/tools/SueroTerapiaInfoGeneralTool.js";
import { handleStreamableHttpRequest } from "./configs/transports/streamableHttpTransport.js";
import { handleSseRequest, handleSsePostRequest } from "./configs/transports/sseTransport.js";
import { SueroTerapiaAntiinflamatoriaTool } from "./features/tools/SueroTerapiaAntiinflamatoriaTool.js";
import { TratamientosFacialesDepilacionTool } from "./features/tools/TratamientosFacialesDepilacionTool.js";
import express, { type Request, type Response } from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const getServer = () => {
	const server = new McpServer(
		{
			name: "UniversitariaMcp",
			version: "1.0.0",
		},
		{ capabilities: { logging: {} } }
	);

	CosmetologiaFallBackTool(server);
	SueroTerapiaAntiageTool(server);
	SueroTerapiaAntiestresTool(server);
	SueroTerapiaAntiinflamatoriaTool(server);
	SueroTerapiaDetoxTool(server);
	SueroTerapiaInfoGeneralTool(server);
	SueroTerapiaMetabolicaTool(server);
	TerapiasNaturalesTool(server);
	TratamientosCorporalesTool(server);
	TratamientosFacialesDepilacionTool(server);

	console.log("🔧 Servidor MCP compatible configurado con herramientas de compatibilidad");
	return server;
};

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: "*",
		exposedHeaders: ["Mcp-Session-Id"],
	})
);

const transportManager = new TransportManager();

app.all("/mcp", (req: Request, res: Response) => {
	handleStreamableHttpRequest(req, res, transportManager, getServer);
});

app.get("/sse", (req: Request, res: Response) => {
	handleSseRequest(req, res, transportManager, getServer);
});

app.post("/messages", (req: Request, res: Response) => {
	handleSsePostRequest(req, res, transportManager);
});

app.get("/", (req: Request, res: Response) => {
	res.json({
		server: "servidor-compatible-mcp",
		version: "1.o.o",
		protocols: [
			{
				name: "Streamable HTTP",
				version: "2025-03-26",
				endpoint: `${process.env.URL}/mcp`,
			},
			{
				name: "HTTP+SSE (deprecated)",
				version: "2024-11-05",
				endpoints: ["/sse", "/messages"],
			},
		],
		activeSessions: transportManager.getActiveSessions(),
		uptime: process.uptime(),
	});
});

app.listen(PORT, () => {
	console.log(`🚀 Servidor MCP compatible ejecutándose en puerto ${PORT}`);
	console.log(`
==============================================
🔧 OPCIONES DE TRANSPORTE SOPORTADAS:

1. 🆕 Streamable HTTP (Protocolo versión: 2025-03-26)
   Endpoint: /mcp
   Métodos: GET, POST, DELETE
   Uso: 
     - Inicializar con POST a /mcp
     - Establecer stream SSE con GET a /mcp
     - Enviar peticiones con POST a /mcp
     - Terminar sesión con DELETE a /mcp

2. 🔙 HTTP + SSE (Protocolo versión: 2024-11-05)
   Endpoints: /sse (GET) y /messages (POST)
   Uso:
     - Establecer stream SSE con GET a /sse
     - Enviar peticiones con POST a /messages?sessionId=<id>

📊 Información del servidor: GET /
🧪 Herramientas disponibles: 
   - start-notification-stream
   - send-immediate-notification
   - test-protocol-connectivity
   - get-server-info
   - test-compatibility
==============================================
`);
});

process.on("SIGINT", async () => {
	console.log("🔄 Apagando servidor...");
	await transportManager.closeAll();
	console.log("✅ Apagado del servidor completado");
	process.exit(0);
});
