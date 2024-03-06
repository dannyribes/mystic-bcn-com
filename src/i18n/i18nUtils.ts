// src/utils/i18nUtils.ts
export function getRelativeLocaleUrl(path: string, locale = "es"): string {
  return `/${locale}${path}`;
}
