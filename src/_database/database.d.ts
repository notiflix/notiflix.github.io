declare module '*.md' {
  const attributes: {
    _dbSettings: import('./database.i').IDatabaseSettings,
    _dbSocialMedia: Array<import('./database.i').IDatabaseSocialMedia>,
    _dbMeta: import('./database.i').IDatabaseMeta,
    _dbContent: Record<string, unknown>, // TODO: add/extend for each page content
  };
  const html: string;
  export { attributes, html };
}
