import { INotifyOptions } from 'notiflix';

import * as packageJSON from '../../../package.json';

interface IConstants {
  app: {
    url: string;
    version: string;
    name: string;
    ogImageSrc: string;
    settings: {
      notify: INotifyOptions,
    },
  },
  api: {
    urlGitHubReleases: string;
    urlNPMDownloads: string;
  },
}

const constants: IConstants = {
  app: {
    url: (JSON.stringify((packageJSON || {}).homepage) || '').replace(/"/gm, ''),
    version: (JSON.stringify((packageJSON || {}).version) || '').replace(/"/gm, ''),
    name: (JSON.stringify((packageJSON || {}).description) || '').replace(/"/gm, ''),
    ogImageSrc: '/webapp/notiflix-og.jpg', // TODO:
    settings: {
      notify: {
        fontFamily: 'Red Hat Display',
        plainText: false,
      },
    },
  },
  api: {
    urlGitHubReleases: 'https://api.github.com/repos/notiflix/Notiflix/releases',
    urlNPMDownloads: 'https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix',
  },
};

export type { IConstants };

export { constants };
