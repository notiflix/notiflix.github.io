import { useCallback, useEffect, useState } from 'react';
import { FiDownloadCloud as IconSuccess, FiAlertCircle as IconFailure } from 'react-icons/fi';
import { AiOutlineLoading3Quarters as IconLoading } from 'react-icons/ai';

import { attributes as _home } from '@database/pages/home.md';

import { GitHub } from '@api/github/GitHub';
import { NPM } from '@api/npm/NPM';
import { replaceBetweenCurlyBracesWithAData } from '@helpers/utilities/Utilities';

import styles from '@pages/home/partials/home-slider/HomeSlider.module.scss';

interface IHomeSliderGitHubState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  apiStatus?: number;
  productVersion?: string;
  productDownloadUrl?: string;
}

interface IHomeSliderNPMState {
  isLoading: boolean;
  isSuccess: boolean;
  downloadCounts?: number;
}

function HomeSlider(): JSX.Element {
  const { _dbHomeSlider } = _home;
  const appName = process.env.appName;

  const [homeSliderGitHubState, setHomeSliderGitHubState] = useState<IHomeSliderGitHubState>({
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  });

  const [homeSliderNPMState, setHomeSliderNPMState] = useState<IHomeSliderNPMState>({
    isLoading: true,
    isSuccess: false,
  });

  const getHomeSliderDataAsync = useCallback(async () => {
    try {
      const gitHubData = await new GitHub().getLatestReleaseAsync();

      if (gitHubData instanceof Object) {
        setHomeSliderGitHubState({
          isLoading: false,
          isSuccess: true,
          isFailure: false,
          productVersion: gitHubData.version,
          productDownloadUrl: gitHubData.downloadUrl,
        });

        const npmData = await new NPM().getTotalDownloadCounts();
        if (npmData instanceof Object) {
          setHomeSliderNPMState({
            isLoading: false,
            isSuccess: true,
            downloadCounts: npmData.downloadCounts,
          });
        } else {
          setHomeSliderNPMState({
            isLoading: false,
            isSuccess: false,
          });
        }
      } else {
        throw new Error(gitHubData.toString());
      }
    } catch (error) {
      setHomeSliderGitHubState({
        apiStatus: (+(error?.message) || 500),
        isLoading: false,
        isSuccess: false,
        isFailure: true,
      });
    }
  }, []);

  useEffect(() => {
    if (homeSliderGitHubState.isLoading && homeSliderNPMState.isLoading) {
      if (!process.env.isDev) { // TODO:
        getHomeSliderDataAsync();
      }
    }
  }, [homeSliderGitHubState, homeSliderNPMState, getHomeSliderDataAsync]);

  return (
    <div className={styles.home__slider}>
      <div className={styles.home__slider__container}>
        <div className={styles.home__slider__media}>
          <img className={styles.home__slider__media__image} width="500" height="500" src={`${process.env.appUrl}${_dbHomeSlider?.image}`} alt={appName} />
        </div>
        <div className={styles.home__slider__content}>
          <h1 className={styles.home__slider__content__title} dangerouslySetInnerHTML={{ __html: _dbHomeSlider?.title || '' }}></h1>
          <p className={styles.home__slider__content__description} dangerouslySetInnerHTML={{ __html: _dbHomeSlider?.description || '' }}></p>
          <div className={styles.home__slider__content__download}>
            <p className={styles.home__slider__content__download__info}>{_dbHomeSlider?.downloadInfo}</p>
            <a href={homeSliderGitHubState.isSuccess ? homeSliderGitHubState.productDownloadUrl : undefined} download={homeSliderGitHubState.isSuccess} className={`${styles.home__slider__content__download__link} ${homeSliderGitHubState.isLoading ? (styles['home__slider__content__download__link--loading'] || '') : ''} ${homeSliderGitHubState.isFailure ? (styles['home__slider__content__download__link--failure'] || '') : ''}`}>
              {homeSliderGitHubState.isLoading &&
                <>
                  <IconLoading className={`${styles.home__slider__content__download__link__icon} ${homeSliderGitHubState.isLoading ? (styles['home__slider__content__download__link__icon--loading'] || '') : ''}`} />
                  <span className={styles.home__slider__content__download__link__version}>{_dbHomeSlider?.loading}</span>
                  <span className={styles.home__slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                </>
              }
              {homeSliderGitHubState.isSuccess &&
                <>
                  <IconSuccess className={styles.home__slider__content__download__link__icon} />
                  <span className={styles.home__slider__content__download__link__version}>{homeSliderGitHubState.productVersion}</span>

                  {homeSliderNPMState.isLoading &&
                    <span className={styles.home__slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                  }
                  {homeSliderNPMState.isSuccess &&
                    <span className={styles.home__slider__content__download__link__count}>{replaceBetweenCurlyBracesWithAData((_dbHomeSlider?.downloadCount || ''), homeSliderNPMState.downloadCounts)}</span>
                  }
                </>
              }
              {homeSliderGitHubState.isFailure &&
                <>
                  <IconFailure className={`${styles.home__slider__content__download__link__icon} ${homeSliderGitHubState.isFailure ? (styles['home__slider__content__download__link__icon--failure'] || '') : ''}`} />
                  <span>{homeSliderGitHubState.apiStatus === 403 ? _dbHomeSlider?.restricted : _dbHomeSlider?.failure}</span>
                </>
              }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
