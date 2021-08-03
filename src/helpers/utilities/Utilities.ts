import { Constants } from '@constants/Constants';

const devLogger = (message?: string): void | undefined | string => (process.env.isDev && console.log(message));

const addSomeDelayAsync = (milliseconds?: number): Promise<void> => new Promise(resolve => setTimeout(() => { resolve(); }, milliseconds || 1000));

const createProductZipName = (productVersion?: string): string => `${Constants.app.name}-${productVersion?.replace(/[^0-9.]/g, '')}.zip`;

const replaceBetweenCurlyBracesWithAData = (content: string, data?: string | number): string => `${content.replace(/\{\{(.*?)\}\}/gm, (data || '-').toString())}`;

export {
  devLogger,
  addSomeDelayAsync,
  createProductZipName,
  replaceBetweenCurlyBracesWithAData,
};
