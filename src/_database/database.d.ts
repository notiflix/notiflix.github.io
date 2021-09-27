// App: begin
declare module '@database/app/meta.md' {
  const attributes: {
    _dbAppMeta?: import('./database.i').IDatabaseAppMeta,
  };
  const html: string;
  export { attributes, html };
}

declare module '@database/app/socialMedia.md' {
  const attributes: {
    _dbAppSocialMedia?: import('./database.i').IDatabaseAppSocialMedia[],
  };
  const html: string;
  export { attributes, html };
}

declare module '@database/app/content.md' {
  const attributes: {
    _dbAppContent?: import('./database.i').IDatabaseAppContent,
  };
  const html: string;
  export { attributes, html };
}
// App: end


// Pages: Home: begin
declare module '@database/pages/home.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbHomeSlider?: import('./database.i').IDatabaseHomeSlider,
    _dbHomeGetItOn?: import('./database.i').IDatabaseHomeGetItOn,
    _dbHomeBrowsers?: import('./database.i').IDatabaseHomeBrowsers,
    _dbHomeProducts?: import('./database.i').IDatabaseHomeProducts,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Home: end

// Pages: Notify: begin
declare module '@database/pages/notify.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbNotifyBanner?: import('./database.i').IDatabaseBannerProducts,
    _dbNotifyPlayground?: import('./database.i').IDatabaseNotifyPlayground,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Notify: end

// Pages: Report: begin
declare module '@database/pages/report.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbReportBanner?: import('./database.i').IDatabaseBannerProducts,
    _dbReportPlayground?: import('./database.i').IDatabaseReportPlayground,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Report: end

// Pages: Confirm: begin
declare module '@database/pages/confirm.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbConfirmBanner?: import('./database.i').IDatabaseBannerProducts,
    _dbConfirmPlayground?: import('./database.i').IDatabaseConfirmPlayground,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Confirm: end

// Pages: Loading: begin
declare module '@database/pages/loading.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbLoadingBanner?: import('./database.i').IDatabaseBannerProducts,
    _dbLoadingPlayground?: import('./database.i').IDatabaseLoadingPlayground,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Loading: end

// Pages: Block: begin
declare module '@database/pages/block.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbBlockBanner?: import('./database.i').IDatabaseBannerProducts,
    _dbBlockPlayground?: import('./database.i').IDatabaseBlockPlayground,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Block: end

// Pages: Download: begin
declare module '@database/pages/download.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbDownloadBanner?: import('./database.i').IDatabaseDownloadBanner,
    _dbDownloadTable?: import('./database.i').IDatabaseDownloadTable,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Download: end

// Pages: Documentation: begin
declare module '@database/pages/documentation.md' {
  const attributes: {
    _dbPageMeta?: import('./database.i').IDatabasePageMeta,
    _dbDocsTableCommon?: import('./database.i').IDatabaseDocumentationTableCommon,
    _dbDocsTableNotify?: import('./database.i').IDatabaseDocumentationTableProductNotify,
    _dbDocsTableReport?: import('./database.i').IDatabaseDocumentationTableProductReport,
    _dbDocsTableConfirm?: import('./database.i').IDatabaseDocumentationTableProduct,
    _dbDocsTableLoading?: import('./database.i').IDatabaseDocumentationTableProduct,
    _dbDocsTableBlock?: import('./database.i').IDatabaseDocumentationTableProduct,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Documentation: end
