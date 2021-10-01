import { attributes as _appContent } from '@database/app/content.md';

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
  const { _dbAppContent } = _appContent;
  const createDate = new Date(date);
  const year = createDate.getFullYear();
  const monthName = Array.isArray(_dbAppContent?.date?.monthNames) ? _dbAppContent?.date?.monthNames[createDate.getMonth()] : '';
  const day = (createDate.getDate() + '').padStart(2, '0');
  return `${monthName} ${day}, ${year}`;
};

const replaceBetweenCurlyBracesWithAData = (content: string, replacement?: string | number): string => `${content?.replace(/\{\{(.*?)\}\}/gm, (replacement || '-').toString())}`;

const windowScrollToElementBySelector = ({
  selector,
  headerFix = false,
  threshold = 0,
  isSmooth = true,
  clearHash = false,
}: {
  selector: string;
  headerFix?: boolean;
  threshold?: number;
  isSmooth?: boolean;
  clearHash?: boolean;
}): void => {
  let headerHeight = 0;
  if (headerFix) {
    const header: HTMLElement | null = window.document.querySelector('header');
    headerHeight = header ? header.clientHeight : 0;
  }

  const element: HTMLDivElement | null = window.document.querySelector(selector);
  if (element) {
    const top = Math.round((element.getBoundingClientRect()?.top || 0) + (window.document.documentElement?.scrollTop || 0) - headerHeight - threshold);

    window.scrollTo({
      top: top,
      behavior: isSmooth ? 'smooth' : 'auto',
    });
  } else if (clearHash) {
    window.scrollTo(0, 0);
  }
  if (clearHash) {
    window.history.replaceState('', window.document.title, window.location.href.replace(/#.*$/, ''));
  }
};

const createDocumentationCodeClassName = (type: string, value: string): string => {
  return value?.toLocaleLowerCase('en') === 'null' ? 'null' : type;
};

const createDocumentationCodeValue = (type: string, value: string): string => {
  return value?.toLocaleLowerCase('en') === 'null' ? 'null' : (type === 'string' ? `'${value}'` : value);
};

const browserIsInternetExplorer = (): boolean => window?.navigator?.userAgent?.toLocaleLowerCase('en').indexOf('.net4') > -1;


export {
  ErrorWithStatus,
  devLoggerInfo,
  devLoggerError,
  addSomeDelayAsync,
  createVersionName,
  createZipFileName,
  createFormattedReleaseDate,
  replaceBetweenCurlyBracesWithAData,
  windowScrollToElementBySelector,
  createDocumentationCodeClassName,
  createDocumentationCodeValue,
  browserIsInternetExplorer,
};
