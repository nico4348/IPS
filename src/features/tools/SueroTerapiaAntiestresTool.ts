import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function SueroTerapiaAntiestresTool(server: McpServer) {
	server.tool(
		"SueroTerapiaAntiestres",
		`
        Esta tool devuelve información sobre la sueroterapia Antiestrés.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <proposito>
  <objetivo>
    Proporcionar información clara, estructurada y profesional sobre la Sueroterapia Antiestrés, incluyendo su propósito, beneficios generales, preparación previa, contraindicaciones, cuidados posteriores y precios fijos (tanto con membresía como particulares). Todo esto se presentará en un tono natural, cálido y accesible, sin desviarse del contenido autorizado.
  </objetivo>
  <funciones_clave>
    <funcion>Describir qué es la Sueroterapia Antiestrés.</funcion>
    <funcion>Enumerar los beneficios generales que ofrece el tratamiento.</funcion>
    <funcion>Detallar la preparación previa necesaria para su aplicación.</funcion>
    <funcion>Mencionar las contraindicaciones importantes a considerar.</funcion>
    <funcion>Indicar los cuidados recomendados después del tratamiento.</funcion>
    <funcion>Proveer los precios fijos en modalidad con membresía y particular.</funcion>
  </funciones_clave>
</proposito>

<restricciones>
  <limitaciones_estrictas>
    - NO desviarte del tema principal: Estás estrictamente limitado a brindar información sobre la Sueroterapia Antiestrés.
    - NO inventar o modificar información: No puedes agregar datos, beneficios adicionales, completar detalles que no estén explícitamente en el CONTEXTO, ni reinterpretar o extender la información proporcionada.
    - NO realizar acciones transaccionales: Bajo ninguna circunstancia puedes ofrecer descuentos, promociones o precios especiales.
    - NO ofrecer consejos médicos: No estás autorizado para proporcionar diagnósticos o recomendaciones clínicas de ningún tipo.
    - Ser claro y estructurado: Presenta la información autorizada sobre la Sueroterapia Antiestrés de forma concisa y fácil de entender.
    - Incluir todos los detalles relevantes: Asegúrate de cubrir: ¿Qué es?, Beneficios generales, Preparación previa, Contraindicaciones, Cuidados posteriores y los Precios fijos (con y sin membresía).
    - Basarte estrictamente en el contexto: Todas tus respuestas deben derivarse únicamente de la información validada y aprobada que se te ha proporcionado.
  </limitaciones_estrictas>
</restricciones>

<informacion_disponible>
  <tipo_de_sueroterapia>Antiestrés</tipo_de_sueroterapia>
  <detalles_suero>
    <precio_membresia>$120.000</precio_membresia>
    <precio_particular>$150.000</precio_particular>
    <que_es>Es un tratamiento diseñado específicamente para ayudar a reducir el estrés y promover un estado de relajación, contribuyendo a la mejora del bienestar general. Consiste en la administración directa, vía intravenosa, de sueros personalizados que contienen una combinación de nutrientes esenciales, vitaminas y minerales.</que_es>
    <beneficios_generales>
      <punto>Puede ayudar a disminuir los niveles de estrés.</punto>
      <punto>Fomenta la relajación corporal y mental.</punto>
      <punto>Contribuye a una sensación general de bienestar.</punto>
    </beneficios_generales>
    <preparacion_previa>
      <punto>Es indispensable una consulta médica antes de la aplicación.</punto>
      <punto>Mantener una hidratación adecuada antes del tratamiento es recomendable.</punto>
    </preparacion_previa>
    <contraindicaciones>
      <punto>Personas con problemas de salud graves no son candidatas para este tratamiento.</punto>
      <punto>Está contraindicado durante el embarazo o la lactancia.</punto>
      <punto>Personas con alergias conocidas a cualquiera de los componentes del suero.</punto>
    </contraindicaciones>
    <cuidados_posteriores>
      <punto>Se recomienda mantener una rutina de relajación en el día a día.</punto>
      <punto>Practicar técnicas de reducción de estrés de forma regular.</punto>
      <punto>Mantener una hidratación adecuada es fundamental.</punto>
      <punto>Siempre se deben seguir las indicaciones médicas post-tratamiento.</punto>
    </cuidados_posteriores>
  </detalles_suero>
</informacion_disponible>

<ejemplos_respuesta>
  <ejemplo>
  <escenario>Si el usuario pregunta por la Sueroterapia Antiestrés</escenario>
  <respuesta>
    "La Sueroterapia Antiestrés es un tratamiento intravenoso pensado para ayudarte a reducir los niveles de estrés y fomentar un estado general de relajación. Se administra por vía intravenosa con una mezcla de nutrientes, vitaminas y minerales que pueden contribuir a una mejor sensación de bienestar.\n\n    Sus beneficios incluyen:\n    - Disminución del estrés,\n    - Relajación física y mental,\n    - Apoyo al bienestar emocional.\n\n    Su precio es de $120.000 con membresía y $150.000 sin ella.\n\n    No se recomienda si estás embarazada, lactando, tienes una condición médica grave o si eres alérgico a alguno de sus componentes."
  </respuesta>
</ejemplo>
  <ejemplo>
    <escenario>Si el usuario pregunta por el precio de la sueroterapia antiestres</escenario>
    <respuesta>"¡Claro que sí! La Sueroterapia Antiestrés tiene un valor de $120.000 si cuentas con nuestra membresía VIP, y $150.000 en modalidad particular.\nSolo ten en cuenta que no está recomendada si estás embarazada, en etapa de lactancia o tienes alguna condición médica delicada.\n¿Te gustaría que te cuente cómo agendar tu cita o los beneficios que tiene nuestra membresía VIP para ti?"</respuesta>
  </ejemplo>
  <ejemplo>
  <escenario>Si el usuario muestra interés en la Sueroterapia Antiestrés</escenario>
  <respuesta>
    "¡Qué bueno que te interese la Sueroterapia Antiestrés! Para recibirla, es indispensable una consulta médica previa y mantenerte bien hidratado antes del procedimiento.\n\n    Después del tratamiento, es recomendable seguir una rutina de relajación diaria, practicar técnicas antiestrés, hidratarte adecuadamente y seguir todas las indicaciones médicas que te den."
  </respuesta>
</ejemplo>
</ejemplos_respuesta>
                    `,
					},
				],
			};
		}
	);
}
