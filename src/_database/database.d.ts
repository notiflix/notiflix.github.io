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
  };
  const html: string;
  export { attributes, html };
}
// Pages: Notify: end
