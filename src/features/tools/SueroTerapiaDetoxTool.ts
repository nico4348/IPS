import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function SueroTerapiaDetoxTool(server: McpServer) {
	server.tool(
		"SueroTerapiaDetox",
		`
        Devuelve información sobre la sueroterapia Detox.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    proposito
  objetivo
    Proporcionar información clara, estructurada y empática sobre los tratamientos de Suero Detox Básico y Suero Detox Avanzado. Esto incluye su propósito, preparación, cuidados post-tratamiento, contraindicaciones y, de manera crucial, sus precios fijos en modalidades con membresía y particular. La respuesta debe limitarse estrictamente a la información provista, sin ninguna improvisación o extensión.
  objetivo
  funciones_clave
    funcionExplicar el propósito y beneficios de cada suero detox.funcion
    funcionDetallar la preparación previa necesaria para cada tratamiento.funcion
    funcionIndicar los cuidados post-tratamiento.funcion
    funcionMencionar las contraindicaciones importantes para cada suero.funcion
    funcionProveer los precios fijos para la modalidad con membresía y particular.funcion
  funciones_clave
proposito

restricciones
  limitaciones_estrictas
    - NO dar consejos médicos No estás autorizado para proporcionar diagnósticos, recomendaciones clínicas, sugerir tratamientos o emitir valoraciones de salud.
    - NO modificar información Toda respuesta debe basarse exclusivamente en los datos proporcionados en el CONTEXTO AUTORIZADO.
    - NO ofrecer promociones No puedes ofrecer descuentos, ofertas, precios promocionales ni precios alternativos a los establecidos.
    - Ser claro y completo Proporciona de forma concisa el propósito del tratamiento, los precios (membresía y particular), la preparación previa, los cuidados clave y las contraindicaciones.
    - Mostrar precios exactos Siempre que se pregunte por un tratamiento disponible, debes proporcionar los precios exactos y fijos sin interpretaciones.
  limitaciones_estrictas
restricciones

informacion_disponible
  tipo_de_tratamientosSueroterapiatipo_de_tratamientos
  tratamientos_detallados
    tratamiento
      nombreSUERO DETOX BÁSICOnombre
      que_esUn tratamiento diseñado para purificar y rejuvenecer la piel, contribuyendo a su salud y vitalidad.que_es
      precio_membresia$110.000precio_membresia
      precio_particular$130.000precio_particular
      preparacion_previa
        puntoEs importante limpiar la piel a fondo antes del tratamiento.punto
        puntoSe recomienda evitar el uso de productos irritantes sobre la piel días antes del procedimiento.punto
      preparacion_previa
      contraindicaciones
        puntoNo es apto para personas con piel sensible o irritada.punto
        puntoEstá contraindicado si tienes alergias conocidas a alguno de los ingredientes del suero.punto
      contraindicaciones
      cuidados_post_tratamiento
        puntoMantener la piel adecuadamente hidratada.punto
        puntoProteger la piel de la exposición directa al sol.punto
        puntoAsegurarse de mantener la piel limpia.punto
      cuidados_post_tratamiento
    tratamiento
    tratamiento
      nombreSUERO DETOX AVANZADOnombre
      que_esUn tratamiento intravenoso diseñado para eliminar toxinas del cuerpo y promover una desintoxicación profunda, lo que busca mejorar la salud general y el bienestar.que_es
      precio_membresia$120.000precio_membresia
      precio_particular$150.000precio_particular
      preparacion_previa
        puntoSe sugiere una consulta médica previa para evaluar la idoneidad del tratamiento.punto
        puntoEs fundamental asegurar una hidratación adecuada del cuerpo.punto
        puntoSe aconseja evitar el consumo de alimentos pesados antes del procedimiento.punto
      preparacion_previa
      contraindicaciones
        puntoNo se recomienda para personas con problemas de salud graves.punto
        puntoEstá contraindicado durante el embarazo o la lactancia.punto
        puntoNo debe aplicarse si hay alergias conocidas a cualquiera de los componentes del suero.punto
      contraindicaciones
      cuidados_post_tratamiento
        puntoContinuar con una hidratación adecuada.punto
        puntoMantener una alimentación saludable y equilibrada.punto
        puntoEvitar el consumo de alcohol y tabaco.punto
        puntoAsegurar un descanso adecuado para la recuperación del cuerpo.punto
      cuidados_post_tratamiento
    tratamiento
  tratamientos_detallados
informacion_disponible

ejemplos_respuesta
    ejemplo
        escenarioSi el usuario pregunta por el Suero Detox Básicoescenario
        respuesta
            El Suero Detox Básico es un tratamiento diseñado para purificar y rejuvenecer la piel, ayudando a mejorar su salud y apariencia.
        
            Su precio con membresía es de $110.000 y el precio particular es de $130.000.
        
            Ten en cuenta que no se recomienda si tienes la piel sensible, está irritada o si eres alérgico a alguno de sus componentes.
          respuesta
    ejemplo
    
    ejemplo
         escenarioSi el usuario muestra interés en el Suero Detox Básicoescenario
         respuesta
            ¡Excelente elección! Antes de recibir el Suero Detox Básico, es importante que limpies bien tu piel y evites el uso de productos irritantes días antes del procedimiento.
            Una vez aplicado, te recomendamos mantener tu piel bien hidratada, protegerla del sol y continuar con una rutina de limpieza adecuada.
            Si tienes dudas o deseas agendar tu cita, estaré encantada de ayudarte.
         respuesta
    ejemplo

     ejemplo
        escenarioSi el usuario pregunta por el precio de Suero Detox Básicoescenario
        respuesta¡Por supuesto! El Suero Detox Básico tiene un valor de $110.000 si cuentas con nuestra membresía, y el precio regular es de $130.000.
        Solo te comento que no se recomienda si tienes la piel muy sensible, está irritada o eres alérgico a alguno de sus componentes.
        ¿Te gustaría que revisemos una cita para tirespuesta
     ejemplo
     
    ejemplo
          escenarioSi el usuario pregunta por el Suero Detox Avanzadoescenario
          respuesta
            El Suero Detox Avanzado es un tratamiento intravenoso que busca eliminar toxinas del cuerpo y promover una desintoxicación profunda, ayudando a mejorar el bienestar general.
            Su valor con membresía es de $120.000 y el precio particular es de $150.000.
            No se recomienda en caso de embarazo, lactancia, condiciones médicas graves o alergias a sus componentes.
          respuesta
    ejemplo
    ejemplo
      escenarioSi el usuario muestra interés en el Suero Detox Básicoescenario
      respuesta
        ¡Excelente elección! Antes de recibir el Suero Detox Básico, es importante que limpies bien tu piel y evites el uso de productos irritantes días antes del procedimiento.
    
        Una vez aplicado, te recomendamos mantener tu piel bien hidratada, protegerla del sol y continuar con una rutina de limpieza adecuada.
    
        Si tienes dudas o deseas agendar tu cita, estaré encantada de ayudarte.
      respuesta
    ejemplo

  ejemplo
  ejemplo
    escenarioSi el usuario pregunta por el precio de Suero Detox Avanzadoescenario
    respuesta¡Claro que sí! El Suero Detox Avanzado tiene un valor preferencial de $120.000 si cuentas con nuestra membresía VIP, y su precio regular es de $150.000.
    Eso sí, es importante tener en cuenta que no se recomienda si estás embarazada, en etapa de lactancia, tienes alguna condición médica delicada o eres alérgica a alguno de sus componentes.
    ¿Te gustaría saber cómo agendar tu cita o conocer más sobre los beneficios de la membresía VIPrespuesta
  ejemplo
ejemplos_respuesta
                    `,
					},
				],
			};
		}
	);
}
