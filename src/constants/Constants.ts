import * as packageJSON from '../../package.json';

interface IConstants {
  appUrl: string;
  appVersion: string;
  appName: string;
  appOgImageSrc: string;
}

const Constants: IConstants = {
  appUrl: (JSON.stringify((packageJSON || {}).homepage) || '').replace(/"/gm, ''),
  appVersion: (JSON.stringify((packageJSON || {}).version) || '').replace(/"/gm, ''),
  appName: 'Notiflix',
  appOgImageSrc: '/webapp/notiflix-og.jpg',
};

export type { IConstants };

export { Constants };
