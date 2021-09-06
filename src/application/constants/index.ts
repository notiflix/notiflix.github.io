import { INotifyOptions, IReportOptions } from 'notiflix';

import * as packageJSON from '../../../package.json';

interface IConstants {
  app: {
    url: string;
    version: string;
    name: string;
    ogImageSrc: string;
    text: {
      module: string;
      global: string;
      switch: string;
      menu: string;
      open: string;
      close: string;
      copy: string;
    };
    libraryOptions: {
      notify: INotifyOptions;
      report: IReportOptions;
    };
  };
  api: {
    urlGitHubRepo: string;
    urlGitHubReleases: string;
    urlNPMDownloads: string;
  };
}

const constants: IConstants = {
  app: {
    url: (JSON.stringify((packageJSON || {}).homepage) || '').replace(/"/gm, ''),
    version: (JSON.stringify((packageJSON || {}).version) || '').replace(/"/gm, ''),
    name: (JSON.stringify((packageJSON || {}).description) || '').replace(/"/gm, ''),
    ogImageSrc: '/webapp/notiflix-og.jpg', // TODO:
    text: {
      module: 'Module',
      global: 'Global',
      switch: 'Switch',
      menu: 'Menu',
      open: 'Open',
      close: 'Close',
      copy: 'Copy',
    },
    libraryOptions: {
      notify: {
        fontFamily: 'Red Hat Display',
        plainText: false,
      },
      report: {
        fontFamily: 'Red Hat Display',
        plainText: false,
      },
    },
  },
  api: {
    urlGitHubRepo: 'https://api.github.com/repos/notiflix/Notiflix',
    urlGitHubReleases: 'https://api.github.com/repos/notiflix/Notiflix/releases',
    urlNPMDownloads: 'https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix',
  },
};

export type { IConstants };

export { constants };
