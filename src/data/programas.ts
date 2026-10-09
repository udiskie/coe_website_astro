import type { Lang } from '../i18n/ui';
import { withBaseDeep } from '../utils/url';

export interface ProgramCard {
	slug: string;
	image: string;
	imageSrcset: string;
	imageWidth: number;
	imageHeight: number;
	title: string;
	/** Additional photos shown in the program detail gallery, alongside `image`. */
	gallery?: string[];
	/** Use `image` only as the list thumbnail; the detail carousel starts at the first `gallery` photo. */
	thumbnailOnly?: boolean;
	/** Program-specific copy for the detail page; falls back to the category description. */
	description?: string[];
	/** Titled bullet lists shown under the description (itinerary, inclusions...). */
	details?: { heading: string; items: string[] }[];
	/** Link to the full program PDF; shows the "Programa completo" button when set. */
	fullProgramUrl?: string;
}

export interface ProgramTab {
	id: string;
	label: string;
	heading: string;
	description: string[];
	ctaLabel: string;
	cards: ProgramCard[];
}

export interface ProgramasContent {
	heroTitle: string;
	heroImage: string;
	badge: string;
	heading: string;
	subheading: string;
	tabs: ProgramTab[];
}

const rawProgramasContent: Record<Lang, ProgramasContent> = {
	es: {
		heroTitle: 'Salgamos juntos',
		heroImage: '/images/banner7.jpg',
		badge: 'Programas',
		heading: 'Elige tu próxima experiencia',
		subheading: 'Conoce nuestros programas y escoge lo que mejor se adapta a tu grupo',
		tabs: [
			{
				id: 'programas-de-aventura',
				label: 'Programas de aventura',
				heading: 'Aventura',
				description: ['Te reconecta con la naturaleza y descubres de lo que eres capaz.'],
				ctaLabel: 'Arma tu aventura',
				cards: [
					{
						slug: 'travesia-tres-lagos',
						fullProgramUrl: '#',
						image: '/images/programas/Portada-tres-lagos.png',
						imageSrcset:
							'/images/programas/Portada-tres-lagos.png 1016w, /images/programas/Portada-tres-lagos-300x249.png 300w, /images/programas/Portada-tres-lagos-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Travesía tres lagos',
						description: ['Embárcate en un viaje de ensueño navegando por tres lagos de aguas cristalinas, rodeados de imponentes montañas y bosques nativos.'],
						gallery: [
							'/images/programas/galeria/travesia-tres-lagos/01.jpg',
							'/images/programas/galeria/travesia-tres-lagos/02.jpg',
							'/images/programas/galeria/travesia-tres-lagos/03.jpg',
							'/images/programas/galeria/travesia-tres-lagos/04.jpg',
							'/images/programas/galeria/travesia-tres-lagos/05.jpg',
							'/images/programas/galeria/travesia-tres-lagos/06.jpg',
							'/images/programas/galeria/travesia-tres-lagos/07.jpg',
							'/images/programas/galeria/travesia-tres-lagos/08.jpg',
							'/images/programas/galeria/travesia-tres-lagos/09.jpg',
							'/images/programas/galeria/travesia-tres-lagos/10.jpg',
							'/images/programas/galeria/travesia-tres-lagos/11.jpg',
						],
					},
					{
						slug: 'descubre-la-patagonia',
						image: '/images/programas/Portada-descubre-la-patagonia.png',
						imageSrcset:
							'/images/programas/Portada-descubre-la-patagonia.png 1016w, /images/programas/Portada-descubre-la-patagonia-300x249.png 300w, /images/programas/Portada-descubre-la-patagonia-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Descubre la Patagonia',
						description: ['Viajar a la patagonia es una forma de conectar con lo esencial: paisajes inmensos, aire puro y momentos simples, cada rincón invita a tomarse el tiempo y vivir la naturaleza a tu ritmo.', 'La patagonia te espera, tu decides como vivirla.'],
						gallery: [
							'/images/programas/galeria/descubre-la-patagonia/01.jpg',
							'/images/programas/galeria/descubre-la-patagonia/02.jpg',
							'/images/programas/galeria/descubre-la-patagonia/03.jpg',
							'/images/programas/galeria/descubre-la-patagonia/04.jpg',
							'/images/programas/galeria/descubre-la-patagonia/05.jpg',
							'/images/programas/galeria/descubre-la-patagonia/06.jpg',
							'/images/programas/galeria/descubre-la-patagonia/07.jpg',
							'/images/programas/galeria/descubre-la-patagonia/08.jpg',
							'/images/programas/galeria/descubre-la-patagonia/09.jpg',
							'/images/programas/galeria/descubre-la-patagonia/10.jpg',
							'/images/programas/galeria/descubre-la-patagonia/11.jpg',
							'/images/programas/galeria/descubre-la-patagonia/12.jpg',
						],
					},
					{
						slug: 'maule-rio-abajo',
						fullProgramUrl: '#',
						image: '/images/maule_0_0.jpg',
						imageSrcset:
							'/images/maule_0_0.jpg 1016w, /images/maule_0_0-300x249.jpg 300w, /images/maule_0_0-768x638.jpg 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Maule río abajo',
						description: ['En esta travesía te ofrecemos la posibilidad de navegar el Río Maule y poder acampar en sus alrededores.'],
						details: [
							{ heading: 'Itinerario', items: ['Punto de encuentro Estación de tren Talca', 'Travesía Balsa y Kayak inflable (2 días)', 'Campamento (2 noches)'] },
							{ heading: 'Este programa incluye', items: ['Navegación por el Río Maule', 'Ticket de Tren (buscarril)', 'Guías especializados en rafting y kayak', 'Balsas, kayak, chalecos de flotación', 'Equipamiento de campamento', 'Equipamiento de primeros auxilios', 'Alimentación completa'] },
						],
						gallery: [
							'/images/programas/galeria/maule-rio-abajo/01.jpg',
							'/images/programas/galeria/maule-rio-abajo/02.jpg',
							'/images/programas/galeria/maule-rio-abajo/03.jpg',
							'/images/programas/galeria/maule-rio-abajo/04.jpg',
							'/images/programas/galeria/maule-rio-abajo/05.jpg',
							'/images/programas/galeria/maule-rio-abajo/06.jpg',
							'/images/programas/galeria/maule-rio-abajo/07.jpg',
							'/images/programas/galeria/maule-rio-abajo/08.jpg',
							'/images/programas/galeria/maule-rio-abajo/09.jpg',
							'/images/programas/galeria/maule-rio-abajo/10.jpg',
							'/images/programas/galeria/maule-rio-abajo/11.jpg',
						],
					},
				],
			},
			{
				id: 'programas-educativos',
				label: 'Programas educativos',
				heading: 'Educativos',
				description: ['Complementan el aula, fortalecen vínculos y desarrollan habilidades reales.'],
				ctaLabel: 'Hablemos del programa',
				cards: [
					{
						slug: 'actividades-de-aventura',
						image: '/images/programas/programas-de-aventura.jpg',
						imageSrcset:
							'/images/programas/programas-de-aventura.jpg 447w, /images/programas/programas-de-aventura-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Actividades de aventura',
						description: ['Este tipo de actividades ofrece a los estudiantes la posibilidad de fortalecer el liderazgo, el trabajo en equipo, la sensibilidad humana, el logro de metas y límites personales. Los participantes deben desenvolverse en ambientes completamente naturales, realizando diferentes actividades guiadas por instructores certificados que facilitan el proceso de aprendizaje.'],
						gallery: [
							'/images/programas/galeria/actividades-de-aventura/01.jpg',
							'/images/programas/galeria/actividades-de-aventura/02.jpg',
							'/images/programas/galeria/actividades-de-aventura/03.jpg',
							'/images/programas/galeria/actividades-de-aventura/04.jpg',
							'/images/programas/galeria/actividades-de-aventura/05.jpg',
						],
					},
					{
						slug: 'sensibilizacion-ambiental',
						image: '/images/programas/sensibilizacion-ambiental.jpg',
						imageSrcset:
							'/images/programas/sensibilizacion-ambiental.jpg 447w, /images/programas/sensibilizacion-ambiental-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Sensibilización Ambiental',
						description: ['Estas actividades generan una conexión mágica entre los jóvenes y la naturaleza. Se los estimula a utilizar sus sentidos para explorar su ambiente y a expresar sus sentimientos, ideas y opiniones, haciendo que tomar conciencia de su ambiente y de sí mismos.'],
						thumbnailOnly: true,
						gallery: [
							'/images/programas/galeria/sensibilizacion-ambiental/01.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/02.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/03.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/04.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/05.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/06.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/07.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/08.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/09.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/10.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/11.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/12.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/13.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/14.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/15.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/16.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/17.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/18.jpg',
						],
					},
					{
						slug: 'servicio-comunitario',
						image: '/images/programas/galeria/servicio-comunitario/01.jpg',
						imageSrcset:
							'/images/programas/galeria/servicio-comunitario/01.jpg 1600w, /images/programas/galeria/servicio-comunitario/thumb-768.jpg 768w, /images/programas/galeria/servicio-comunitario/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 576,
						title: 'Servicio comunitario',
						description: ['Esta experiencia permite el conocimiento y contacto con la realidad social y económica de las comunidades, viviendo un proceso de sensibilización que estimula el desarrollo de los valores y actitudes de solidaridad, respeto, responsabilidad social y compromiso. Contribuyendo al desarrollo y mejoramiento de la calidad de vida de las comunidades'],
						gallery: [
							'/images/programas/galeria/servicio-comunitario/02.jpg',
							'/images/programas/galeria/servicio-comunitario/03.jpg',
							'/images/programas/galeria/servicio-comunitario/04.jpg',
							'/images/programas/galeria/servicio-comunitario/05.jpg',
							'/images/programas/galeria/servicio-comunitario/06.jpg',
							'/images/programas/galeria/servicio-comunitario/07.jpg',
						],
					},
					{
						slug: 'liderazgo-y-trabajo-en-equipo',
						image: '/images/programas/liderazgo.jpg',
						imageSrcset: '/images/programas/liderazgo.jpg 447w, /images/programas/liderazgo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Liderazgo y trabajo en equipo',
						description: ['Estas actividades permiten a los estudiantes desarrollar y potenciar diferentes habilidades relacionadas con la comunicación, la resolución de conflictos y logro de desafíos grupales.'],
						thumbnailOnly: true,
						gallery: [
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/01.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/02.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/03.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/04.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/05.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/06.jpg',
						],
					},
					{
						slug: 'exploracion-y-descubrimiento-del-entorno',
						image: '/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/01.jpg',
						imageSrcset:
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/01.jpg 1600w, /images/programas/galeria/exploracion-y-descubrimiento-del-entorno/thumb-768.jpg 768w, /images/programas/galeria/exploracion-y-descubrimiento-del-entorno/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 576,
						title: 'Exploración y descubrimiento del entorno',
						description: ['Este tipo de actividades permite el aprendizaje experiencial en temas específicos como: flora, fauna, biodiversidad, impacto ambiental, manejo y protección de recursos naturales, además de otros propuestos por los colegios relacionados con la malla curricular. El objetivo de estas actividades es incrementar la comprensión de los conceptos trabajados en los programas de estudio.'],
						gallery: [
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/02.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/03.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/04.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/05.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/06.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/07.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/08.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/09.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/10.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/11.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/12.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/13.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/14.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/15.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/16.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/17.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/18.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/19.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/20.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/21.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/22.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/23.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/24.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/25.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/26.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/27.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/28.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/29.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/30.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/31.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/32.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/33.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/34.jpg',
						],
					},
					{
						slug: 'actividades-de-campamento',
						image: '/images/programas/galeria/actividades-de-campamento/01.jpg',
						imageSrcset:
							'/images/programas/galeria/actividades-de-campamento/01.jpg 1600w, /images/programas/galeria/actividades-de-campamento/thumb-768.jpg 768w, /images/programas/galeria/actividades-de-campamento/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 576,
						title: 'Actividades de Campamento',
						gallery: [
							'/images/programas/galeria/actividades-de-campamento/02.jpg',
							'/images/programas/galeria/actividades-de-campamento/03.jpg',
							'/images/programas/galeria/actividades-de-campamento/04.jpg',
							'/images/programas/galeria/actividades-de-campamento/05.jpg',
							'/images/programas/galeria/actividades-de-campamento/06.jpg',
							'/images/programas/galeria/actividades-de-campamento/07.jpg',
							'/images/programas/galeria/actividades-de-campamento/08.jpg',
							'/images/programas/galeria/actividades-de-campamento/09.jpg',
							'/images/programas/galeria/actividades-de-campamento/10.jpg',
							'/images/programas/galeria/actividades-de-campamento/11.jpg',
							'/images/programas/galeria/actividades-de-campamento/12.jpg',
							'/images/programas/galeria/actividades-de-campamento/13.jpg',
							'/images/programas/galeria/actividades-de-campamento/14.jpg',
							'/images/programas/galeria/actividades-de-campamento/15.jpg',
							'/images/programas/galeria/actividades-de-campamento/16.jpg',
							'/images/programas/galeria/actividades-de-campamento/17.jpg',
							'/images/programas/galeria/actividades-de-campamento/18.jpg',
							'/images/programas/galeria/actividades-de-campamento/19.jpg',
							'/images/programas/galeria/actividades-de-campamento/20.jpg',
							'/images/programas/galeria/actividades-de-campamento/21.jpg',
						],
					},
				],
			},
			{
				id: 'programas-organizacionales',
				label: 'Programas organizacionales',
				heading: 'Organizacionales',
				description: ['Desafía a los equipos afuera para que trabajen mejor adentro.'],
				ctaLabel: 'Hablemos del programa',
				cards: [
					{
						slug: 'educacion-y-proteccion-del-medio-ambiente',
						image: '/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/01.jpg',
						imageSrcset:
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/01.jpg 1016w, /images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/thumb-768.jpg 768w, /images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Educación y protección del medio ambiente',
						gallery: [
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/02.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/03.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/04.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/05.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/06.jpg',
						],
					},
					{
						slug: 'incentivo-laboral',
						image: '/images/programas/galeria/incentivo-laboral/01.jpg',
						imageSrcset:
							'/images/programas/galeria/incentivo-laboral/01.jpg 1016w, /images/programas/galeria/incentivo-laboral/thumb-768.jpg 768w, /images/programas/galeria/incentivo-laboral/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Incentivo laboral',
						gallery: [
							'/images/programas/galeria/incentivo-laboral/02.jpg',
							'/images/programas/galeria/incentivo-laboral/03.jpg',
							'/images/programas/galeria/incentivo-laboral/04.jpg',
							'/images/programas/galeria/incentivo-laboral/05.jpg',
							'/images/programas/galeria/incentivo-laboral/06.jpg',
						],
					},
					{
						slug: 'actividades-corporativas',
						image: '/images/programas/galeria/actividades-corporativas/01.jpg',
						imageSrcset:
							'/images/programas/galeria/actividades-corporativas/01.jpg 1016w, /images/programas/galeria/actividades-corporativas/thumb-768.jpg 768w, /images/programas/galeria/actividades-corporativas/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Actividades Corporativas',
						gallery: [
							'/images/programas/galeria/actividades-corporativas/02.jpg',
							'/images/programas/galeria/actividades-corporativas/03.jpg',
							'/images/programas/galeria/actividades-corporativas/04.jpg',
							'/images/programas/galeria/actividades-corporativas/05.jpg',
							'/images/programas/galeria/actividades-corporativas/06.jpg',
						],
					},
					{
						slug: 'desarrollo-organizacional',
						image: '/images/programas/galeria/desarrollo-organizacional/01.jpg',
						imageSrcset:
							'/images/programas/galeria/desarrollo-organizacional/01.jpg 1016w, /images/programas/galeria/desarrollo-organizacional/thumb-768.jpg 768w, /images/programas/galeria/desarrollo-organizacional/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Desarrollo Organizacional',
						gallery: [
							'/images/programas/galeria/desarrollo-organizacional/02.jpg',
							'/images/programas/galeria/desarrollo-organizacional/03.jpg',
							'/images/programas/galeria/desarrollo-organizacional/05.jpg',
							'/images/programas/galeria/desarrollo-organizacional/06.jpg',
						],
					},
				],
			},
		],
	},
	en: {
		heroTitle: "Let's go together",
		heroImage: '/images/banner7-1.jpg',
		badge: 'Programs',
		heading: 'Choose your next experience',
		subheading: 'Explore our programs and pick what best fits your group',
		tabs: [
			{
				id: 'adventure-programs',
				label: 'Adventure programs',
				heading: 'Adventure',
				description: ['Reconnects you with nature and reveals what you are capable of.'],
				ctaLabel: 'Build your adventure',
				cards: [
					{
						slug: 'three-lakes-crossing',
						fullProgramUrl: '#',
						image: '/images/programas/Portada-tres-lagos.png',
						imageSrcset:
							'/images/programas/Portada-tres-lagos.png 1016w, /images/programas/Portada-tres-lagos-300x249.png 300w, /images/programas/Portada-tres-lagos-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Three Lakes Crossing',
						description: ['Embark on a dream journey sailing across three crystal-clear lakes, surrounded by towering mountains and native forests.'],
						gallery: [
							'/images/programas/galeria/travesia-tres-lagos/01.jpg',
							'/images/programas/galeria/travesia-tres-lagos/02.jpg',
							'/images/programas/galeria/travesia-tres-lagos/03.jpg',
							'/images/programas/galeria/travesia-tres-lagos/04.jpg',
							'/images/programas/galeria/travesia-tres-lagos/05.jpg',
							'/images/programas/galeria/travesia-tres-lagos/06.jpg',
							'/images/programas/galeria/travesia-tres-lagos/07.jpg',
							'/images/programas/galeria/travesia-tres-lagos/08.jpg',
							'/images/programas/galeria/travesia-tres-lagos/09.jpg',
							'/images/programas/galeria/travesia-tres-lagos/10.jpg',
							'/images/programas/galeria/travesia-tres-lagos/11.jpg',
						],
					},
					{
						slug: 'discover-patagonia',
						image: '/images/programas/Portada-descubre-la-patagonia.png',
						imageSrcset:
							'/images/programas/Portada-descubre-la-patagonia.png 1016w, /images/programas/Portada-descubre-la-patagonia-300x249.png 300w, /images/programas/Portada-descubre-la-patagonia-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Discover Patagonia',
						description: ['Traveling to Patagonia is a way of connecting with the essentials: vast landscapes, pure air and simple moments. Every corner invites you to take your time and experience nature at your own pace.', 'Patagonia awaits you, you decide how to live it.'],
						gallery: [
							'/images/programas/galeria/descubre-la-patagonia/01.jpg',
							'/images/programas/galeria/descubre-la-patagonia/02.jpg',
							'/images/programas/galeria/descubre-la-patagonia/03.jpg',
							'/images/programas/galeria/descubre-la-patagonia/04.jpg',
							'/images/programas/galeria/descubre-la-patagonia/05.jpg',
							'/images/programas/galeria/descubre-la-patagonia/06.jpg',
							'/images/programas/galeria/descubre-la-patagonia/07.jpg',
							'/images/programas/galeria/descubre-la-patagonia/08.jpg',
							'/images/programas/galeria/descubre-la-patagonia/09.jpg',
							'/images/programas/galeria/descubre-la-patagonia/10.jpg',
							'/images/programas/galeria/descubre-la-patagonia/11.jpg',
							'/images/programas/galeria/descubre-la-patagonia/12.jpg',
						],
					},
					{
						slug: 'maule-river',
						fullProgramUrl: '#',
						image: '/images/programas/programas_maule.jpg',
						imageSrcset:
							'/images/programas/programas_maule.jpg 1016w, /images/programas/programas_maule-300x249.jpg 300w, /images/programas/programas_maule-768x638.jpg 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Maule River',
						description: ['On this journey we offer you the chance to navigate the Maule River and camp along its banks.'],
						details: [
							{ heading: 'Itinerary', items: ['Meeting point: Talca train station', 'Inflatable raft and kayak journey (2 days)', 'Camping (2 nights)'] },
							{ heading: 'This program includes', items: ['Navigation on the Maule River', 'Train ticket (railbus)', 'Specialized rafting and kayaking guides', 'Rafts, kayaks and life jackets', 'Camping equipment', 'First aid equipment', 'Full meals'] },
						],
						gallery: [
							'/images/programas/galeria/maule-rio-abajo/01.jpg',
							'/images/programas/galeria/maule-rio-abajo/02.jpg',
							'/images/programas/galeria/maule-rio-abajo/03.jpg',
							'/images/programas/galeria/maule-rio-abajo/04.jpg',
							'/images/programas/galeria/maule-rio-abajo/05.jpg',
							'/images/programas/galeria/maule-rio-abajo/06.jpg',
							'/images/programas/galeria/maule-rio-abajo/07.jpg',
							'/images/programas/galeria/maule-rio-abajo/08.jpg',
							'/images/programas/galeria/maule-rio-abajo/09.jpg',
							'/images/programas/galeria/maule-rio-abajo/10.jpg',
							'/images/programas/galeria/maule-rio-abajo/11.jpg',
						],
					},
				],
			},
			{
				id: 'educational-programs',
				label: 'Educational programs',
				heading: 'Educational',
				description: ['Complements the classroom, strengthens bonds and builds real skills.'],
				ctaLabel: "Let's talk about the program",
				cards: [
					{
						slug: 'adventure-activities',
						image: '/images/programas/programas-de-aventura-1.jpg',
						imageSrcset:
							'/images/programas/programas-de-aventura-1.jpg 447w, /images/programas/programas-de-aventura-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Adventure Activities',
						description: ['This type of activity gives students the chance to strengthen leadership, teamwork, human sensitivity, and the achievement of goals and personal limits. Participants must make their way in completely natural environments, carrying out different activities guided by certified instructors who facilitate the learning process.'],
						gallery: [
							'/images/programas/galeria/actividades-de-aventura/01.jpg',
							'/images/programas/galeria/actividades-de-aventura/02.jpg',
							'/images/programas/galeria/actividades-de-aventura/03.jpg',
							'/images/programas/galeria/actividades-de-aventura/04.jpg',
							'/images/programas/galeria/actividades-de-aventura/05.jpg',
						],
					},
					{
						slug: 'awareness-activities',
						image: '/images/programas/sensibilizacion-ambiental-1.jpg',
						imageSrcset:
							'/images/programas/sensibilizacion-ambiental-1.jpg 447w, /images/programas/sensibilizacion-ambiental-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Awareness Activities',
						description: ['These activities create a magical connection between young people and nature. They are encouraged to use their senses to explore their surroundings and to express their feelings, ideas and opinions, becoming aware of their environment and of themselves.'],
						thumbnailOnly: true,
						gallery: [
							'/images/programas/galeria/sensibilizacion-ambiental/01.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/02.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/03.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/04.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/05.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/06.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/07.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/08.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/09.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/10.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/11.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/12.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/13.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/14.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/15.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/16.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/17.jpg',
							'/images/programas/galeria/sensibilizacion-ambiental/18.jpg',
						],
					},
					{
						slug: 'community-service',
						image: '/images/programas/galeria/servicio-comunitario/01.jpg',
						imageSrcset:
							'/images/programas/galeria/servicio-comunitario/01.jpg 1600w, /images/programas/galeria/servicio-comunitario/thumb-768.jpg 768w, /images/programas/galeria/servicio-comunitario/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 576,
						title: 'Community service',
						description: ['This experience provides knowledge of and contact with the social and economic reality of communities, through a sensitization process that fosters the values and attitudes of solidarity, respect, social responsibility and commitment, contributing to the development and improvement of the quality of life of communities.'],
						gallery: [
							'/images/programas/galeria/servicio-comunitario/02.jpg',
							'/images/programas/galeria/servicio-comunitario/03.jpg',
							'/images/programas/galeria/servicio-comunitario/04.jpg',
							'/images/programas/galeria/servicio-comunitario/05.jpg',
							'/images/programas/galeria/servicio-comunitario/06.jpg',
							'/images/programas/galeria/servicio-comunitario/07.jpg',
						],
					},
					{
						slug: 'exploration-workshops-and-activities',
						image: '/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/01.jpg',
						imageSrcset:
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/01.jpg 1600w, /images/programas/galeria/exploracion-y-descubrimiento-del-entorno/thumb-768.jpg 768w, /images/programas/galeria/exploracion-y-descubrimiento-del-entorno/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 576,
						title: 'Exploration Workshops and Activities',
						description: ['This type of activity enables experiential learning on specific topics such as flora, fauna, biodiversity, environmental impact, and the management and protection of natural resources, as well as others proposed by schools in line with their curriculum. The goal of these activities is to deepen the understanding of the concepts covered in the study programs.'],
						gallery: [
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/02.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/03.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/04.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/05.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/06.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/07.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/08.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/09.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/10.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/11.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/12.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/13.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/14.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/15.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/16.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/17.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/18.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/19.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/20.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/21.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/22.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/23.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/24.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/25.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/26.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/27.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/28.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/29.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/30.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/31.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/32.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/33.jpg',
							'/images/programas/galeria/exploracion-y-descubrimiento-del-entorno/34.jpg',
						],
					},
					{
						slug: 'camping-workshops-and-activities',
						image: '/images/programas/galeria/actividades-de-campamento/01.jpg',
						imageSrcset:
							'/images/programas/galeria/actividades-de-campamento/01.jpg 1600w, /images/programas/galeria/actividades-de-campamento/thumb-768.jpg 768w, /images/programas/galeria/actividades-de-campamento/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 576,
						title: 'Camping Workshops and Activities',
						gallery: [
							'/images/programas/galeria/actividades-de-campamento/02.jpg',
							'/images/programas/galeria/actividades-de-campamento/03.jpg',
							'/images/programas/galeria/actividades-de-campamento/04.jpg',
							'/images/programas/galeria/actividades-de-campamento/05.jpg',
							'/images/programas/galeria/actividades-de-campamento/06.jpg',
							'/images/programas/galeria/actividades-de-campamento/07.jpg',
							'/images/programas/galeria/actividades-de-campamento/08.jpg',
							'/images/programas/galeria/actividades-de-campamento/09.jpg',
							'/images/programas/galeria/actividades-de-campamento/10.jpg',
							'/images/programas/galeria/actividades-de-campamento/11.jpg',
							'/images/programas/galeria/actividades-de-campamento/12.jpg',
							'/images/programas/galeria/actividades-de-campamento/13.jpg',
							'/images/programas/galeria/actividades-de-campamento/14.jpg',
							'/images/programas/galeria/actividades-de-campamento/15.jpg',
							'/images/programas/galeria/actividades-de-campamento/16.jpg',
							'/images/programas/galeria/actividades-de-campamento/17.jpg',
							'/images/programas/galeria/actividades-de-campamento/18.jpg',
							'/images/programas/galeria/actividades-de-campamento/19.jpg',
							'/images/programas/galeria/actividades-de-campamento/20.jpg',
							'/images/programas/galeria/actividades-de-campamento/21.jpg',
						],
					},
					{
						slug: 'teamwork-and-leadership-workshops',
						image: '/images/programas/liderazgo.jpg',
						imageSrcset: '/images/programas/liderazgo.jpg 447w, /images/programas/liderazgo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Teamwork and Leadership Workshops',
						description: ['These activities allow students to develop and strengthen different skills related to communication, conflict resolution and the achievement of group challenges.'],
						thumbnailOnly: true,
						gallery: [
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/01.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/02.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/03.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/04.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/05.jpg',
							'/images/programas/galeria/liderazgo-y-trabajo-en-equipo/06.jpg',
						],
					},
				],
			},
			{
				id: 'organizational-programs',
				label: 'Organizational programs',
				heading: 'Organizational',
				description: ['Challenges teams outdoors so they work better indoors.'],
				ctaLabel: "Let's talk about the program",
				cards: [
					{
						slug: 'organizational-development',
						image: '/images/programas/galeria/desarrollo-organizacional/01.jpg',
						imageSrcset:
							'/images/programas/galeria/desarrollo-organizacional/01.jpg 1016w, /images/programas/galeria/desarrollo-organizacional/thumb-768.jpg 768w, /images/programas/galeria/desarrollo-organizacional/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Organizational Development',
						gallery: [
							'/images/programas/galeria/desarrollo-organizacional/02.jpg',
							'/images/programas/galeria/desarrollo-organizacional/03.jpg',
							'/images/programas/galeria/desarrollo-organizacional/05.jpg',
							'/images/programas/galeria/desarrollo-organizacional/06.jpg',
						],
					},
					{
						slug: 'corporate-activities',
						image: '/images/programas/galeria/actividades-corporativas/01.jpg',
						imageSrcset:
							'/images/programas/galeria/actividades-corporativas/01.jpg 1016w, /images/programas/galeria/actividades-corporativas/thumb-768.jpg 768w, /images/programas/galeria/actividades-corporativas/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Corporate Activities',
						gallery: [
							'/images/programas/galeria/actividades-corporativas/02.jpg',
							'/images/programas/galeria/actividades-corporativas/03.jpg',
							'/images/programas/galeria/actividades-corporativas/04.jpg',
							'/images/programas/galeria/actividades-corporativas/05.jpg',
							'/images/programas/galeria/actividades-corporativas/06.jpg',
						],
					},
					{
						slug: 'workforce-motivation',
						image: '/images/programas/galeria/incentivo-laboral/01.jpg',
						imageSrcset:
							'/images/programas/galeria/incentivo-laboral/01.jpg 1016w, /images/programas/galeria/incentivo-laboral/thumb-768.jpg 768w, /images/programas/galeria/incentivo-laboral/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Workforce Motivation',
						gallery: [
							'/images/programas/galeria/incentivo-laboral/02.jpg',
							'/images/programas/galeria/incentivo-laboral/03.jpg',
							'/images/programas/galeria/incentivo-laboral/04.jpg',
							'/images/programas/galeria/incentivo-laboral/05.jpg',
							'/images/programas/galeria/incentivo-laboral/06.jpg',
						],
					},
					{
						slug: 'environmental-education-and-protection',
						image: '/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/01.jpg',
						imageSrcset:
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/01.jpg 1016w, /images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/thumb-768.jpg 768w, /images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/thumb-300.jpg 300w',
						imageWidth: 768,
						imageHeight: 638,
						title: 'Environmental Education and Protection',
						gallery: [
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/02.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/03.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/04.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/05.jpg',
							'/images/programas/galeria/educacion-y-proteccion-del-medio-ambiente/06.jpg',
						],
					},
				],
			},
		],
	},
};

