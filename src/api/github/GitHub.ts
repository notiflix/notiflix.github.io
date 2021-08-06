import { Constants } from '@constants/Constants';
import { devLoggerError, addSomeDelayAsync, createProductZipName } from '@helpers/utilities/Utilities';

interface IGitHubResponseFailure {
  message: string;
  documentation_url: string;
}

interface IGitHubResponseLatestRelease {
  id: number;
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  zipball_url: string;
}

interface IGitHubLatestRelease {
  version: string;
  downloadUrl: string;
}

class GitHub {
  constructor(headers?: HeadersInit) {
    this.headers = { ...this.defaultHeaders, ...headers };
  }
  private headers: HeadersInit;
  private defaultHeaders: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };

  getLatestReleaseAsync = async (): Promise<IGitHubLatestRelease | boolean> => {
    try {
      const _headers = this.headers;

      await addSomeDelayAsync(360);

      const response = await fetch(Constants.api.urlGitHubReleases, {
        method: 'get',
        headers: _headers,
      });

      if (!response.ok) {
        throw new Error('Something went wrong.');
      }

      const data: IGitHubResponseLatestRelease[] | IGitHubResponseFailure = await response.json();
      if (!Array.isArray(data) || data?.length < 1) {
        throw new Error('Not found.');
      }

      const latestRelease = data?.filter(x => !x.draft && !x.prerelease)?.sort((x, y) => y.id - x.id)?.find(x => x);
      if (!latestRelease) {
        throw new Error('There is no release.');
      }

      return {
        version: createProductZipName(latestRelease.tag_name),
        downloadUrl: latestRelease.zipball_url,
      };
    } catch (error) {
      devLoggerError(error?.message);
      return false;
    }
  };
}

export type {
  IGitHubLatestRelease,
};

export { GitHub };
