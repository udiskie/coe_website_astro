export interface TeamMember {
	id: string;
	image: string;
	imageSrcset: string;
	imageWidth: number;
	imageHeight: number;
	name: string;
	role: { es: string; en: string };
	bio: { es: string[]; en: string[] };
}

function srcset(name: string, sizes: [number, number, number]) {
	const [full, w300, w150] = sizes;
	return `/images/team/${name}.png ${full}w, /images/team/${name}-300x300.png ${w300}w, /images/team/${name}-150x150.png ${w150}w`;
}

export const team: TeamMember[] = [
	{
		id: 'felipe-sanhueza',
		image: '/images/team/felipe.png',
		imageSrcset: srcset('felipe', [748, 300, 150]),
		imageWidth: 748,
		imageHeight: 748,
		name: 'Felipe Sanhueza',
		role: {
			es: 'Coordinador de contenidos académicos',
			en: 'Academic content coordinator',
		},
		bio: {
			es: [
				'Con una Licenciatura en Filosofía de la Universidad de Chile y un Máster en Filosofía, Política y Economía de la Universidad de Groningen, especializado en ética y política ambiental. Posee experiencia trabajado en educación desde el año 2014 y cuenta con certificaciones en docencia, estrategias de sistematización de aprendizaje y neurología del aprendizaje.\nEn los últimos años, ha combinado sus pasiones por la enseñanza y el medio ambiente, enfocándose en la educación ambiental para ayudar a otros a comprender nuestro entorno natural y concientizar sobre la importancia de la conservación y la sostenibilidad.\nCon su experiencia y conocimientos en filosofía y ética ambiental, ha demostrado ser un activo valioso en la promoción del cambio social y la protección del medio ambiente. Su enfoque en la educación ha sido clave para fomentar un cambio de comportamiento y construir comunidades más sostenibles.',
			],
			en: [
				'Felipe holds a BA in Philosophy from the University of Chile and an MA in Philosophy, Politics and Economics from the University of Groningen, with a specialization in environmental ethics and policy.\nHe has experience working in education since 2014 and has certifications in teaching, learning systematization strategies and learning neurology.\nIn recent years, he has combined his passions for teaching and the environment, focusing on environmental education to help others understand our natural surroundings and raise awareness of the importance of conservation and sustainability.\nWith his experience and knowledge of environmental philosophy and ethics, he has proven to be a valuable asset in promoting social change and environmental protection. His focus on education has been key in fostering behavior change and building more sustainable communities.',
			],
		},
	},
	{
		id: 'javier-galilea',
		image: '/images/team/javier.png',
		imageSrcset: srcset('javier', [500, 300, 150]),
		imageWidth: 500,
		imageHeight: 500,
		name: 'Javier Galilea',
		role: { es: 'Instructor', en: 'Instructor' },
		bio: {
			es: [
				'Egresado de la Carrera de Ingeniería en Expediciones y Ecoturismo de la USS. Javier practica diversos deportes relacionados con la montaña y el mundo ecuestre, realizando expediciones invernales a Campos de Hielo Norte, ascensiones en los Andes Centrales, Patagónicos y Bolivianos, como también cabalgatas de largo aliento.',
				'Hace 6 años se dedica a guiar grupos en programas turísticos, para lo cual cuenta con diferentes certificaciones, destacando el Wilderess First Responder, Curso de Cultura Ecuestre en la Escuela de Guías de la Patagonia, Conducción Segura de Vehículos 4×4, entre otras.',
			],
			en: [
				'Graduated from San Sebastian University with a major in Expeditions Engineering and Eco-tourism. Born in Coyhaique, lived mostly in Aysen the XIth Region (Chilean Patagonia), which is why he’s always been in contact with nature and the environment, practicing various sports related to mountaineering and equestrian world. Some of his sports achievements are: Winter expedition to the Northern Ice Fields, ascents in the Central, Patagonian and Bolivian Andes as well as broad range horse rides.',
				'For the past 6 years has been guiding groups through touristic programs for which he has different certifications such as Wilderness First Responder, courses in Equestrian Culture from the Patagonian School of Guides, 4X4 Safe Driving from the Chilean Automobile Club, amongst other.',
			],
		},
	},
	{
		id: 'lara-stone',
		image: '/images/team/lara.png',
		imageSrcset: srcset('lara', [500, 300, 150]),
		imageWidth: 500,
		imageHeight: 500,
		name: 'Lara Stone',
		role: {
			es: 'Coordinadora de Programas\nInternacionales e instructora',
			en: 'International Program\nCoordinator and instructor',
		},
		bio: {
			es: [
				'Coordinadora de Programas Internacionales e instructora\nEstudió ciencias ambientales en la Universidad de California Santa Barbara. Durante sus estudios y trabajos medio ambientales en su país y el extranjero, ve la necesidad de conectar a las personas con naturaleza a través de la Educación Al Aire Libre, para generar conciencia y cambios de conducta en nuestro medio ambiente.',
				'Su sensibilidad social la ha llevado a trabajar como profesora voluntaria en EE.UU en el programa Environmental Education for the Next Generation, enseñando ecología a niños de 5 a 7 años con actividades interactivas que cubrían los requisitos de ciencias puesto por el estado. Posee certificaciones en Primeros Auxilios en Áreas Remotas WFA y Wilderness Medicine Association.',
			],
			en: [
				'Studied environmental science at the University of California, Santa Barbara. During her studies and environmental work, both within the United States and abroad, she became interested in connecting others to nature through outdoor education. To help raise awareness in this area, she volunteered as a teacher for the non-profit organization Environmental Education for the Next Generation, interactive classes covering the state standards in science and ecology for children ages (5-7). In her free time she likes to hike, climb, surf, and learn from the people and culture everywhere she goes.',
				'Leadership course, UCSB, Adventure Programs TESOL (Teachers of English to Speakers of Other Languages)',
				'Certified in: Wilderness First Aid, Wilderness Medicine Association.',
			],
		},
	},
	{
		id: 'macarena-rivera',
		image: '/images/team/macarenar-1.png',
		imageSrcset: srcset('macarenar-1', [747, 300, 150]),
		imageWidth: 747,
		imageHeight: 748,
		name: 'Macarena Rivera',
		role: {
			es: 'Coordinadora área de comunicación',
			en: 'communication area coordinator',
		},
		bio: {
			es: [
				'Diseñadora Gráfica egresada de la Universidad de Chile.',
				'Más de 5 años de experiencia como diseñadora gráfica, desarrollando piezas gráficas tanto impresas como digitales.',
			],
			en: [
				'Graphic Designer graduated from the University of Chile.',
				'Has more than 5 years of experience as a graphic designer, developing print and digital graphic pieces.',
			],
		},
	},
	{
		id: 'nelson-rivera',
		image: '/images/team/nelson.png',
		imageSrcset: srcset('nelson', [500, 300, 150]),
		imageWidth: 500,
		imageHeight: 500,
		name: 'Nelson Rivera',
		role: { es: 'Fundador y Director', en: 'Director and instructor' },
		bio: {
			es: [
				'Posee una experiencia de más de 35 años en el montañismo, fue integrante de la Primera Expedición Chilena al Monte Everest.',
				'A lo largo de su trayectoria se ha desempeñado como Guía e Instructor de Montaña, con vasta experiencia como Rescatista del Cuerpo de Socorro Andino de Chile, y Patrulla de Ski de Chile.',
				'Así mismo se especializó en sistemas de control de avalanchas, lo que le permitió apoyar en operaciones de invierno a importantes compañías mineras.',
				'Docente en la universidad San Sebastián, en la carrera de Ingeniería en Expediciones y Ecoturismo.',
				'Ha participado en destacadas expediciones en: Andes Centrales, Andes Patagónicos, Andes Peruanos, Andes Bolivianos e Himalayas Certificado en Primeros auxilios en Áreas Remotas, Wilderess First Responder. Además de escalar montañas, le apasiona el mundo submarino, practica buceo por más de 25 años.',
				'Esta pasión por la vida al aire libre lo llevó a fundar COE y crear un espacio para el desarrollo del autoconocimiento, habilidades sociales, respeto y amor por el medio ambiente.',
			],
			en: [
				'He has more than 35 years of mountaineering experience, including having been a member of the first Chilean expedition to Mount Everest. Throughout his career Nelson has worked as a mountaineering guide and instructor, with vast experience as a rescuer with the Andean Rescue Corps of Chile and the Chilean Ski Patrol.',
				'He also specialized in avalanche control systems, which allowed him to provide support to the winter operations of major mining companies.',
				'Lecturer at San Sebastian University in the department of Expeditions Engineering and Eco-tourism.',
				'Nelson has participated in leading expeditions in the Central Andes, the Patagonian Andes, the Peruvian Andes, the Bolivian Andes, and the Himalayas. He is certified in backcountry first aids a Wilderness First Responder. In addition to climbing mountains, Nelson has a passion for the marine world and has been scuba diving for more than 25 years.',
				'This enthusiasm for the outdoors led him to found COE and create a space for the nurturing of self-development, social skills, respect and love for the natural environment.',
			],
		},
	},
	{
		id: 'nicolas-belmar',
		image: '/images/team/nicolas.png',
		imageSrcset: srcset('nicolas', [500, 300, 150]),
		imageWidth: 500,
		imageHeight: 500,
		name: 'Nicolás Belmar',
		role: { es: 'Instructor', en: 'Instructor' },
		bio: {
			es: [
				'Con 11 años de experiencia en el turismo de naturaleza y guía en montaña con expediciones a lo largo de Chile, tanto en el norte como en el sur. Algunas de sus expediciones son Ojos del Salado, Mulas Muertas, Volcán San José, Cerro el Plomo, Campos de Hielo Norte, Laguna Verde, Lago General Carrera, Cochamó, Torres del Paine, entre otros. Se ha especializado en el campo de la sensibilización ambiental a través de cursos de filosofía China, terapeuta en Chi Kung, Diseñador en Permacultura PDC (instituto el manzano) y con certificaciones en no deje rastro NOLS, Certificado en Primeros auxilios en Áreas Remotas, Wilderess First Responder.',
				'En el campo laboral se desarrolló en asesorías a comunidades, privados y localidades en San Pedro de Atacama, Caspana y Toconce, comunas rurales en la región de O´Higgins, Cuenca del Lago Caro región de Aysén.',
			],
			en: [
				'Chilean, professional in ecotourism , consultant in nature based tourism, professor at San Sebastián University in Expeditions Engineering and Eco-tourism, climber from the Escuela Nacional de Montaña (ENAM) and a lifetime scout.',
				'He has 11 years of experience in nature based tourism and mountain guide, with expeditions all throughout Chile both north and south. Some of his expeditions have been: Ascent of Ojos del Salado, Mulas Muertas, San Jose Volacano, El Plomo, Northern Ice Fields, Laguna Verde, Lago General Carrrera, Cochamo, Torres del Paine.',
				'Has specialized in environment awareness through courses in Chinese philosophy, certified therapist in Chi Kung, a Perma Culture designer PDC (Instituto El Manzano), certifications in Leave No Trace from the NOLS, and is a certified in Remote First Aid (WFR).',
				'He has worked developing projects for Local and private communities in San Pedro de Atacama, Caspana and Toconce, rural communities in O´Higgins and Cuenca del Lago Caro in Aysen.',
			],
		},
	},
	{
		id: 'rodolfo-rada',
		image: '/images/team/rodolfo.png',
		imageSrcset: srcset('rodolfo', [500, 300, 150]),
		imageWidth: 500,
		imageHeight: 500,
		name: 'Rodolfo Rada',
		role: { es: 'Guía de Rafting y Kayak', en: 'Rafting and Kayak Guide' },
		bio: {
			es: [
				'Certificado en Administración de Negocios en Eco-Turismo y Turismo de Aventura, Tourism Training Institut – Vancouver Canadá. Su pasión por la aventura lo ha llevado a guiar ríos en Brasil, México, Canadá y Zambia. Docente en la universidad San Sebastián, en la carrera de Ingeniería en Expediciones y Ecoturismo.',
				'Director del proyecto la Eco Micro. Educación ambiental itinerante que recorre todo el país, impartiendo talleres de reciclaje y uso de energías renovables.',
				'Dentro de sus certificaciones podemos mencionar el curso de Rescate, en Aguas Blancas, British Columbia – Canadá, la Licencia PADI open wáter y rescate, y el certificado en Primeros auxilios en Áreas Remotas, Wilderness First Responder.',
			],
			en: [
				'Certified by Tourism Training Institute— Vancouver, Canada, in Business Administration, Eco-Tourism and Adventure Tourism.',
				'His passion for adventure has taken him as a guide to rivers in Brazil, Mexico, Canada, and Zambia.',
				'Lecturer at San Sebastián University in the department of Expeditions Engineering and Eco-tourism.',
				'Head of the Eco-Micro Project: an Ecological Bus dedicated to giving recycling workshops and promoting renewable energy across Chile.',
				'White Water Rescue course, UBC— Canada.',
				'Open Water PADI License.',
				'Wilderness First Responder.',
			],
		},
	},
	{
		id: 'valentina-canales',
		image: '/images/team/valentina.png',
		imageSrcset: srcset('valentina', [500, 300, 150]),
		imageWidth: 500,
		imageHeight: 500,
		name: 'Valentina Canales',
		role: {
			es: 'Coordinadora de programas\neducativos e instructora',
			en: 'Coordinator of Educational\nPrograms and Instructor',
		},
		bio: {
			es: [
				'Egresada como ingeniera en expediciones y ecoturismo de la Universidad San Sebastián.\nSus experiencias personales y laborales la han llevado a trabajar a cargo de grupos por más de 10 años.',
				'Gracias a sus dinámicas de juego y reflexión, genera un ambiente de alegría y confianza que permite transformar positivamente los resultado de cualquier situación, permitiendo que los grupos se fortalezcan y se propicien espacios para el crecimiento personal.',
			],
			en: [
				'Graduated as an expeditions engineer and eco-tourism from the Universidad San Sebastián.\nHer personal and work experiences have led her to work in charge of groups for more than 10 years.',
				'Thanks to her games and reflection dynamics, she generates an atmosphere of joy and trust that’s allow transform any situation into positive results, making the groups to be strengthened and creating spaces for personal growth.',
			],
		},
	},
];
