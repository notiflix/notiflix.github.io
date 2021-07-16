interface IDatabaseSettings {
  metaLanguageCode: string;
  metaLanguage: string;
  metaTitle: string;
  metaDescription: string;
  metaRobots: string;
  metaThemeColor: string;
  metaOgImage: string;
  metaTwitterUser: string;
  metaTwitterDomain: string;
  bodyNoScript: string;
}

interface IDatabaseMeta {
  title: string;
  description: string;
  robots?: string | null;
  ogImage?: string | null;
  themeColor?: string | null;
}

export type {
  IDatabaseSettings,
  IDatabaseMeta,
};
