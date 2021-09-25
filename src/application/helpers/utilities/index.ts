import { constants } from '@application/constants';


class ErrorWithStatus extends Error {
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
  status = 0;
}

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

const createVersionName = (tag?: string): string => `${constants.app.name}-${tag?.replace(/[^0-9.]/g, '')}`;

const createZipFileName = (tag?: string): string => `${constants.app.name}-${tag?.replace(/[^0-9.]/g, '')}.zip`;

const createFormattedReleaseDate = (date: string): string => {
  const createDate = new Date(date);
  const year = createDate.getFullYear();
  const monthName = constants.app.text.monthNames[createDate.getMonth()];
  const day = (createDate.getDate() + '').padStart(2, '0');
  return `${monthName} ${day}, ${year}`;
};

const replaceBetweenCurlyBracesWithAData = (content: string, data?: string | number): string => `${content.replace(/\{\{(.*?)\}\}/gm, (data || '-').toString())}`;


export {
  ErrorWithStatus,
  devLoggerInfo,
  devLoggerError,
  addSomeDelayAsync,
  createVersionName,
  createZipFileName,
  createFormattedReleaseDate,
  replaceBetweenCurlyBracesWithAData,
};