export const programasContent = withBaseDeep(rawProgramasContent);

export interface ResolvedProgram {
	tab: ProgramTab;
	card: ProgramCard;
	prevCard: ProgramCard | null;
	nextCard: ProgramCard | null;
}

export function getProgramSlugs(lang: Lang): string[] {
	return programasContent[lang].tabs.flatMap((tab) => tab.cards.map((card) => card.slug));
}

export function getProgramBySlug(lang: Lang, slug: string): ResolvedProgram | null {
	for (const tab of programasContent[lang].tabs) {
		const index = tab.cards.findIndex((card) => card.slug === slug);
		if (index === -1) continue;
		return {
			tab,
			card: tab.cards[index],
			prevCard: index > 0 ? tab.cards[index - 1] : null,
			nextCard: index < tab.cards.length - 1 ? tab.cards[index + 1] : null,
		};
	}
	return null;
}

/** Spanish program slug -> English program slug (programs missing from the English site are omitted). */
const esToEnSlug: Record<string, string> = {
	'travesia-tres-lagos': 'three-lakes-crossing',
	'descubre-la-patagonia': 'discover-patagonia',
	'maule-rio-abajo': 'maule-river',
	'actividades-de-aventura': 'adventure-activities',
	'sensibilizacion-ambiental': 'awareness-activities',
	'servicio-comunitario': 'community-service',
	'liderazgo-y-trabajo-en-equipo': 'teamwork-and-leadership-workshops',
	'exploracion-y-descubrimiento-del-entorno': 'exploration-workshops-and-activities',
	'actividades-de-campamento': 'camping-workshops-and-activities',
	'educacion-y-proteccion-del-medio-ambiente': 'environmental-education-and-protection',
	'incentivo-laboral': 'workforce-motivation',
	'actividades-corporativas': 'corporate-activities',
	'desarrollo-organizacional': 'organizational-development',
};

/** Paths (no locale prefix) of a program's detail page in both languages; falls back to the list page. */
export function getProgramAlternatePaths(lang: Lang, slug: string): { es: string; en: string } {
	const esSlug = lang === 'es' ? slug : Object.keys(esToEnSlug).find((k) => esToEnSlug[k] === slug);
	const enSlug = lang === 'en' ? slug : esToEnSlug[slug];
	return {
		es: esSlug ? `/programas/${esSlug}` : '/programas',
		en: enSlug ? `/programs/${enSlug}` : '/programs',
	};
}
