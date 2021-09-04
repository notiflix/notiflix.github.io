import { useCallback, useEffect, useState } from 'react';
import { FiDownloadCloud as IconSuccess, FiAlertCircle as IconFailure } from 'react-icons/fi';
import { AiOutlineLoading3Quarters as IconLoading } from 'react-icons/ai';

import { attributes as _home } from '@database/pages/home.md';

import { GitHub } from '@application/api/github';
import { NPM } from '@application/api/npm';
import { ErrorWithStatus, replaceBetweenCurlyBracesWithAData } from '@application/helpers/utilities';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/home/partials/home-slider/HomeSlider.module.scss';

interface IHomeSliderGitHubState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  apiStatus?: number;
  version?: string;
  downloadUrl?: string;
}

interface IHomeSliderNPMState {
  isLoading: boolean;
  isSuccess: boolean;
  downloadCounts?: number;
}

function HomeSlider(): JSX.Element {
  const { _dbHomeSlider } = _home;
  const appName = process.env.appName;

  const [stateHomeSliderGitHub, setStateHomeSliderGitHub] = useState<IHomeSliderGitHubState>({
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  });

  const [stateHomeSliderNPM, setStateHomeSliderNPM] = useState<IHomeSliderNPMState>({
    isLoading: true,
    isSuccess: false,
  });

  const getHomeSliderDataAsync = useCallback(async () => {
    try {
      const gitHubData = await new GitHub().getLatestReleaseAsync();

      if (gitHubData instanceof Object) {
        setStateHomeSliderGitHub({
          isLoading: false,
          isSuccess: true,
          isFailure: false,
          version: gitHubData.version,
          downloadUrl: gitHubData.downloadUrl,
        });

        const npmData = await new NPM().getTotalDownloadCounts();
        if (npmData instanceof Object) {
          setStateHomeSliderNPM({
            isLoading: false,
            isSuccess: true,
            downloadCounts: npmData.downloadCounts,
          });
        } else {
          setStateHomeSliderNPM({
            isLoading: false,
            isSuccess: false,
          });
        }
      } else {
        throw new Error(gitHubData.toString());
      }
    } catch (error) {
      setStateHomeSliderGitHub({
        apiStatus: error instanceof ErrorWithStatus ? (+(error?.message) || 500) : 500,
        isLoading: false,
        isSuccess: false,
        isFailure: true,
      });
    }
  }, []);

  useEffect(() => {
    if (stateHomeSliderGitHub.isLoading && stateHomeSliderNPM.isLoading) {
      if (!process.env.isDev) { // TODO:
        getHomeSliderDataAsync();
      }
    }
  }, [stateHomeSliderGitHub, stateHomeSliderNPM, getHomeSliderDataAsync]);

  return (
    <div className={styles.home__slider}>
      <div className={styles.home__slider__container}>
        <div className={styles.home__slider__media}>
          <LazyImage
            threshold={0.25}
            className={styles.home__slider__media__image}
            classNameLoaded={styles['home__slider__media__image--loaded']}
            width="500"
            height="500"
            src={`${process.env.appUrl}${_dbHomeSlider?.image}`}
            alt={appName}
          />
        </div>
        <div className={styles.home__slider__content}>
          <h1
            className={styles.home__slider__content__title}
            dangerouslySetInnerHTML={{ __html: _dbHomeSlider?.title || '' }}
          ></h1>
          <p
            className={styles.home__slider__content__description}
            dangerouslySetInnerHTML={{ __html: _dbHomeSlider?.description || '' }}
          ></p>
          <div className={styles.home__slider__content__download}>
            <p className={styles.home__slider__content__download__info}>{_dbHomeSlider?.downloadInfo}</p>
            <a
              href={stateHomeSliderGitHub.isSuccess ? stateHomeSliderGitHub.downloadUrl : undefined}
              download={stateHomeSliderGitHub.isSuccess}
              className={[
                `${styles.home__slider__content__download__link}`,
                `${stateHomeSliderGitHub.isLoading ? (styles['home__slider__content__download__link--loading'] || '') : ''}`,
                `${stateHomeSliderGitHub.isFailure ? (styles['home__slider__content__download__link--failure'] || '') : ''}`,
              ].join(' ').trim()}
            >
              {stateHomeSliderGitHub.isLoading &&
                <>
                  <IconLoading className={[
                    `${styles.home__slider__content__download__link__icon}`,
                    `${stateHomeSliderGitHub.isLoading ? (styles['home__slider__content__download__link__icon--loading'] || '') : ''}`,
                  ].join(' ').trim()} />
                  <span className={styles.home__slider__content__download__link__version}>{_dbHomeSlider?.loading}</span>
                  <span className={styles.home__slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                </>
              }
              {stateHomeSliderGitHub.isSuccess &&
                <>
                  <IconSuccess className={styles.home__slider__content__download__link__icon} />
                  <span className={styles.home__slider__content__download__link__version}>{stateHomeSliderGitHub.version}</span>

                  {stateHomeSliderNPM.isLoading &&
                    <span className={styles.home__slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                  }
                  {stateHomeSliderNPM.isSuccess &&
                    <span className={styles.home__slider__content__download__link__count}>{replaceBetweenCurlyBracesWithAData((_dbHomeSlider?.downloadCount || ''), stateHomeSliderNPM.downloadCounts)}</span>
                  }
                </>
              }
              {stateHomeSliderGitHub.isFailure &&
                <>
                  <IconFailure className={[
                    `${styles.home__slider__content__download__link__icon}`,
                    `${stateHomeSliderGitHub.isFailure ? (styles['home__slider__content__download__link__icon--failure'] || '') : ''}`,
                  ].join(' ').trim()} />
                  <span>{stateHomeSliderGitHub.apiStatus === 403 ? _dbHomeSlider?.restricted : _dbHomeSlider?.failure}</span>
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
