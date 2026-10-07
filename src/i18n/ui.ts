import { withBaseDeep } from '../utils/url';

export const languages = {
	es: 'Español',
	en: 'English',
} as const;

export const defaultLang = 'es';

const rawUi = {
	es: {
		html_lang: 'es-CL',
		meta: {
			title: 'COE | Center for Outdoor Education',
			description:
				'Desarrollamos actividades al aire libre que permiten el de desarrollo personal y social a través del contacto con la naturaleza.',
		},
		nav: {
			home: 'Inicio',
			about: 'Sobre COE',
			programs: 'Programas',
			gallery: 'Galería',
			contact: 'Contacto',
		},
		hero: {
			headline: 'Atrévete a salir',
			subheading:
				'Diseñamos experiencias en la naturaleza que desafían y sacan lo mejor de personas, equipos y familias.',
			cta: 'Ver nuestros programas',
		},
		presentacion: {
			heading: 'En COE diseñamos para cada grupo una experiencia distinta',
			educativos: {
				title: 'Educativos',
				alt: 'programas educativos',
				description:
					'Experiencias que complementan el aula, fortalecen vínculos y desarrollan habilidades reales.',
			},
			organizacional: {
				title: 'Organizacionales',
				alt: 'programas organizacionales',
				description:
					'Experiencias que desafían a los equipos, mejoran el clima y potencian el trabajo conjunto.',
			},
			aventura: {
				title: 'Aventura',
				alt: 'programas de aventura',
				description:
					'Experiencias en la naturaleza que reconectan, desafían y sacan lo mejor de cada uno.',
			},
			cta: 'Conocer más',
		},
		servicios: {
			heading: 'Experiencias que ya han marcado la diferencia',
			subheading: 'Revisa nuestra galería para conocer nuestro trabajo',
			cta: 'Ver nuestra galería',
			slides: [
				{ src: '/images/slider_home/santiago_college_2014_1.jpg', alt: 'santiago college coe' },
				{ src: '/images/slider_home/rio_maule.jpg', alt: 'rio maule coe' },
				{ src: '/images/slider_home/rio_maule_rafting.jpg', alt: 'rio maule travesia rafting' },
			],
		},
		aventura: {
			heading: '¡Escoge tu próxima aventura!',
			subheading:
				'Conoce los siguientes programas de aventura que tenemos disponibles para ti',
			featured: {
				image: '/images/maule_0_0.jpg',
				imageSrcset:
					'/images/maule_0_0.jpg 1016w, /images/maule_0_0-300x249.jpg 300w, /images/maule_0_0-768x638.jpg 768w',
				title: 'Maule río abajo',
				description:
					'Navega el Río Maule, acampa bajo las estrellas y descubre de lo que eres capaz. Una travesía diseñada para desafiarte y reconectarte con la naturaleza.',
				cta: 'Ver más',
				slug: 'maule-rio-abajo',
			},
		},
		footer: {
			rights: 'Todos los derechos reservados.',
		},
		sobreCoe: {
			meta: {
				description:
					'Generamos oportunidades de desarrollo personal y social a través de experiencias al aire libre.',
			},
			heroTitle: 'Conócenos',
			heroImage: '/images/banner6.jpg',
			metodologia: {
				heading: 'El espiral, nuestra metodología de trabajo',
				interior: {
					alt: 'programas educativos',
					description:
						'El núcleo representa al sujeto, desde allí es donde se inicia el camino del autoconocimiento.',
				},
				medio: {
					alt: 'programas organizacionales',
					description:
						'En el medio está la comunidad, el individuo se expande hacia el otro, donde el vínculo social se convierte en la semilla de cambio.',
				},
				exterior: {
					alt: 'programas de aventura',
					description:
						'En el exterior está el entorno, utilizando la naturaleza y la aventura como vía de desarrollo personal y social.',
				},
			},
			equipo: {
				heading: 'Nuestro equipo de trabajo',
				readMore: 'Ver más',
				close: 'Cerrar',
			},
		},
		programas: {
			meta: {
				description:
					'Nos enfocamos en el desarrollo de programas educativos, organizacionales y de aventura.',
			},
			back: '‹ Volver',
			viewAll: 'Ver todos los programas',
			fullProgram: 'Ver programa completo',
		},
		galeria: {
			meta: {
				description: 'Explora imágenes de nuestras experiencias y programas al aire libre.',
			},
			heroTitle: 'Galería',
			heroImage: '/images/banner-galeria.jpg',
			back: '‹ Volver',
			viewAll: 'Ver toda la galería',
			photos: 'fotos',
			badge: 'Galería',
			heading: 'Revive nuestras experiencias',
			subheading: 'Explora las fotos de los grupos que han salido con nosotros',
		},
		contacto: {
			meta: {
				description: 'Santiago de Chile | info@coe.cl | +56 9 9918 5049',
			},
			heroTitle: 'Hablemos',
			heroImage: '/images/banner6-1.jpg',
			badge: 'Contacto',
			phoneTitle: 'Teléfono',
			emailTitle: 'Email',
			form: {
				name: 'Nombre',
				lastName: 'Apellido',
				email: 'Email',
				phone: 'Teléfono',
				message: 'Mensaje',
				namePlaceholder: 'José',
				lastNamePlaceholder: 'Gómez',
				emailPlaceholder: 'jose@correo.com',
				phonePlaceholder: '+56 9 1234 5678',
				messagePlaceholder: 'Ingresa tu mensaje',
				submit: 'Enviar',
				sending: 'Enviando...',
			},
		},
	},
	en: {
		html_lang: 'en',
		meta: {
			title: 'COE | Center for Outdoor Education',
			description:
				'We develop outdoor activities that allow personal and social development through contact with nature.',
		},
		nav: {
			home: 'Home',
			about: 'About COE',
			programs: 'Programs',
			gallery: 'Gallery',
			contact: 'Contact',
		},
		hero: {
			headline: 'Dare to get outside',
			subheading:
				'We design experiences in nature that challenge and bring out the best in people, teams and families.',
			cta: 'See our programs',
		},
		presentacion: {
			heading: 'At COE we design a distinct experience for every group',
			educativos: {
				title: 'Educative',
				alt: 'educational programs',
				description:
					'Experiences that complement the classroom, strengthen bonds and build real skills.',
			},
			organizacional: {
				title: 'Corporate',
				alt: 'corporate programs',
				description:
					'Experiences that challenge teams, improve the work environment and boost teamwork.',
			},
			aventura: {
				title: 'Adventure',
				alt: 'adventure programs',
				description:
					'Experiences in nature that reconnect, challenge and bring out the best in everyone.',
			},
			cta: 'Learn more',
		},
		servicios: {
			heading: 'Experiences that have already made a difference',
			subheading: 'Browse our gallery to see our work.',
			cta: 'See our gallery',
			slides: [
				{ src: '/images/slider_home/santiago_college_2014_1.jpg', alt: 'santiago college coe' },
				{ src: '/images/slider_home/rio_maule.jpg', alt: 'rio maule coe' },
				{ src: '/images/slider_home/rio_maule_rafting.jpg', alt: 'rio maule travesia rafting' },
			],
		},
		aventura: {
			heading: 'Find your next adventure!',
			subheading: 'Get to know the upcoming adventure programs we have available for you.',
			featured: {
				image: '/images/maule_0_0.jpg',
				imageSrcset:
					'/images/maule_0_0.jpg 1016w, /images/maule_0_0-300x249.jpg 300w, /images/maule_0_0-768x638.jpg 768w',
				title: 'Maule River',
				description:
					'Navigate the Maule River, camp under the stars and discover what you are capable of. A journey designed to challenge you and reconnect you with nature.',
				cta: 'See more',
				slug: 'maule-rio-abajo',
			},
		},
		footer: {
			rights: 'All rights reserved.',
		},
		sobreCoe: {
			meta: {
				description:
					'We generate opportunities for personal and social development through outdoor experiences.',
			},
			heroTitle: 'Get to know us',
			heroImage: '/images/banner6-1.jpg',
			metodologia: {
				heading: 'The spiral, our work methodology',
				interior: {
					alt: 'educational programs',
					description:
						'The core represents the individual, from where the journey of self-knowledge begins.',
				},
				medio: {
					alt: 'corporate programs',
					description:
						'In the middle is the community; the individual expands toward the other, where the social bond becomes the seed of change.',
				},
				exterior: {
					alt: 'adventure programs',
					description:
						'In the outer layer, there is the natural environment as a mean of both personal and social development.',
				},
			},
			equipo: {
				heading: 'Our work team',
				readMore: 'See more',
				close: 'Close',
			},
		},
		programas: {
			meta: {
				description: 'We focus on developing educative, corporate and adventure programs.',
			},
			back: '‹ Back',
			viewAll: 'View all programs',
			fullProgram: 'View full program',
		},
		galeria: {
			meta: {
				description: 'Explore images from our outdoor experiences and programs.',
			},
			heroTitle: 'Gallery',
			heroImage: '/images/banner-galeria.jpg',
			back: '‹ Back',
			viewAll: 'View the whole gallery',
			photos: 'photos',
			badge: 'Gallery',
			heading: 'Relive our experiences',
			subheading: 'Browse photos from the groups that have gone out with us',
		},
		contacto: {
			meta: {
				description: 'Santiago de Chile | info@coe.cl | +56 9 9918 5049',
			},
			heroTitle: "Let's talk",
			heroImage: '/images/banner6-1.jpg',
			badge: 'Contact',
			phoneTitle: 'Phone',
			emailTitle: 'Email',
			form: {
				name: 'First name',
				lastName: 'Last name',
				email: 'Email',
				phone: 'Phone',
				message: 'Message',
				namePlaceholder: 'Jane',
				lastNamePlaceholder: 'Smith',
				emailPlaceholder: 'jane@email.com',
				phonePlaceholder: '+56 9 1234 5678',
				messagePlaceholder: 'Enter your message',
				submit: 'Send',
				sending: 'Sending...',
			},
		},
	},
} as const;

export type Lang = keyof typeof ui;

export const ui = withBaseDeep(rawUi);
