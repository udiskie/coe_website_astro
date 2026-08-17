import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui, defaultLang, type Lang } from './ui';

export function getLang(currentLocale: string | undefined): Lang {
	return currentLocale !== undefined && currentLocale in ui ? (currentLocale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
	return ui[lang];
}

export function localizedPath(lang: Lang, path: string) {
	return getRelativeLocaleUrl(lang, path);
}
