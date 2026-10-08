import fs from 'node:fs';
import path from 'node:path';
import { withBase } from '../utils/url';

const HERO_DIR = path.join(process.cwd(), 'public', 'images', 'hero');

/** Public URLs of every inner-page hero background; one is picked at random per page view. */
export const heroImages: string[] = fs
	.readdirSync(HERO_DIR)
	.filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
	.sort()
	.map((file) => withBase(`/images/hero/${file}`));
