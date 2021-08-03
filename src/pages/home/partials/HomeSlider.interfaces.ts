interface IHomeSliderGitHubState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  productVersion?: string;
  productDownloadUrl?: string;
}

interface IHomeSliderNPMState {
  isLoading: boolean;
  isSuccess: boolean;
  downloadCounts?: number;
}

export type {
  IHomeSliderGitHubState,
  IHomeSliderNPMState,
};
