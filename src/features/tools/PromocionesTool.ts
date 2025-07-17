import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function PromocionesTool(server: McpServer) {
	server.tool(
		"Promociones",
		`
        Esta tool devuelve información sobre las promociones disponibles.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
							Promoción 1:
							Estética + Sueroterapia
							1. Detox básico + masaje $180.000
							2. Suero metabolico T + masaje cranéal $180.000
							3. Hidratación facial/limpieza facial o masaje pies + suero antiinflamatorio $150.000
							4. Masaje + chocolaterapia $97.000
											
							Promoción 2:
							Depilación Tradicional
							1. Axilas $15.000
							2. Piernas completas $50.000
							3. Bikini completo $65.000
							4. Medio bikini $50.000
							5. Bikini completo + interglúteo $80.000
							6. Bozo $10.000
						`,
					},
				],
			};
		}
	);
}
