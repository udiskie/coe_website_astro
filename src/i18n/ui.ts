export const languages = {
	es: 'Español',
	en: 'English',
} as const;

export const defaultLang = 'es';

export const ui = {
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
			headline:
				'Generamos oportunidades de desarrollo personal y social a través de experiencias al aire libre.',
		},
		presentacion: {
			heading: 'Nos enfocamos en el desarrollo de programas',
			educativos: {
				title: 'Educativos',
				alt: 'programas educativos',
				description:
					'Buscamos complementar los procesos curriculares, proporcionando experiencias que conecten a los estudiantes con la naturaleza.',
			},
			organizacional: {
				title: 'Organizacionales',
				alt: 'programas organizacionales',
				description:
					'Con el objetivo de mejorar el clima laboral, incidir en la productividad, la calidad de vida y el desarrollo personal de los individuos.',
			},
			aventura: {
				title: 'Aventura',
				alt: 'programas de aventura',
				description:
					'Buscan reconectar a los participantes con la naturaleza y así poder profundizar en su desarrollo personal',
			},
			cta: 'Conoce nuestros programas',
		},
		servicios: {
			heading: '¡Conoce las increíbles aventuras que hemos realizado!',
			subheading: 'Revisa nuestra galería para conocer nuestro trabajo',
			cta: 'Ver imágenes',
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
					'En esta travesía te ofrecemos la posibilidad de navegar el Río Maule y poder acampar en sus alrededores. Itinerario: – Punto de encuentro Estación de tren Talca – Travesía Balsa y Kayak inflable (2 días) – Campamento (2 noches) Este programa incluye: – Navegación por el Río Maule – Ticket de Tren (buscarril) – Guías …',
				cta: 'Leer más',
				href: 'https://coe.cl/2022/08/29/maule-rio-abajo/',
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
			heroTitle: 'Sobre COE',
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
				heading: 'Nuestro equipo',
				readMore: 'Leer más',
				close: 'Cerrar',
			},
		},
		programas: {
			meta: {
				description:
					'Nos enfocamos en el desarrollo de programas educativos, organizacionales y de aventura.',
			},
		},
		contacto: {
			meta: {
				description: 'Santiago de Chile | info@coe.cl | +56 9 9918 5049',
			},
			form: {
				name: 'Nombre',
				email: 'Email',
				message: 'Comentario o mensaje',
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
			headline:
				'We generate opportunities for personal and social development through outdoor experiences.',
		},
		presentacion: {
			heading: 'We focus on developing programs',
			educativos: {
				title: 'Educative',
				alt: 'educational programs',
				description:
					'We aim to complement the curricular processes, providing experiences that connect students with nature.',
			},
			organizacional: {
				title: 'Corporate',
				alt: 'corporate programs',
				description:
					'With the goal of improving the work environment, influencing productivity, quality of life and personal development of individuals.',
			},
			aventura: {
				title: 'Adventure',
				alt: 'adventure programs',
				description:
					'Reconnect participants with nature and thus be able to enhance their personal development.',
			},
			cta: 'Know our programs',
		},
		servicios: {
			heading: 'Know the incredible adventures we have made!',
			subheading: 'Browse our gallery to see our work.',
			cta: 'See the images',
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
					'On this journey we offer you the possibility of navigating the Maule River and being able to camp in its surroundings. This experience is designed to deepen a journey not only through nature but also inland to strengthen your personal development. Itinerary: – Meeting point Talca train station – Raft crossing and inflatable kayak (2 days) – …',
				cta: 'Read more',
				href: 'https://coe.cl/en/2022/09/07/maule-river-2/',
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
			heroTitle: 'About COE',
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
				heading: 'Our team',
				readMore: 'Read more',
				close: 'Close',
			},
		},
		programas: {
			meta: {
				description: 'We focus on developing educative, corporate and adventure programs.',
			},
		},
		contacto: {
			meta: {
				description: 'Santiago de Chile | info@coe.cl | +56 9 9918 5049',
			},
			form: {
				name: 'Name',
				email: 'Email',
				message: 'Message',
				submit: 'Send',
				sending: 'Sending...',
			},
		},
	},
} as const;

export type Lang = keyof typeof ui;
