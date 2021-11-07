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
  buttonLabel: string;
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
  importPath: string;
  importDescription: string;
  htmlDescription: string;
  htmlOnlyThis: string;
  htmlOnlyThisJS: string;
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
  comments?: string[];
  methods?: IDatabaseNotifyMethods[];
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
  comments?: string[];
  methods?: IDatabaseReportMethods[];
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

interface IDatabaseConfirmMethods {
  id: string;
  infoDescription: string;
  infoDocsLinkText: string;
  infoDocsLinkRouteHash: string;
  usageInfoTitle: string;
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

interface IDatabaseConfirmMethodShow extends IDatabaseConfirmMethods {
  functionName: 'show';
}

interface IDatabaseConfirmMethodAsk extends IDatabaseConfirmMethods {
  functionName: 'ask';
  defaultValueAnswer: string;
  demoInputPlaceholderAnswer: string;
}

interface IDatabaseConfirmMethodPrompt extends IDatabaseConfirmMethods {
  functionName: 'prompt';
  defaultValueAnswer: string;
  demoInputPlaceholderAnswer: string;
}

interface IDatabaseConfirmPlayground {
  title: string;
  namespace: string;
  methods?: {
    show?: IDatabaseConfirmMethodShow;
    ask?: IDatabaseConfirmMethodAsk;
    prompt?: IDatabaseConfirmMethodPrompt;
  };
}
// Page Confirm: end

// Page Loading: begin
type TDatabaseLoadingIndicatorsFunctionNames = 'standard' | 'hourglass' | 'circle' | 'arrows' | 'dots' | 'pulse';

interface IDatabaseLoadingMethods {
  id: string;
  isActive: boolean;
}

interface IDatabaseLoadingMethodsIndicators extends IDatabaseLoadingMethods {
  sortOrder: number;
  functionName: TDatabaseLoadingIndicatorsFunctionNames;
}

interface IDatabaseLoadingMethodCustom extends IDatabaseLoadingMethods {
  functionName: 'custom';
}

interface IDatabaseLoadingMethodChange extends IDatabaseLoadingMethods {
  functionName: 'change';
}

interface IDatabaseLoadingMethodRemove extends IDatabaseLoadingMethods {
  functionName: 'remove';
}

interface IDatabaseLoadingPlayground {
  title: string;
  namespace: string;
  infoDocsLinkText: string;
  infoDocsLinkRouteHash: string;
  commentsIndicators?: string[];
  commentIndicatorOnly: string;
  commentIndicatorWithMessage: string;
  commentIndicatorWithNewOptions: string;
  commentIndicatorWithMessageAndNewOptions: string;
  commentIndicatorCustom: string;
  commentIndicatorCustomAsAUrl: string;
  commentIndicatorCustomAsACode: string;
  commentIndicatorCustomWithMessage: string;
  commentsChange?: string[];
  commentsRemove?: string[];
  commentRemoveImmediately: string;
  commentRemoveWithDelay: string;
  methodsDefaultMessage: string;
  methodsIndicatorsTitle: string;
  methodsIndicatorsDescription: string;
  methodsIndicators?: IDatabaseLoadingMethodsIndicators[];
  methodCustomTitle: string;
  methodCustomDescription: string;
  methodCustomSvgUrl: string;
  methodCustomSvgCode: string;
  methodCustom?: IDatabaseLoadingMethodCustom;
  methodChangeTitle: string;
  methodChangeDescription: string;
  methodChangeMessage: string;
  methodChange?: IDatabaseLoadingMethodChange;
  methodRemoveTitle: string;
  methodRemoveDescription: string;
  methodRemoveDuration: number;
  methodRemove?: IDatabaseLoadingMethodRemove;
  demoTitle: string;
  demoDescription: string;
  demoInputPlaceholder: string;
}
// Page Loading: end

// Page Block: begin
type TDatabaseBlockIndicatorsFunctionNames = 'standard' | 'hourglass' | 'circle' | 'arrows' | 'dots' | 'pulse';

interface IDatabaseBlockMethods {
  id: string;
  isActive: boolean;
}

interface IDatabaseBlockMethodsIndicators extends IDatabaseBlockMethods {
  sortOrder: number;
  functionName: TDatabaseBlockIndicatorsFunctionNames;
}

interface IDatabaseBlockMethodRemove extends IDatabaseBlockMethods {
  functionName: 'remove';
}

interface IDatabaseBlockPlayground {
  title: string;
  namespace: string;
  infoDocsLinkText: string;
  infoDocsLinkRouteHash: string;
  commentsBlock?: string[];
  commentBlockOnly: string;
  commentBlockWithMessage: string;
  commentBlockWithNewOptions: string;
  commentBlockWithMessageAndNewOptions: string;
  commentsUnblock?: string[];
  commentUnblockImmediately: string;
  commentUnblockWithDelay: string;
  methodsDefaultSelector: string;
  methodsDefaultMessage: string;
  methodsBlockTitle: string;
  methodsBlockDescription: string;
  methodsBlockIndicators: IDatabaseBlockMethodsIndicators[];
  methodUnblockTitle: string;
  methodUnblockDescription: string;
  methodUnblockDuration: number;
  methodUnblock?: IDatabaseBlockMethodRemove;
  demoTitle: string;
  demoDescription: string;
  demoInputPlaceholder: string;
  demoElementTitle: string;
  demoElementDescription: string;
  demoElementImage: string;
  demoButtonUnblock: string;
}
// Page Block: end

// Page Download: begin
interface IDatabaseDownloadTable {
  title: string;
  description: string;
  version: string;
  releaseNotes: string;
  releaseDate: string;
  download: string;
  latestVersion: string;
  loading: string;
  failure: string;
  restricted: string;
  restrictedLinkText: string;
  restrictedLinkUrl: string;
}

interface IDatabaseDownloadBanner {
  image: string;
  alt: string;
}
// Page Download: end

// Page Documentation: begin
interface IDatabaseDocumentationSearch {
  bannerImageSrc: string;
  bannerImageAlt: string;
  selectPrefix: string;
  inputPlaceholder: string;
  inputMaxLength: number;
  resultsTitle: string;
  resultsNotFound: string;
  resultsButtonMore: string;
}

type TDatabaseDocumentationProductOptionSection = 'common' | 'success' | 'failure' | 'warning' | 'info';

interface IDatabaseDocumentationTableProductOption {
  name: string;
  version?: string | null;
  type: 'string' | 'number' | 'boolean';
  defaultValue: string;
  description: string;
}

interface IDatabaseDocumentationTableProductOptions {
  sectionId: string;
  sectionType: TDatabaseDocumentationProductOptionSection;
  sectionTitle: string;
  options?: IDatabaseDocumentationTableProductOption[];
}

interface IDatabaseDocumentationTableProduct {
  namespace: string;
  optionsCommon?: IDatabaseDocumentationTableProductOptions;
}

interface IDatabaseDocumentationTableProductNotify extends IDatabaseDocumentationTableProduct {
  optionsSuccess?: IDatabaseDocumentationTableProductOptions;
  optionsFailure?: IDatabaseDocumentationTableProductOptions;
  optionsWarning?: IDatabaseDocumentationTableProductOptions;
  optionsInfo?: IDatabaseDocumentationTableProductOptions;
}

interface IDatabaseDocumentationTableProductReport extends IDatabaseDocumentationTableProduct {
  optionsSuccess?: IDatabaseDocumentationTableProductOptions;
  optionsFailure?: IDatabaseDocumentationTableProductOptions;
  optionsWarning?: IDatabaseDocumentationTableProductOptions;
  optionsInfo?: IDatabaseDocumentationTableProductOptions;
}

interface IDatabaseDocumentationTableCommonViewTableHead {
  option: string;
  type: string;
  defaultValue: string;
  description: string;
}

interface IDatabaseDocumentationTableCommonViewTable {
  button: string;
  tableHead?: IDatabaseDocumentationTableCommonViewTableHead;
}

interface IDatabaseDocumentationTableCommonViewCode {
  button: string;
  descriptionInit: string;
  descriptionMerge: string;
  functionNameInit: string;
  functionNameMerge: string;
  scopeWebApp: string;
  scopeGlobal: string;
  scopeComponent: string;
}

interface IDatabaseDocumentationTableCommon {
  titleSuffix: string;
  description: string;
  viewTable?: IDatabaseDocumentationTableCommonViewTable;
  viewCode?: IDatabaseDocumentationTableCommonViewCode;
}
// Page Documentation: end

// Page Common: Meta Data: begin
interface IDatabasePageMeta {
  routeId: string;
  lastModifiedDate: string;
  title: string;
  description: string;
  robots?: string | null;
  ogImage?: string | null;
  themeColor?: string | null;
}
// Page Common: Meta Data: end


// Page 404 | 500: begin
interface IDatabaseErrorBanner {
  bannerImageSrc: string;
  bannerImageWidth: string;
  bannerImageHeight: string;
  title: string;
  buttonText: string;
}
// Page 404 | 500: begin


// App: Content: begin
interface IDatabaseAppContent {
  noscript?: {
    message?: string;
  };
  footer?: {
    appVersion: string;
    gitHubName: string;
    gitHubUrl: string;
  };
  buttons?: {
    module?: string;
    global?: string;
    switch?: string;
    menu?: string;
    open?: string;
    close?: string;
    copy?: string;
    goToTop?: string;
    navigation?: string;
  };
  date?: {
    monthNames?: string[];
  };
  browsers?: {
    ieTitle?: string;
    ieDescription?: string;
    ieLinkText?: string;
    ieLinkUrl?: string;
  };
}
// App: Content: end

// App: Social Media Accounts: begin
interface IDatabaseAppSocialMedia {
  isActive: boolean;
  url: string;
  name: string;
}
// App: Social Media Accounts: end

// App: Meta: begin
interface IDatabaseAppMeta {
  metaLanguageCode: string;
  metaLanguage: string;
  metaTitle: string;
  metaDescription: string;
  metaRobots: string;
  metaYearInit: number;
  metaAuthor: string;
  metaCopyright: string;
  metaThemeColor: string;
  metaTwitterUser: string;
  metaTwitterDomain: string;
  metaGoogleSiteVerification: string;
}
// App: Meta: end

export type {
  IDatabaseDocumentationSearch,
  IDatabaseDocumentationTableProductOption,
  IDatabaseDocumentationTableProductOptions,
  IDatabaseDocumentationTableProductNotify,
  IDatabaseDocumentationTableProductReport,
  IDatabaseDocumentationTableProduct,
  IDatabaseDocumentationTableCommonViewTableHead,
  IDatabaseDocumentationTableCommonViewTable,
  IDatabaseDocumentationTableCommonViewCode,
  IDatabaseDocumentationTableCommon,
  IDatabaseDownloadTable,
  IDatabaseDownloadBanner,
  IDatabaseBannerProducts,
  TDatabaseNotifyFunctionNames,
  IDatabaseNotifyPlayground,
  TDatabaseReportFunctionNames,
  IDatabaseReportPlayground,
  TDatabaseConfirmFunctionNames,
  IDatabaseConfirmMethodShow,
  IDatabaseConfirmMethodAsk,
  IDatabaseConfirmMethodPrompt,
  IDatabaseConfirmPlayground,
  TDatabaseLoadingIndicatorsFunctionNames,
  IDatabaseLoadingPlayground,
  TDatabaseBlockIndicatorsFunctionNames,
  IDatabaseBlockPlayground,
  IDatabaseHomeSlider,
  IDatabaseHomeGetItOn,
  IDatabaseHomeBrowsers,
  IDatabaseHomeProducts,
  IDatabasePageMeta,
  IDatabaseErrorBanner,
  IDatabaseAppContent,
  IDatabaseAppSocialMedia,
  IDatabaseAppMeta,
};
