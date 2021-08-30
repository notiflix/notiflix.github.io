// Page Home: begin
interface IDatabaseHomeSlider {
  image: string;
  title: string;
  description: string;
  downloadInfo: string;
  downloadCount: string;
  loading: string;
  failure: string;
  restricted: string;
}

interface IDatabaseHomeGetItOn {
  title: string;
  clipboard: string;
  yarn: {
    script: string;
    url: string;
  };
  npm: {
    script: string;
    url: string;
  };
  github: {
    script: string | null;
    url: string;
  };
}

interface IDatabaseHomeBrowsers {
  title: string;
  disclaimer: string;
  chrome: string;
  firefox: string;
  safari: string;
  edge: string;
  opera: string;
  edgeLegacy: string;
  ie: string;
}

interface IDatabaseHomeModule {
  routeId: string;
  title: string;
  description: string;
  button: string;
}

interface IDatabaseHomeModules {
  title: string;
  modules: IDatabaseHomeModule[];
}
// Page Home: end

// Page Modules: begin
interface IDatabaseBannerModule {
  importNamespace: string;
  title: string;
  description: string;
  importDescription: string;
  htmlDescription: string;
  htmlOneByOne: string;
  htmlOneByOneCSS: string;
  htmlOneByOneJS: string;
  htmlAllInOne: string;
  htmlAllInOneJS: string;
}
// Page Modules: end

// Page Notify: begin
// Page Notify: end


// Page Common: Meta Data: begin
interface IDatabaseMeta {
  routeId: string;
  lastModifiedDate: string;
  title: string;
  description: string;
  robots?: string | null;
  ogImage?: string | null;
  themeColor?: string | null;
}
// Page Common: Meta Data: end


// App: Social Media Accounts: begin
interface IDatabaseSocialMedia {
  isActive: boolean;
  icon: string;
  url: string;
  name: string;
}
// App: Social Media Accounts: end

// App: Settings: begin
interface IDatabaseSettings {
  metaLanguageCode: string;
  metaLanguage: string;
  metaTitle: string;
  metaDescription: string;
  metaRobots: string;
  metaYearInit: number;
  metaCopyright: string;
  metaThemeColor: string;
  metaTwitterUser: string;
  metaTwitterDomain: string;
  bodyNoScriptMessage: string;
  footerGitHubName: string;
  footerGitHubUrl: string;
}
// App: Settings: end

export type {
  IDatabaseHomeSlider,
  IDatabaseHomeGetItOn,
  IDatabaseHomeBrowsers,
  IDatabaseHomeModules,
  IDatabaseBannerModule,
  IDatabaseMeta,
  IDatabaseSocialMedia,
  IDatabaseSettings,
};
