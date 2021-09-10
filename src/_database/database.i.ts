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
  yarn?: {
    title: string;
    script: string;
    url: string;
  };
  npm?: {
    title: string;
    script: string;
    url: string;
  };
  github?: {
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
  products?: IDatabaseHomeProduct[];
}
// Page Home: end

// Page Notify, Report, Confirm, Loading, Block: begin
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
// Page Notify, Report, Confirm, Loading, Block: end

// Page Notify: begin
type TDatabaseNotifyFunctionNames = 'success' | 'failure' | 'warning' | 'info';

interface IDatabaseNotifyMethods {
  id: string;
  sortOrder: number;
  isActive: boolean;
  functionName: TDatabaseNotifyFunctionNames;
  defaultValue: string;
  docsLinkText: string;
  docsLinkRouteHash: string;
}

interface IDatabaseNotifyPlayground {
  title: string;
  namespace: string;
  comments: string[];
  methods: IDatabaseNotifyMethods[];
  demoInfoTitle: string;
  demoInfoDescription: string;
  demoInputPlaceholder: string;
  demoButtonText: string;
  callbackInfoTitle: string;
  callbackInfoDescription: string;
  callbackExampleMessage: string;
  callbackInputPlaceholder: string;
  callbackButtonText: string;
  extendDocsLinkText: string;
  extendDocsLinkRouteHash: string;
  extendInfoTitle: string;
  extendInfoDescription: string;
  extendExampleMessage: string;
}
// Page Notify: end

// Page Report: begin
type TDatabaseReportFunctionNames = 'success' | 'failure' | 'warning' | 'info';

interface IDatabaseReportMethods {
  id: string;
  sortOrder: number;
  isActive: boolean;
  functionName: TDatabaseReportFunctionNames;
  defaultValueTitle: string;
  defaultValueMessage: string;
  defaultValueButton: string;
  docsLinkText: string;
  docsLinkRouteHash: string;
}

interface IDatabaseReportPlayground {
  title: string;
  namespace: string;
  comments: string[];
  methods: IDatabaseReportMethods[];
  demoInfoTitle: string;
  demoInfoDescription: string;
  demoInputPlaceholderTitle: string;
  demoInputPlaceholderMessage: string;
  demoInputPlaceholderButton: string;
  demoButtonText: string;
  callbackInfoTitle: string;
  callbackInfoDescription: string;
  callbackExampleTitle: string;
  callbackExampleMessage: string;
  callbackExampleButton: string;
  callbackInputPlaceholder: string;
  callbackButtonText: string;
  extendDocsLinkText: string;
  extendDocsLinkRouteHash: string;
  extendInfoTitle: string;
  extendInfoDescription: string;
  extendExampleTitle: string;
  extendExampleMessage: string;
  extendExampleButton: string;
}
// Page Report: end

// Page Confirm: begin
type TDatabaseConfirmFunctionNames = 'show' | 'ask';

interface IDatabaseConfirmMethodsBase {
  id: string;
  infoDescription: string;
  infoDocsLinkText: string;
  infoDocsLinkRouteHash: string;
  comments?: string[];
  defaultValueTitle: string;
  defaultValueQuestion: string;
  defaultValueButtonOk: string;
  defaultValueButtonOkCallbackFn: string;
  defaultValueButtonOkCallbackTxt: string;
  defaultValueButtonCancel: string;
  defaultValueButtonCancelCallbackFn: string;
  defaultValueButtonCancelCallbackTxt: string;
  defaultValueOptionsComment: string;
  demoInfoTitle: string;
  demoInputPlaceholderTitle: string;
  demoInputPlaceholderQuestion: string;
  demoInputPlaceholderOkButton: string;
  demoInputPlaceholderCancelButton: string;
  demoInputPlaceholderOkButtonCallback: string;
  demoInputPlaceholderCancelButtonCallback: string;
  demoButtonText: string;
}

interface IDatabaseConfirmMethodsShow extends IDatabaseConfirmMethodsBase {
  functionName: 'show';
}

interface IDatabaseConfirmMethodsAsk extends IDatabaseConfirmMethodsBase {
  functionName: 'ask';
  defaultValueAnswer: string;
  demoInputPlaceholderAnswer: string;
}

interface IDatabaseConfirmPlayground {
  title: string;
  namespace: string;
  methods?: {
    show?: IDatabaseConfirmMethodsShow;
    ask?: IDatabaseConfirmMethodsAsk;
  };
}
// Page Confirm: end

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
  TDatabaseReportFunctionNames,
  IDatabaseReportPlayground,
  TDatabaseConfirmFunctionNames,
  IDatabaseConfirmMethodsShow,
  IDatabaseConfirmMethodsAsk,
  IDatabaseConfirmPlayground,
  IDatabaseHomeSlider,
  IDatabaseHomeGetItOn,
  IDatabaseHomeBrowsers,
  IDatabaseHomeProducts,
  IDatabaseMeta,
  IDatabaseSocialMedia,
  IDatabaseSettings,
};
