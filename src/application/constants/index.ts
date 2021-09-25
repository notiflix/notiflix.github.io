import { IBlockOptions, IConfirmOptions, ILoadingOptions, INotifyOptions, IReportOptions } from 'notiflix';

import * as packageJSON from '../../../package.json';

interface IConstants {
  app: {
    url: string;
    version: string;
    name: string;
    ogImagePath: string;
    text: {
      module: string;
      global: string;
      switch: string;
      menu: string;
      open: string;
      close: string;
      copy: string;
      monthNames: string[];
    };
    libraryOptions: {
      notify: INotifyOptions;
      report: IReportOptions;
      confirm: IConfirmOptions;
      loading: ILoadingOptions;
      block: IBlockOptions;
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
    ogImagePath: '/webapp/notiflix-og.jpg', // TODO:
    text: {
      module: 'Module',
      global: 'Global',
      switch: 'Switch',
      menu: 'Menu',
      open: 'Open',
      close: 'Close',
      copy: 'Copy',
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
      confirm: {
        fontFamily: 'Red Hat Display',
        plainText: false,
      },
      loading: {
        fontFamily: 'Red Hat Display',
        clickToClose: true,
      },
      block: {
        fontFamily: 'Red Hat Display',
      },
    },
  },
  api: {
    urlGitHubRepo: process.env.isDev ? '/mock/api-github-repo.json' : 'https://api.github.com/repos/notiflix/Notiflix',
    urlGitHubReleases: process.env.isDev ? '/mock/api-github-allreleases.json' : 'https://api.github.com/repos/notiflix/Notiflix/releases',
    urlNPMDownloads: process.env.isDev ? '/mock/api-npm-downloads.json' : 'https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix',
  },
};

export type { IConstants };

export { constants };
