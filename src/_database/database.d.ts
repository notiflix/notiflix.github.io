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
  };
  const html: string;
  export { attributes, html };
}
// Pages: Home: end
