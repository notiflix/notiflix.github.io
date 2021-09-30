enum EProductId {
  NOTIFY = 'NOTIFY',
  REPORT = 'REPORT',
  CONFIRM = 'CONFIRM',
  LOADING = 'LOADING',
  BLOCK = 'BLOCK',
}

const mapProductNameAsString = new Map<string, string>([
  [EProductId.NOTIFY, `Notify`],
  [EProductId.REPORT, `Report`],
  [EProductId.CONFIRM, `Confirm`],
  [EProductId.LOADING, `Loading`],
  [EProductId.BLOCK, `Block`],
]);

const getProductNameAsString = (enumeration: string): string => mapProductNameAsString.get(enumeration) || '';

export {
  EProductId,
  getProductNameAsString,
};
