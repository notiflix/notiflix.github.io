import { constants } from '@application/constants';

const devLoggerInfo = (message?: string): void => {
  if (process.env.isDev) {
    console.log(`%c ${constants.app.name} `, 'padding:2px;border-radius:20px;color:#fff;background:#26c0d3', `\n ${message}`);
  }
};

const devLoggerError = (message?: string): void => {
  if (process.env.isDev) {
    console.error(`%c ${constants.app.name} `, 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', `\n ${message}`);
  }
};

const addSomeDelayAsync = (milliseconds?: number): Promise<void> => new Promise(resolve => setTimeout(() => { resolve(); }, milliseconds || 1000));

const createZipFileName = (version?: string): string => `${constants.app.name}-${version?.replace(/[^0-9.]/g, '')}.zip`;

const replaceBetweenCurlyBracesWithAData = (content: string, data?: string | number): string => `${content.replace(/\{\{(.*?)\}\}/gm, (data || '-').toString())}`;

class ErrorWithStatus extends Error {
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
  status = 0;
}

export {
  devLoggerInfo,
  devLoggerError,
  addSomeDelayAsync,
  createZipFileName,
  replaceBetweenCurlyBracesWithAData,
  ErrorWithStatus,
};
