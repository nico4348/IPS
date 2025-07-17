import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const PromocionesTool = async () => {
	return `
			<promociones>
			<advertencia>
				<texto>Estas son PROMOCIONES, no servicios oficiales. Las promociones solo tienen precio base y no precio VIP.</texto>
			</advertencia>
			
			<promocion id="1">
				<nombre>Estética + Sueroterapia</nombre>
				<descripcion>Combina tratamientos estéticos con sueroterapia a precios especiales</descripcion>
				<opciones>
				<opcion id="1">
					<nombre>Detox básico + masaje</nombre>
					<precio_base>180000</precio_base>
					<detalles>Incluye tratamiento detox y sesión de masaje completo</detalles>
				</opcion>
				<opcion id="2">
					<nombre>Suero metabolico T + masaje cranéal</nombre>
					<precio_base>180000</precio_base>
					<detalles>Incluye sueroterapia metabólica y masaje especializado craneal</detalles>
				</opcion>
				<opcion id="3">
					<nombre>Hidratación facial/limpieza facial o masaje pies + suero antiinflamatorio</nombre>
					<precio_base>150000</precio_base>
					<detalles>Elección entre hidratación facial, limpieza facial o masaje de pies, más suero antiinflamatorio</detalles>
				</opcion>
				<opcion id="4">
					<nombre>Masaje + chocolaterapia</nombre>
					<precio_base>97000</precio_base>
					<detalles>Tratamiento corporal que incluye masaje y terapia con chocolate</detalles>
				</opcion>
				</opciones>
			</promocion>
			
			<promocion id="2">
				<nombre>Depilación Tradicional</nombre>
				<descripcion>Servicios de depilación tradicional a precios promocionales</descripcion>
				<opciones>
				<opcion id="1">
					<nombre>Axilas</nombre>
					<precio_base>15000</precio_base>
				</opcion>
				<opcion id="2">
					<nombre>Piernas completas</nombre>
					<precio_base>50000</precio_base>
				</opcion>
				<opcion id="3">
					<nombre>Bikini completo</nombre>
					<precio_base>65000</precio_base>
				</opcion>
				<opcion id="4">
					<nombre>Medio bikini</nombre>
					<precio_base>50000</precio_base>
				</opcion>
				<opcion id="5">
					<nombre>Bikini completo + interglúteo</nombre>
					<precio_base>80000</precio_base>
				</opcion>
				<opcion id="6">
					<nombre>Bozo</nombre>
					<precio_base>10000</precio_base>
				</opcion>
				</opciones>
			</promocion>
			</promociones>
		`;
};
