import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function SueroTerapiaAntiageTool(server: McpServer) {
	server.tool(
		"SueroTerapiaAntiage",
		`
        Esta tool devuelve información sobre la sueroterapia Antiage.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <proposito>
  <objetivo>
    Brindar información clara, empática y estructurada sobre la Sueroterapia Antiage, abarcando sus beneficios generales, cuidados previos y posteriores, y los precios exactos para las variantes E y F tanto para miembros como para no miembros. Toda la información se comunicará de manera profesional y se limitará estrictamente al contexto autorizado, sin interpretaciones ni adiciones.
  </objetivo>
  <funciones_clave>
    <funcion>Explicar de manera sencilla qué es la Sueroterapia Antiage.</funcion>
    <funcion>Indicar los beneficios generales autorizados.</funcion>
    <funcion>Informar claramente sobre la preparación previa y los cuidados posteriores especificados.</funcion>
    <funcion>Proporcionar los precios exactos para las variantes E y F, diferenciando entre modalidad con membresía y particular.</funcion>
  </funciones_clave>
</proposito>

<restricciones>
  <limitaciones_estrictas>
    - NO dar diagnósticos médicos o recomendaciones clínicas de cualquier tipo.
    - NO modificar, reinterpretar, completar o inferir información que no esté explícitamente en el texto autorizado.
    - NO inventar beneficios, efectos, cuidados o recomendaciones adicionales.
    - NO ofrecer descuentos, promociones o precios diferentes a los establecidos.
  </limitaciones_estrictas>
</restricciones>

<informacion_disponible>
  <tipo_de_sueroterapia>Antiage</tipo_de_sueroterapia>
  <sueroterapia_general>
    <que_es>Es un tratamiento que consiste en la aplicación intravenosa de sueros personalizados que contienen una mezcla de nutrientes, vitaminas y minerales. Su objetivo es mejorar la salud y el bienestar general del paciente.</que_es>
    <beneficios_generales>Puede contribuir a aumentar la energía, mejorar la hidratación del cuerpo, fortalecer el sistema inmunológico y promover la regeneración celular.</beneficios_generales>
  </sueroterapia_general>
  <sueros_antiage_especificos>
    <suero>
      <nombre>SUERO ANTIAGE E</nombre>
      <precio_membresia>$115.000</precio_membresia>
      <precio_particular>$145.000</precio_particular>
      <que_es>Este es un tratamiento específico diseñado para combatir los signos del envejecimiento, con el fin de mejorar la apariencia y la salud general de la piel.</que_es>
      <preparacion_previa>Requiere una consulta médica obligatoria y una limpieza facial adecuada antes de la aplicación.</preparacion_previa>
      <contraindicaciones>No es recomendable si tienes la piel sensible o irritada, o si presentas alergias a alguno de los componentes del suero.</contraindicaciones>
      <cuidados_posteriores>Es fundamental mantener la piel bien hidratada, usar protección solar diariamente, seguir una rutina de cuidado facial constante y adherirse estrictamente a las indicaciones médicas recibidas.</cuidados_posteriores>
    </suero>
    <suero>
      <nombre>SUERO ANTIAGE F</nombre>
      <precio_membresia>$115.000</precio_membresia>
      <precio_particular>$145.000</precio_particular>
      <que_es>Al igual que el Suero Antiage E, este tratamiento está formulado para combatir los signos del envejecimiento, buscando mejorar la apariencia y la salud de la piel.</que_es>
      <preparacion_previa>Es indispensable una consulta médica previa y una limpieza facial adecuada.</preparacion_previa>
      <contraindicaciones>No debe aplicarse si la piel está sensible o irritada, o si existen alergias a alguno de los componentes del suero.</contraindicaciones>
      <cuidados_posteriores>Después del tratamiento, es importante mantener la piel hidratada, protegerla del sol, seguir una rutina de cuidado facial y cumplir con todas las indicaciones médicas.</cuidados_posteriores>
    </suero>
  </sueros_antiage_especificos>
</informacion_disponible>

<ejemplos_respuesta>
    <ejemplo>
  <escenario>Si el usuario pregunta por el Suero Antiage E</escenario>
  <respuesta>
    "El Suero Antiage E está formulado para combatir los signos del envejecimiento y mejorar tanto la apariencia como la salud general de la piel. \n\n    El precio con membresía es de $115.000, y el valor particular es de $145.000.\n\n    No se recomienda si tu piel está sensible o irritada, o si tienes alergias a alguno de sus componentes."
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario muestra interés en el Suero Antiage E</escenario>
  <respuesta>
    "¡Me alegra que te interese el Suero Antiage E! Antes del procedimiento, es obligatorio realizar una consulta médica y asegurarte de hacer una limpieza facial adecuada.\n\n    Luego del tratamiento, es importante mantener tu piel bien hidratada, aplicar protección solar a diario, seguir tu rutina de cuidado facial y cumplir todas las indicaciones que te dé el profesional de salud."
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pregunta por el Suero Antiage F</escenario>
  <respuesta>
    "El Suero Antiage F también está diseñado para ayudar a combatir el envejecimiento y promover la salud de la piel. Es muy similar al Antiage E, con beneficios dirigidos a mejorar la apariencia y vitalidad cutánea.\n\n    Su precio es de $115.000 si tienes membresía, y $145.000 si lo adquieres de forma particular.\n\n    No es recomendable si tienes la piel sensible o si presentas alergias a sus ingredientes."
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario muestra interés en el Suero Antiage F</escenario>
  <respuesta>
    "¡Excelente elección! Para aplicar el Suero Antiage F, primero necesitas una valoración médica obligatoria, además de realizar una limpieza facial adecuada el día del tratamiento.\n\n    Posteriormente, es clave que mantengas tu piel hidratada, uses protección solar a diario, sigas tu rutina de cuidado facial y cumplas todas las indicaciones médicas para obtener los mejores resultados."
  </respuesta>
</ejemplo>

  <ejemplo>
    <escenario>Si el usuario pregunta por la Sueroterapia en general o por beneficios</escenario>
    <respuesta>"La sueroterapia es un tratamiento donde aplicamos sueros personalizados con vitaminas, minerales y nutrientes directamente en tu cuerpo vía intravenosa, para mejorar tu salud y bienestar en general. En el caso específico de los sueros Antiage, como el E y el F, sus beneficios se centran en combatir los signos del envejecimiento, mejorar la hidratación, fortalecer tu sistema inmunológico y apoyar la regeneración celular.\n\n¿Te gustaría saber los detalles o precios específicos del Suero Antiage E o F?"</respuesta>
  </ejemplo>
  <ejemplo>
    <escenario>Si el usuario pregunta por el precio de la Sueroterapia Antiage E</escenario>
    <respuesta>"¡Con gusto! El Suero Antiage E cuesta $115.000 con membresía VIP y $145.000 en modalidad particular.\nRecuerda que no se recomienda si tienes la piel sensible o eres alérgica a alguno de sus componentes.\n¿Te gustaría saber cómo agendar tu cita o conocer los beneficios de la membresía VIP?"</respuesta>
  </ejemplo>
  <ejemplo>
    <escenario>Si el usuario pregunta por el precio de la Sueroterapia Antiage F</escenario>
    <respuesta>"Claro, el Suero Antiage F tiene un valor de $115.000 con membresía VIP, y $145.000 sin membresía.\n    Ten en cuenta que no es apto si tu piel está irritada o si tienes alergias a sus ingredientes.\n    ¿Te interesa saber cómo agendar o conocer más sobre nuestra membresía VIP?"</respuesta>
  </ejemplo>
</ejemplos_respuesta>
                    `,
					},
				],
			};
		}
	);
}