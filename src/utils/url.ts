/** Site base path without a trailing slash ('' when served from the domain root). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const ASSET_PATH = /(^|\s)\/(images|videos|assets)\//g;

/** Prefixes a root-relative asset path (e.g. '/images/logo.svg') with the site base. */
export function withBase(path: string): string {
	return base + path;
}

/**
 * Recursively prefixes every root-relative asset path found in strings (including srcset lists)
 * with the site base, so content data can keep plain '/images/...' paths.
 */
export function withBaseDeep<T>(value: T): T {
	if (!base) return value;
	if (typeof value === 'string') return value.replace(ASSET_PATH, `$1${base}/$2/`) as T;
	if (Array.isArray(value)) return value.map(withBaseDeep) as T;
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withBaseDeep(v)])) as T;
	}
	return value;
}
