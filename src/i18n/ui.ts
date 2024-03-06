import SpainFlag from "@/components/flags/Spain.astro";
import AndorraFlag from "@/components/flags/Andorra.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  ca: {
    code: "ca",
    name: "Català",
    flag: AndorraFlag,
  },
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.pon": "Ponentes",
    "nav.exp": "Expositores",
    "nav.archivo": "Archivo",
    "nav.legal": "Aviso Legal",
    "nav.privacidad": "Privacidad",
    "nav.cookies": "Cookies",
  },
  en: {
    "nav.inicio": "Home",
    "nav.pon": "Speakers",
    "nav.exp": "Exhibitors",
    "nav.archivo": "Archive",
    "nav.legal": "Legal Notice",
    "nav.privacidad": "Privacy",
    "nav.cookies": "Cookies",
  },
  ca: {
    "nav.inicio": "Inici",
    "nav.pon": "Ponents",
    "nav.exp": "Expositors",
    "nav.archivo": "Arxiu",
    "nav.legal": "Avís Legal",
    "nav.privacidad": "Privacitat",
    "nav.cookies": "Cookies",
  },
} as const;

export const routes = {
  es: {
    ponentes: "ponentes",
    expositores: "expositores",
    archivo: "archivo",
    "aviso-legal": "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies",
  },
  en: {
    ponentes: "speakers",
    expositores: "exhibitors",
    archivo: "archive",
    "aviso-legal": "legalnotice",
    privacidad: "privacy",
    cookies: "cookies",
  },
  ca: {
    ponentes: "ponents",
    expositores: "expositors",
    archivo: "arxiu",
    "aviso-legal": "avis-legal",
    privacidad: "privacitat",
    cookies: "cookies",
  },
};
