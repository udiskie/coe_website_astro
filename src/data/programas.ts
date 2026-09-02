import type { Lang } from '../i18n/ui';

export interface ProgramCard {
	slug: string;
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

export const programasContent: Record<Lang, ProgramasContent> = {
	es: {
		heroTitle: 'Programas',
		heroImage: '/images/banner7.jpg',
		badge: 'Programas',
		heading: 'Elige tu próxima experiencia',
		subheading: 'Conoce nuestros programas y escoge lo que mejor se adapta a tu grupo',
		tabs: [
			{
				id: 'programas-de-aventura',
				label: 'Programas de aventura',
				heading: 'Programas de aventura',
				description: [
					'Este tipo de actividades ofrece la posibilidad de conectarse con la naturaleza y vivir una experiencia única que permite a los participantes conocer y valorar aspectos históricos, geográficos y culturales para adquirir una visión más completa de la realidad nacional o extranjera.',
				],
				ctaLabel: 'Arma tu aventura',
				cards: [
					{
						slug: 'travesia-tres-lagos',
						image: '/images/programas/Portada-tres-lagos.png',
						imageSrcset:
							'/images/programas/Portada-tres-lagos.png 1016w, /images/programas/Portada-tres-lagos-300x249.png 300w, /images/programas/Portada-tres-lagos-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Travesía tres lagos',
					},
					{
						slug: 'descubre-la-patagonia',
						image: '/images/programas/Portada-descubre-la-patagonia.png',
						imageSrcset:
							'/images/programas/Portada-descubre-la-patagonia.png 1016w, /images/programas/Portada-descubre-la-patagonia-300x249.png 300w, /images/programas/Portada-descubre-la-patagonia-768x638.png 768w',
						imageWidth: 1016,
						imageHeight: 844,
						title: 'Descubre la Patagonia',
					},
					{
						slug: 'maule-rio-abajo',
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
				ctaLabel: 'Solicita este programa',
				cards: [
					{
						slug: 'actividades-de-aventura',
						image: '/images/programas/programas-de-aventura.jpg',
						imageSrcset:
							'/images/programas/programas-de-aventura.jpg 447w, /images/programas/programas-de-aventura-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Actividades de aventura',
					},
					{
						slug: 'sensibilizacion-ambiental',
						image: '/images/programas/sensibilizacion-ambiental.jpg',
						imageSrcset:
							'/images/programas/sensibilizacion-ambiental.jpg 447w, /images/programas/sensibilizacion-ambiental-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Sensibilización Ambiental',
					},
					{
						slug: 'servicio-comunitario',
						image: '/images/programas/servicio-comunitario.jpg',
						imageSrcset:
							'/images/programas/servicio-comunitario.jpg 447w, /images/programas/servicio-comunitario-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Servicio comunitario',
					},
					{
						slug: 'liderazgo-y-trabajo-en-equipo',
						image: '/images/programas/liderazgo.jpg',
						imageSrcset: '/images/programas/liderazgo.jpg 447w, /images/programas/liderazgo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Liderazgo y trabajo en equipo',
					},
					{
						slug: 'exploracion-y-descubrimiento-del-entorno',
						image: '/images/programas/exploracion.jpg',
						imageSrcset: '/images/programas/exploracion.jpg 447w, /images/programas/exploracion-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Exploración y descubrimiento del entorno',
					},
					{
						slug: 'actividades-de-campamento',
						image: '/images/programas/campamento.jpg',
						imageSrcset: '/images/programas/campamento.jpg 447w, /images/programas/campamento-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Actividades de Campamento',
					},
					{
						slug: 'giras-de-estudio',
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
				ctaLabel: 'Solicita este programa',
				cards: [
					{
						slug: 'educacion-y-proteccion-del-medio-ambiente',
						image: '/images/programas/educacion-y-proteccion.jpg',
						imageSrcset:
							'/images/programas/educacion-y-proteccion.jpg 447w, /images/programas/educacion-y-proteccion-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Educación y protección del medio ambiente',
					},
					{
						slug: 'incentivo-laboral',
						image: '/images/programas/incentivo.jpg',
						imageSrcset: '/images/programas/incentivo.jpg 447w, /images/programas/incentivo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Incentivo laboral',
					},
					{
						slug: 'actividades-corporativas',
						image: '/images/programas/corporativas.jpg',
						imageSrcset: '/images/programas/corporativas.jpg 447w, /images/programas/corporativas-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Actividades Corporativas',
					},
					{
						slug: 'desarrollo-organizacional',
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
		badge: 'Programs',
		heading: 'Choose your next experience',
		subheading: 'Explore our programs and pick what best fits your group',
		tabs: [
			{
				id: 'adventure-programs',
				label: 'Adventure programs',
				heading: 'Adventure programs',
				description: [
					'These types of activities offer the possibility of connecting with nature and living a unique experience that allows participants to learn about and value historical, geographical and cultural aspects to acquire a more complete vision of the national or foreign reality.',
				],
				ctaLabel: 'Build your adventure',
				cards: [
					{
						slug: 'maule-river',
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
				ctaLabel: 'Request this program',
				cards: [
					{
						slug: 'adventure-activities',
						image: '/images/programas/programas-de-aventura-1.jpg',
						imageSrcset:
							'/images/programas/programas-de-aventura-1.jpg 447w, /images/programas/programas-de-aventura-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Adventure Activities',
					},
					{
						slug: 'awareness-activities',
						image: '/images/programas/sensibilizacion-ambiental-1.jpg',
						imageSrcset:
							'/images/programas/sensibilizacion-ambiental-1.jpg 447w, /images/programas/sensibilizacion-ambiental-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Awareness Activities',
					},
					{
						slug: 'community-service',
						image: '/images/programas/servicio-comunitario-1.jpg',
						imageSrcset:
							'/images/programas/servicio-comunitario-1.jpg 447w, /images/programas/servicio-comunitario-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Community service',
					},
					{
						slug: 'exploration-workshops-and-activities',
						image: '/images/programas/exploracion-1.jpg',
						imageSrcset: '/images/programas/exploracion-1.jpg 447w, /images/programas/exploracion-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Exploration Workshops and Activities',
					},
					{
						slug: 'camping-workshops-and-activities',
						image: '/images/programas/campamento-1.jpg',
						imageSrcset: '/images/programas/campamento-1.jpg 447w, /images/programas/campamento-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Camping Workshops and Activities',
					},
					{
						slug: 'teamwork-and-leadership-workshops',
						image: '/images/programas/liderazgo.jpg',
						imageSrcset: '/images/programas/liderazgo.jpg 447w, /images/programas/liderazgo-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Teamwork and Leadership Workshops',
					},
					{
						slug: 'study-tours',
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
				ctaLabel: 'Request this program',
				cards: [
					{
						slug: 'organizational-development',
						image: '/images/programas/desarrollo-organizacion-1.jpg',
						imageSrcset:
							'/images/programas/desarrollo-organizacion-1.jpg 447w, /images/programas/desarrollo-organizacion-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Organizational Development',
					},
					{
						slug: 'corporate-activities',
						image: '/images/programas/corporativas-1.jpg',
						imageSrcset: '/images/programas/corporativas-1.jpg 447w, /images/programas/corporativas-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Corporate Activities',
					},
					{
						slug: 'workforce-motivation',
						image: '/images/programas/incentivo-1.jpg',
						imageSrcset: '/images/programas/incentivo-1.jpg 447w, /images/programas/incentivo-1-300x249.jpg 300w',
						imageWidth: 447,
						imageHeight: 371,
						title: 'Workforce Motivation',
					},
					{
						slug: 'environmental-education-and-protection',
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
