import { Constants } from '@constants/Constants';

const devLoggerInfo = (message?: string): void => {
  if (process.env.isDev) {
    console.log(`%c ${Constants.app.name} `, 'padding:2px;border-radius:20px;color:#fff;background:#26c0d3', `\n ${message}`);
  }
};

const devLoggerError = (message?: string): void => {
  if (process.env.isDev) {
    console.error(`%c ${Constants.app.name} `, 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', `\n ${message}`);
  }
};

const addSomeDelayAsync = (milliseconds?: number): Promise<void> => new Promise(resolve => setTimeout(() => { resolve(); }, milliseconds || 1000));

const createProductZipName = (productVersion?: string): string => `${Constants.app.name}-${productVersion?.replace(/[^0-9.]/g, '')}.zip`;

const replaceBetweenCurlyBracesWithAData = (content: string, data?: string | number): string => `${content.replace(/\{\{(.*?)\}\}/gm, (data || '-').toString())}`;

export {
  devLoggerInfo,
  devLoggerError,
  addSomeDelayAsync,
  createProductZipName,
  replaceBetweenCurlyBracesWithAData,
};
