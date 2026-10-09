import fs from 'node:fs';
import path from 'node:path';
import { withBase } from '../utils/url';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'programas', 'galeria');

/** Public URLs of every full-size program photo (thumbnails excluded). */
const pool: string[] = fs
	.readdirSync(GALLERY_DIR, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.flatMap((dir) =>
		fs
			.readdirSync(path.join(GALLERY_DIR, dir.name))
			.filter((file) => /^\d+\.jpe?g$/i.test(file))
			.map((file) => withBase(`/images/programas/galeria/${dir.name}/${file}`))
	);

/** Picks `count` distinct random photos. Placeholder until each card gets its own image. */
export function randomProgramImages(count: number): string[] {
	const shuffled = [...pool];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled.slice(0, count);
}
