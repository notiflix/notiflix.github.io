declare module '*.md' {
  const attributes: {
    // app settings
    _dbSettings: import('./database.i').IDatabaseSettings,
    // app social media accounts
    _dbSocialMedia: Array<import('./database.i').IDatabaseSocialMedia>,

    // pages: common
    _dbMeta: import('./database.i').IDatabaseMeta,

    // pages: home
    _dbHomeSlider: import('./database.i').IDatabaseHomeSlider,

    // TODO: add/extend for each page content
    _dbContent: Record<string, unknown>,
  };
  const html: string;
  export { attributes, html };
}
