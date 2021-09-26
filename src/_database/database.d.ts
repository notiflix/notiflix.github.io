// Settings: begin
declare module '@database/settings/settings.md' {
  const attributes: {
    _dbSettings?: import('./database.i').IDatabaseSettings,
  };
  const html: string;
  export { attributes, html };
}

declare module '@database/settings/socialMedia.md' {
  const attributes: {
    _dbSocialMedia?: import('./database.i').IDatabaseSocialMedia[],
  };
  const html: string;
  export { attributes, html };
}
// Settings: end


// Pages: Home: begin
declare module '@database/pages/home.md' {
  const attributes: {
    _dbMeta?: import('./database.i').IDatabaseMeta,
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
    _dbMeta?: import('./database.i').IDatabaseMeta,
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
    _dbMeta?: import('./database.i').IDatabaseMeta,
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
    _dbMeta?: import('./database.i').IDatabaseMeta,
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
    _dbMeta?: import('./database.i').IDatabaseMeta,
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
    _dbMeta?: import('./database.i').IDatabaseMeta,
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
    _dbMeta?: import('./database.i').IDatabaseMeta,
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
    _dbMeta?: import('./database.i').IDatabaseMeta,
    _dbDocsNotify?: import('./database.i').IDatabaseDocumentationProductNotify,
  };
  const html: string;
  export { attributes, html };
}
// Pages: Documentation: end
