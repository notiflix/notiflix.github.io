import { constants } from '@application/constants';
import { ErrorWithStatus, devLoggerError, addSomeDelayAsync, createProductZipName } from '@application/helpers/utilities';

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

  getLatestReleaseAsync = async (): Promise<IGitHubLatestRelease | number> => {
    try {
      const _headers = this.headers;

      await addSomeDelayAsync(360);

      const response = await fetch(constants.api.urlGitHubReleases, {
        method: 'get',
        headers: _headers,
      });

      if (response.status === 403) {
        throw new ErrorWithStatus('API rate limit exceeded.', response.status);
      }

      if (!response.ok) {
        throw new ErrorWithStatus('Something went wrong.', response.status);
      }

      const data: IGitHubResponseLatestRelease[] | IGitHubResponseFailure = await response.json();
      if (!Array.isArray(data) || data?.length < 1) {
        throw new ErrorWithStatus('Not found.', 404);
      }

      const latestRelease = data?.filter(x => !x.draft && !x.prerelease)?.sort((x, y) => y.id - x.id)?.find(x => x);
      if (!latestRelease) {
        throw new ErrorWithStatus('There is no release.', 404);
      }

      return {
        version: createProductZipName(latestRelease.tag_name),
        downloadUrl: latestRelease.zipball_url,
      };
    } catch (error) {
      devLoggerError(error?.message);
      return error?.status || 500;
    }
  };
}

export type {
  IGitHubLatestRelease,
};

export { GitHub };
