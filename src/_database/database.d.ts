declare module '*.md' {
  const attributes: {
    _databaseMeta: import('./database.i').IDatabaseMeta,
    _databaseContent: Record<string, unknown>, // TODO: add/extend for each page content
  };
  const html: string;
  export { attributes, html };
}
