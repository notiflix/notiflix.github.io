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
    title: string;
    script: string;
    url: string;
  };
  npm: {
    title: string;
    script: string;
    url: string;
  };
  github: {
    title: string;
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

interface IDatabaseHomeProduct {
  routeId: string;
  title: string;
  description: string;
  button: string;
}

interface IDatabaseHomeProducts {
  title: string;
  products: IDatabaseHomeProduct[];
}
// Page Home: end

// Page Products: begin
interface IDatabaseBannerProducts {
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
// Page Products: end

// Page Notify: begin
type TDatabaseNotifyFunctionNames = 'success' | 'failure' | 'warning' | 'info';

interface IDatabaseNotifyTypes {
  id: string;
  sortOrder: number;
  isActive: boolean;
  functionName: TDatabaseNotifyFunctionNames;
  defaultValue: string;
  docsRouteHash: string;
}

interface IDatabaseNotifyPlayground {
  title: string;
  namespace: string;
  comments: string[];
  docsText: string;
  docsRouteId: string;
  demoTitle: string;
  demoDescription: string;
  demoInputPlaceholder: string;
  demoButton: string;
  callbackTitle: string;
  callbackDescription: string;
  callbackMessage: string;
  callbackInputPlaceholder: string;
  callbackButton: string;
  extendTitle: string;
  extendDescription: string;
  types: IDatabaseNotifyTypes[];
}
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
  IDatabaseBannerProducts,
  TDatabaseNotifyFunctionNames,
  IDatabaseNotifyPlayground,
  IDatabaseHomeSlider,
  IDatabaseHomeGetItOn,
  IDatabaseHomeBrowsers,
  IDatabaseHomeProducts,
  IDatabaseMeta,
  IDatabaseSocialMedia,
  IDatabaseSettings,
};
