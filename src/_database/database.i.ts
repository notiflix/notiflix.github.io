interface IDatabaseSettings {
  metaLanguageCode: string;
  metaLanguage: string;
  metaTitle: string;
  metaDescription: string;
  metaRobots: string;
  metaYearInit: number;
  metaCopyright: string;
  metaThemeColor: string;
  metaOgImage: string;
  metaTwitterUser: string;
  metaTwitterDomain: string;
  bodyNoScriptMessage: string;
}

interface IDatabaseSocialMedia {
  isActive: boolean;
  icon: string;
  url: string;
  name: string;
}

interface IDatabaseMeta {
  lastModifiedDate: string;
  title: string;
  description: string;
  robots?: string | null;
  ogImage?: string | null;
  themeColor?: string | null;
}

export type {
  IDatabaseSettings,
  IDatabaseSocialMedia,
  IDatabaseMeta,
};
