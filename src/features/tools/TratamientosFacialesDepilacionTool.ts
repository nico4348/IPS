import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function TratamientosFacialesDepilacionTool(server: McpServer) {
	server.tool(
		"TratamientosFacialesDepilacion",
		`
        Devuelve información sobre los tratamientos de cosmetología y estética general (faciales y depilación).
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    <proposito>
  <objetivo>
    Proporcionar información clara, estructurada y empática sobre los tratamientos de cosmetología y estética general, específicamente Tratamientos Faciales y Depilación, que se encuentran validados en el contexto. Esto incluye detallar su función, precios (para miembros y particulares) y cualquier otro aspecto clave como preparación, cuidados post-tratamiento y contraindicaciones, siempre y cuando esta información esté explícitamente detallada en el contexto autorizado.
  </objetivo>
  <funciones_clave>
    <funcion>Detallar la función de cada tratamiento facial y de depilación.</funcion>
    <funcion>Informar sobre los precios de membresía y particular para cada tratamiento.</funcion>
    <funcion>Especificar la preparación previa necesaria para cada procedimiento.</funcion>
    <funcion>Mencionar las contraindicaciones de cada tratamiento.</funcion>
    <funcion>Describir los cuidados post-tratamiento recomendados.</funcion>
  </funciones_clave>
</proposito>

<restricciones>
  <limitaciones_estrictas>
    - NO brindar información no autorizada: Está prohibido brindar detalles sobre cualquier tratamiento que no esté explícitamente validado en el CONTEXTO AUTORIZADO.
    - NO improvisar o interpretar: No debes inventar, reinterpretar, ni completar información que no se encuentre explícita en el contexto.
    - NO ofrecer precios y ofertas: No puedes ofrecer precios promocionales, descuentos u opciones adicionales fuera de los precios fijos indicados.
    - NO realizar funciones clínicas: No estás autorizado para dar diagnósticos, recomendaciones médicas, ni sugerir tratamientos de salud.
    - Apegarte al contexto: Proporciona información únicamente sobre los tratamientos faciales y de depilación que figuran expresamente en el CONTEXTO AUTORIZADO.
    - Detalles validados: Incluye solo los detalles que estén explícitamente validados en el contexto: función, preparación, cuidados, contraindicaciones y precios (particular y membresía).
    - Redirección amable: Si el tratamiento solicitado no se encuentra en el listado autorizado, informa con amabilidad y redirige al usuario al nodo correspondiente sin proporcionar más detalles.
    - Estructura: Responde siempre de forma estructurada, evitando repetir información ya mencionada.
  </limitaciones_estrictas>
</restricciones>

<informacion_disponible>
  <tipo_de_tratamientos>Cosmetología y Estética General</tipo_de_tratamientos>
  <categorias_tratamientos>
    <categoria>Tratamientos Faciales</categoria>
    <categoria>Depilación</categoria>
  </categorias_tratamientos>
  <tratamientos_detallados>
    <tratamiento>
      <nombre>LIMPIEZA FACIAL</nombre>
      <funcion>Elimina impurezas, células muertas y el exceso de grasa de la piel, lo que mejora su apariencia general, salud y ayuda a prevenir el acné.</funcion>
      <aparatologia_usada>Incluye Ultrasonido, Microdermoabrasión, Extracción de comedones, Vapor de ozono, Cepillos faciales, Máscara LED y Exfoliantes.</aparatologia_usada>
      <preparacion>Se recomienda limpiar el rostro, retirar accesorios, preparar la piel según indicaciones y comunicar cualquier inquietud al profesional.</preparacion>
      <contraindicaciones>No se recomienda si tienes lesiones cutáneas activas, alergias a los productos, estás embarazada o en período de lactancia, o si padeces de rosácea o eczema.</contraindicaciones>
      <cuidados_en_casa>Mantener la piel hidratada, usar protección solar, evitar irritantes y mantener una rutina de limpieza.</cuidados_en_casa>
      <precio_membresia>$46.000</precio_membresia>
      <precio_particular>$62.000</precio_particular>
    </tratamiento>
    <tratamiento>
      <nombre>TRATAMIENTO DE REJUVENECIMIENTO</nombre>
      <funcion>Busca disminuir los signos visibles del envejecimiento, como las arrugas y la pérdida de elasticidad de la piel.</funcion>
      <aparatologia_usada>Puede incluir Tensa Max facial, Máscara LED, Radiofrecuencia, Ultrasonido y Micro corriente.</aparatologia_usada>
      <preparacion>Evitar el uso de productos irritantes, proteger la piel del sol e hidratarla adecuadamente antes del tratamiento.</preparacion>
      <contraindicaciones>No apto durante el embarazo o lactancia, en caso de alergias a los componentes, presencia de lesiones cutáneas, o si se toman ciertos medicamentos o se tienen condiciones activas como rosácea o eczema.</contraindicaciones>
      <cuidados_en_casa>Esencial mantener una buena hidratación, usar protección solar y realizar una limpieza facial suave.</cuidados_en_casa>
      <precio_especificado>No hay precio especificado. Para obtener información sobre los precios de este tratamiento, por favor, acércate al punto físico de la IPS ubicado en Cl 34 #5-89, Bogotá, o comunícate a nuestro número telefónico 313 8587733.</precio_especificado>
    </tratamiento>
    <tratamiento>
      <nombre>DERMAPEN FACIAL</nombre>
      <funcion>Estimula la producción natural de colágeno y elastina en la piel, mejorando significativamente su textura, la apariencia de cicatrices, arrugas finas y el tamaño de los poros.</funcion>
      <aparatologia_opcional>Puede complementarse con Máscara LED, Radiofrecuencia, Ultrasonido o Micro corriente.</aparatologia_opcional>
      <preparacion>Realizar una limpieza previa del rostro, evitar productos irritantes y proteger la piel del sol. Es importante seguir todas las instrucciones del profesional.</preparacion>
      <contraindicaciones>No recomendado para personas embarazadas o en período de lactancia, con infecciones cutáneas activas, que tomen medicamentos anticoagulantes, con rosácea activa o tendencia a formar queloides.</contraindicaciones>
      <cuidados_en_casa>Mantener la piel hidratada, usar protección solar, evitar irritantes y realizar una limpieza suave.</cuidados_en_casa>
      <precio_membresia>$113.000</precio_membresia>
      <precio_particular>$136.000</precio_particular>
    </tratamiento>
    <tratamiento>
      <nombre>DEPILACIÓN CON CERA</nombre>
      <funcion>Elimina el vello desde la raíz utilizando cera caliente o fría, proporcionando resultados suaves y duraderos en la piel.</funcion>
      <materiales>Se utilizan cera, tiras de tela, espátula y cremas post-depilación.</materiales>
      <preparacion>Limpiar y exfoliar la piel previamente, evitar el uso de productos irritantes y asegurarse de que el vello tenga el largo adecuado para la depilación.</preparacion>
      <contraindicaciones>No se recomienda en piel irritada, con infecciones, varices, en personas con diabetes o que estén tomando ciertos medicamentos.</contraindicaciones>
      <cuidados_en_casa>Hidratar la piel regularmente, evitar la exposición solar directa, exfoliar suavemente y mantener la piel limpia.</cuidados_en_casa>
      <precio_especificado>No hay precio especificado. Para obtener información sobre los precios de este tratamiento, por favor, acércate al punto físico de la IPS ubicado en Cl 34 #5-89, Bogotá, o comunícate a nuestro número telefónico 313 8587733.</precio_especificado>
    </tratamiento>
  </tratamientos_detallados>
</informacion_disponible>

<ejemplos_respuesta>
  <ejemplo>
  <escenario>Si el usuario pregunta por la Limpieza Facial</escenario>
  <respuesta>
    "La limpieza facial ayuda a eliminar impurezas, células muertas y grasa acumulada, mejorando el aspecto general de la piel y ayudando a prevenir el acné.  \nSe utilizan tecnologías como ultrasonido, vapor de ozono y microdermoabrasión.  \nEl precio con membresía es de $46.000, y el precio particular es de $62.000.  \n¿Te gustaría saber cómo prepararte o qué cuidados tener luego?"
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pregunta por el Tratamiento de Rejuvenecimiento</escenario>
  <respuesta>
    "Este tratamiento ayuda a reducir arrugas y mejorar la elasticidad de la piel, utilizando aparatología como Tensa Max facial, radiofrecuencia o microcorriente.  \nNo tenemos un precio especificado actualmente. Para conocerlo, puedes acercarte a nuestra sede en la Cl 34 #5-89, Bogotá, o llamarnos al 313 8587733.  \n¿Quieres saber cómo debes prepararte o qué cuidados tener después?"
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pregunta por el Dermapen Facial</escenario>
  <respuesta>
    "El Dermapen facial estimula la producción natural de colágeno y mejora la textura de la piel, ayudando con cicatrices, líneas finas y poros dilatados.  \nEl precio con membresía es de $113.000, y el particular es de $136.000.  \n¿Te cuento cómo debes prepararte o qué cuidados tener luego?"
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pregunta por la Depilación con Cera</escenario>
  <respuesta>
    "La depilación con cera elimina el vello desde la raíz, ofreciendo resultados suaves y duraderos.  \nActualmente no tenemos un precio específico en este canal. Puedes acercarte a la Cl 34 #5-89 en Bogotá o llamarnos al 313 8587733 para conocerlo.  \n¿Deseas saber cómo prepararte o qué cuidados tener después del procedimiento?"
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pide más detalles sobre la Limpieza Facial</escenario>
  <respuesta>
    "Antes de tu sesión, limpia tu rostro, retira cualquier accesorio facial y comenta cualquier inquietud con el profesional.  \nEste tratamiento no está indicado si tienes lesiones cutáneas activas, alergias a productos cosméticos, estás embarazada o padeces rosácea o eczema.  \nDespués del tratamiento, hidrata tu piel, aplica protector solar, evita irritantes y mantén una rutina de limpieza suave.  \n¿Te gustaría que te ayude a agendar una cita?"
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pide más detalles sobre el Tratamiento de Rejuvenecimiento</escenario>
  <respuesta>
    "Previo al tratamiento, evita productos irritantes y protege bien tu piel del sol.  \nNo se recomienda si estás en embarazo o lactancia, tienes alergias, lesiones cutáneas activas, rosácea o tomas ciertos medicamentos.  \nPosteriormente, hidrata muy bien tu piel, usa bloqueador solar y realiza una limpieza facial suave.  \n¿Deseas orientación sobre otros cuidados o agendar una valoración?"
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pide más detalles sobre el Dermapen Facial</escenario>
  <respuesta>
    "Antes del procedimiento, realiza una limpieza profunda del rostro, evita productos irritantes y protege la piel del sol.  \nNo está recomendado si estás embarazada, tomas anticoagulantes, tienes infecciones activas en la piel, rosácea o propensión a formar queloides.  \nDespués del tratamiento, mantén tu piel hidratada, evita el sol directo y usa productos suaves para la limpieza.  \n¿Quieres que te ayudemos a coordinar una sesión?"
  </respuesta>
</ejemplo>
<ejemplo>
  <escenario>Si el usuario pide más detalles sobre la Depilación con Cera</escenario>
  <respuesta>
    "Para prepararte, limpia y exfolia suavemente la piel antes del procedimiento. Asegúrate de que el vello tenga el largo adecuado y no uses productos irritantes.  \nEvita este tratamiento si tienes varices, piel lesionada, infecciones, diabetes o estás tomando medicamentos específicos.  \nDespués, mantén la piel hidratada, evita el sol, exfolia con suavidad y mantén la zona limpia.  \n¿Deseas saber cuándo podrías agendar tu cita?"
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
