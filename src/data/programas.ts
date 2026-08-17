import type { Lang } from '../i18n/ui';

export interface ProgramCard {
	href: string;
	image: string;
	imageSrcset: string;
	imageWidth: number;
	imageHeight: number;
	title: string;
}

export interface ProgramTab {
	id: string;
	label: string;
	heading: string;
	description: string[];
	cards: ProgramCard[];
}

export interface ProgramasContent {
	heroTitle: string;
	heroImage: string;
	tabs: ProgramTab[];
}

export const programasContent: Record<Lang, ProgramasContent> = {
	es: {
		heroTitle: 'Programas',
		heroImage: '/images/banner7.jpg',
		tabs: [
			{
				id: 'programas-de-aventura',
				label: 'Programas de aventura',
				heading: 'Programas de aventura',
				description: [
					'Este tipo de actividades ofrece la posibilidad de conectarse con la naturaleza y vivir una experiencia única que permite a los participantes conocer y valorar aspectos históricos, geográficos y culturales para adquirir una visión más completa de la realidad nacional o extranjera.',
				],
				cards: [
					{
						href: 'https://coe.cl/2025/06/29/travesia-tres-lagos/',
						image: '/images/programas/Portada-tres-lagos.png',
						imageSrcset:
							'/images/programas/Portada-tres-lagos.png 1016w, /images/programas/Portada-tres-lagos-300x249.png 300w, /images/programas/Portada-tres-lagos-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Travesía tres lagos',
					},
					{
						href: 'https://coe.cl/2025/06/18/programa-patagonia/',
						image: '/images/programas/Portada-descubre-la-patagonia.png',
						imageSrcset:
							'/images/programas/Portada-descubre-la-patagonia.png 1016w, /images/programas/Portada-descubre-la-patagonia-300x249.png 300w, /images/programas/Portada-descubre-la-patagonia-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Descubre la Patagonia',
					},
					{
						href: 'https://coe.cl/2022/08/29/maule-rio-abajo/',
						image: '/images/maule_0_0.jpg',
						imageSrcset:
							'/images/maule_0_0.jpg 1016w, /images/maule_0_0-300x249.jpg 300w, /images/maule_0_0-768x638.jpg 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Maule río abajo',
					},
				],
			},
			{
				id: 'programas-educativos',
				label: 'Programas educativos',
				heading: 'Programas educativos',
				description: [
					'Estos buscan complementar los procesos curriculares, proporcionando experiencias que conecten a los estudiantes con la naturaleza generando instancias no solo de aprendizaje académico sino también de autoconocimiento y desarrollo personal.',
					'Estos programas se organizan de acuerdo a las necesidades y propuestas de cada institución con una variada gama de actividades.',
				],
				cards: [
					{
						href: 'https://coe.cl/2022/09/06/actividades-de-aventura/',
						image: '/images/programas/programas-de-aventura.jpg',
						imageSrcset:
							'/images/programas/programas-de-aventura.jpg 447w, /images/programas/programas-de-aventura-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Actividades de aventura',
					},
					{
						href: 'https://coe.cl/2022/09/06/sensibilizacion-ambiental/',
						image: '/images/programas/sensibilizacion-ambiental.jpg',
						imageSrcset:
							'/images/programas/sensibilizacion-ambiental.jpg 447w, /images/programas/sensibilizacion-ambiental-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Sensibilización Ambiental',
					},
					{
						href: 'https://coe.cl/2022/09/06/servicio-comunitario/',
						image: '/images/programas/servicio-comunitario.jpg',
						imageSrcset:
							'/images/programas/servicio-comunitario.jpg 447w, /images/programas/servicio-comunitario-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Servicio comunitario',
					},
					{
						href: 'https://coe.cl/2022/09/06/prueba-programa-educativo/',
						image: '/images/programas/liderazgo.jpg',
						imageSrcset: '/images/programas/liderazgo.jpg 447w, /images/programas/liderazgo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Liderazgo y trabajo en equipo',
					},
					{
						href: 'https://coe.cl/2022/09/04/tercer-programa-educativo/',
						image: '/images/programas/exploracion.jpg',
						imageSrcset: '/images/programas/exploracion.jpg 447w, /images/programas/exploracion-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Exploración y descubrimiento del entorno',
					},
					{
						href: 'https://coe.cl/2022/09/02/otro-programa-educativo/',
						image: '/images/programas/campamento.jpg',
						imageSrcset: '/images/programas/campamento.jpg 447w, /images/programas/campamento-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Actividades de Campamento',
					},
					{
						href: 'https://coe.cl/2022/08/05/giras-de-estudio/',
						image: '/images/programas/giras.jpg',
						imageSrcset: '/images/programas/giras.jpg 447w, /images/programas/giras-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Giras de Estudio',
					},
				],
			},
			{
				id: 'programas-organizacionales',
				label: 'Programas organizacionales',
				heading: 'Programas organizacionales',
				description: [
					'Estos programas buscan generar cambios tanto internos como externos en un ámbito de responsabilidad social, ya sea para mejorar las condiciones organizacionales o de clima laboral que pueden incidir en la productividad, la calidad de vida y el desarrollo personal de los individuos.',
					'COE hace posible lo anterior con una metodología integradora, ágil y vivencial que permite a los participantes generar cambios que surgen desde su interior.',
				],
				cards: [
					{
						href: 'https://coe.cl/2022/09/07/educacion-y-proteccion-del-medio-ambiente/',
						image: '/images/programas/educacion-y-proteccion.jpg',
						imageSrcset:
							'/images/programas/educacion-y-proteccion.jpg 447w, /images/programas/educacion-y-proteccion-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Educación y protección del medio ambiente',
					},
					{
						href: 'https://coe.cl/2022/09/07/incentivo-laboral/',
						image: '/images/programas/incentivo.jpg',
						imageSrcset: '/images/programas/incentivo.jpg 447w, /images/programas/incentivo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Incentivo laboral',
					},
					{
						href: 'https://coe.cl/2022/09/07/actividades-corporativas/',
						image: '/images/programas/corporativas.jpg',
						imageSrcset: '/images/programas/corporativas.jpg 447w, /images/programas/corporativas-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Actividades Corporativas',
					},
					{
						href: 'https://coe.cl/2022/09/07/desarrollo-organizacional-2/',
						image: '/images/programas/desarrollo-organizacion.jpg',
						imageSrcset:
							'/images/programas/desarrollo-organizacion.jpg 447w, /images/programas/desarrollo-organizacion-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Desarrollo Organizacional',
					},
				],
			},
		],
	},
	en: {
		heroTitle: 'Programs',
		heroImage: '/images/banner7-1.jpg',
		tabs: [
			{
				id: 'adventure-programs',
				label: 'Adventure programs',
				heading: 'Adventure programs',
				description: [
					'These types of activities offer the possibility of connecting with nature and living a unique experience that allows participants to learn about and value historical, geographical and cultural aspects to acquire a more complete vision of the national or foreign reality.',
				],
				cards: [
					{
						href: 'https://coe.cl/en/2022/09/07/maule-river-2/',
						image: '/images/programas/programas_maule.jpg',
						imageSrcset:
							'/images/programas/programas_maule.jpg 1016w, /images/programas/programas_maule-300x249.jpg 300w, /images/programas/programas_maule-768x638.jpg 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Maule River',
					},
				],
			},
			{
				id: 'educational-programs',
				label: 'Educational programs',
				heading: 'Educational programs',
				description: [
					'These programs seek to complement the curricular processes, providing experiences that connect students with nature, generating instances not only for academic learning but also for self-knowledge and personal development.',
					'These programs are organized from a wide range of activities according to the needs and proposals of each institution.',
				],
				cards: [
					{
						href: 'https://coe.cl/en/2022/09/07/adventure-activities/',
						image: '/images/programas/programas-de-aventura-1.jpg',
						imageSrcset:
							'/images/programas/programas-de-aventura-1.jpg 447w, /images/programas/programas-de-aventura-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Adventure Activities',
					},
					{
						href: 'https://coe.cl/en/2022/09/07/awareness-activities/',
						image: '/images/programas/sensibilizacion-ambiental-1.jpg',
						imageSrcset:
							'/images/programas/sensibilizacion-ambiental-1.jpg 447w, /images/programas/sensibilizacion-ambiental-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Awareness Activities',
					},
					{
						href: 'https://coe.cl/en/2022/09/07/community-service/',
						image: '/images/programas/servicio-comunitario-1.jpg',
						imageSrcset:
							'/images/programas/servicio-comunitario-1.jpg 447w, /images/programas/servicio-comunitario-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Community service',
					},
					{
						href: 'https://coe.cl/en/2022/09/07/exploration-workshops-and-activities/',
						image: '/images/programas/exploracion-1.jpg',
						imageSrcset: '/images/programas/exploracion-1.jpg 447w, /images/programas/exploracion-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Exploration Workshops and Activities',
					},
					{
						href: 'https://coe.cl/en/2022/09/07/camping-workshops-and-activities/',
						image: '/images/programas/campamento-1.jpg',
						imageSrcset: '/images/programas/campamento-1.jpg 447w, /images/programas/campamento-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Camping Workshops and Activities',
					},
					{
						href: 'https://coe.cl/en/2022/08/29/educational-program-test/',
						image: '/images/programas/liderazgo.jpg',
						imageSrcset: '/images/programas/liderazgo.jpg 447w, /images/programas/liderazgo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Teamwork and Leadership Workshops',
					},
					{
						href: 'https://coe.cl/en/2022/08/07/study-tours/',
						image: '/images/programas/giras-1.jpg',
						imageSrcset: '/images/programas/giras-1.jpg 447w, /images/programas/giras-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Study Tours',
					},
				],
			},
			{
				id: 'organizational-programs',
				label: 'Organizational programs',
				heading: 'Organizational programs',
				description: [
					'These programs seek to generate both internal and external changes in an area of social responsibility, either to improve organizational conditions or the work environment that can affect the productivity, quality of life and personal development of individuals.',
					'COE makes the above possible with an integrating, agile and experiential methodology that allows participants to generate changes that arise from within.',
				],
				cards: [
					{
						href: 'https://coe.cl/en/2022/09/07/organizational-development/',
						image: '/images/programas/desarrollo-organizacion-1.jpg',
						imageSrcset:
							'/images/programas/desarrollo-organizacion-1.jpg 447w, /images/programas/desarrollo-organizacion-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Organizational Development',
					},
					{
						href: 'https://coe.cl/en/2022/09/07/corporate-activities/',
						image: '/images/programas/corporativas-1.jpg',
						imageSrcset: '/images/programas/corporativas-1.jpg 447w, /images/programas/corporativas-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Corporate Activities',
					},
					{
						href: 'https://coe.cl/en/2022/09/07/workforce-motivation/',
						image: '/images/programas/incentivo-1.jpg',
						imageSrcset: '/images/programas/incentivo-1.jpg 447w, /images/programas/incentivo-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Workforce Motivation',
					},
					{
						href: 'https://coe.cl/en/2022/09/07/environmental-education-and-protection/',
						image: '/images/programas/educacion-y-proteccion-1.jpg',
						imageSrcset:
							'/images/programas/educacion-y-proteccion-1.jpg 447w, /images/programas/educacion-y-proteccion-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Environmental Education and Protection',
					},
				],
			},
		],
	},
};
