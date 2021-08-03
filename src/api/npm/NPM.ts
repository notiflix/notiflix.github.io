import { Constants } from "@constants/Constants";
import { devLogger, addSomeDelayAsync } from "@helpers/utilities/Utilities";

interface INPMResponseFailure {
  error: string;
}

interface INPMResponseDownloads {
  start: string;
  end: string;
  package: string;
  downloads: {
    downloads: number,
    day: string;
  }[];
}

interface INPMDownloadCounts {
  downloadCounts: number;
}

class NPM {
  constructor(headers?: HeadersInit) {
    this.headers = { ...this.defaultHeaders, ...headers };
  }
  private headers: HeadersInit;
  private defaultHeaders: HeadersInit = {
    'Accept': 'application/vnd.npm.install-v1+json',
  };

  getTotalDownloadCounts = async (): Promise<INPMDownloadCounts | boolean> => {
    try {
      const _headers = this.headers;

      await addSomeDelayAsync(360);

      const response = await fetch(Constants.api.urlNPMDownloads, {
        method: 'get',
        headers: _headers,
      });

      if (response.ok) {
        const data: INPMResponseDownloads | INPMResponseFailure = await response.json();

        if (data instanceof Object && 'downloads' in data) {
          const totalCounts = data?.downloads?.map(x => x.downloads)?.reduce((y, z) => y + z, 0) || 0;
          return {
            downloadCounts: totalCounts,
          };
        } else {
          throw new Error('Not found.');
        }
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (error) {
      devLogger(error?.message);
      return false;
    }
  };
}

export type {
  INPMDownloadCounts,
};

export { NPM };
