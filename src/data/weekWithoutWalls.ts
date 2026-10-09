import type { Lang } from '../i18n/ui';

export interface WeekProgram {
	heroTitle: string;
	title: string;
	description: string;
	details: string[];
	programLabel: string;
	programUrl: string;
	equipmentLabel: string;
	equipmentUrl: string;
}

export const rioMaule: Record<Lang, WeekProgram> = {
	es: {
		heroTitle: 'Week without walls',
		title: 'Río Maule',
		description:
			'Nuestro programa se encuentra diseñado para fortalecer el desarrollo integral de los alumnos, se enfoca en generar experiencias prácticas y vivenciales, en un ambiente natural, donde los alumnos participan en actividades dinámicas y de reflexión, que aportan al crecimiento personal, fortalecimiento e integración de los grupos, destrezas al aire libre, sensibilización ambiental, liderazgo, la convivencia y el trabajo en equipo.',
		details: [
			'5 días y 4 noches',
			'Santiago – Talca – Santiago (bus)',
			'Recorrido en balsas y kayak',
			'Campamento (4 noches)',
			'Fogatas nocturnas',
			'Trabajo en equipo',
		],
		programLabel: 'Ver programa',
		programUrl: 'https://drive.google.com/file/d/1mDaG3tVv2veuIq4zjWwlHcV1mAOD7TK_/view?usp=sharing',
		equipmentLabel: 'Equipamiento requerido',
		equipmentUrl: 'https://drive.google.com/file/d/1qraTGUdRLuXHxkjZTfyESUGGfE6TgT-F/view?usp=sharing',
	},
	en: {
		heroTitle: 'Week without walls',
		title: 'Maule River',
		description:
			'Our program is designed to strengthen the students’ comprehensive development. It focuses on creating hands-on, experiential learning in a natural environment, where students take part in dynamic and reflective activities that contribute to personal growth, group bonding and integration, outdoor skills, environmental awareness, leadership, coexistence and teamwork.',
		details: [
			'5 days and 4 nights',
			'Santiago – Talca – Santiago (bus)',
			'Rafting and kayaking journey',
			'Camping (4 nights)',
			'Night campfires',
			'Teamwork',
		],
		programLabel: 'View program',
		programUrl: 'https://drive.google.com/file/d/1mDaG3tVv2veuIq4zjWwlHcV1mAOD7TK_/view?usp=sharing',
		equipmentLabel: 'Required equipment',
		equipmentUrl: 'https://drive.google.com/file/d/1qraTGUdRLuXHxkjZTfyESUGGfE6TgT-F/view?usp=sharing',
	},
};
