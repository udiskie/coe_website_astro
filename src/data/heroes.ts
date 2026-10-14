import { withBase } from '../utils/url';

export interface HeroImage {
	/** 1920x1080 JPEG fallback. */
	src: string;
	/** WebP crops: portrait for phones, 16:10 for tablets / small laptops, 16:9 for desktops. */
	sm: string;
	md: string;
	lg: string;
}

const hero = (name: string): HeroImage => ({
	src: withBase(`/images/portadas/${name}.jpg`),
	sm: withBase(`/images/portadas/${name}-sm.webp`),
	md: withBase(`/images/portadas/${name}-md.webp`),
	lg: withBase(`/images/portadas/${name}-lg.webp`),
});

/** Cover image for each inner-page hero. */
export const heroImages = {
	contacto: hero('contacto'),
	galeria: hero('galeria'),
	programas: hero('programas'),
	sobreCoe: hero('sobre-coe'),
	weekRioMaule: hero('week-rio-maule'),
};
