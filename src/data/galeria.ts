import fs from 'node:fs';
import path from 'node:path';
import { withBase } from '../utils/url';

export interface GalleryAlbum {
	slug: string;
	title: string;
	/** Public URLs of every photo in the album; the first one is the cover. */
	images: string[];
}

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'galeria');
const GALLERY_URL = withBase('/images/galeria');

/** Accents and casing lost when the folders were slugified. */
const titleOverrides: Record<string, string> = {
	'3-colegio-mayor': 'Colegio Mayor',
	'4-antofagasta-british-school': 'Antofagasta British School',
	'colegio-aleman': 'Colegio Alemán',
	'corporacion-de-educacion-antofagasta': 'Corporación de Educación Antofagasta',
	'grennland-2005': 'Grennland 2005',
	'uss-antuco': 'USS Antuco',
	'nido-de-aguilas-el-cani-pucon': 'Nido de Águilas · El Cañi, Pucón',
	'nido-de-aguilas-cau-cao-lacampana': 'Nido de Águilas · Cau Cao, La Campana',
	'nido-de-aguilas-lo-valdes-cajon-de-morales': 'Nido de Águilas · Lo Valdés, Cajón de Morales',
	'nido-de-aguilas-nido-de-aguilas-rio-maule': 'Nido de Águilas · Río Maule',
	'nido-de-aguilas-nido-life-in-patagonia': 'Nido de Águilas · Life in Patagonia',
	'santiago-college-paine-accion-social': 'Santiago College · Paine Acción Social',
	'santiago-college-rapel': 'Santiago College · Rapel',
	'santiago-college-rio-clarillo': 'Santiago College · Río Clarillo',
	'santiago-college-student-council': 'Santiago College · Student Council',
	'santiago-de-guayaquil': 'Santiago de Guayaquil',
};

const lowercaseWords = new Set(['de', 'del', 'la', 'el', 'los', 'las', 'en']);

function titleFromSlug(slug: string): string {
	return (
		titleOverrides[slug] ??
		slug
			.split('-')
			.map((word, i) =>
				i > 0 && lowercaseWords.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)
			)
			.join(' ')
	);
}

/** Every folder that directly contains photos becomes an album; nested folders get a joined slug. */
function readAlbums(dir: string, parents: string[] = []): GalleryAlbum[] {
	const entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
	const albums: GalleryAlbum[] = [];

	const images = entries
		.filter((e) => e.isFile() && /\.(webp|jpe?g|png)$/i.test(e.name))
		.map((e) => `${GALLERY_URL}/${[...parents, ''].join('/')}${e.name}`);
	if (images.length > 0) {
		const slug = parents.join('-');
		albums.push({ slug, title: titleFromSlug(slug), images });
	}

	for (const e of entries) {
		if (e.isDirectory()) albums.push(...readAlbums(path.join(dir, e.name), [...parents, e.name]));
	}
	return albums;
}

let cache: GalleryAlbum[] | undefined;

export function getGalleryAlbums(): GalleryAlbum[] {
	cache ??= readAlbums(GALLERY_DIR).sort((a, b) => a.title.localeCompare(b.title));
	return cache;
}

export function getGalleryAlbumBySlug(slug: string) {
	const albums = getGalleryAlbums();
	const index = albums.findIndex((a) => a.slug === slug);
	if (index === -1) return null;
	return {
		album: albums[index],
		prevAlbum: index > 0 ? albums[index - 1] : null,
		nextAlbum: index < albums.length - 1 ? albums[index + 1] : null,
	};
}
