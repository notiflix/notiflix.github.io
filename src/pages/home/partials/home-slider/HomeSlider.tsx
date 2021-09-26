import { useCallback, useEffect, useRef, useState } from 'react';
import { FiDownloadCloud as IconSuccess, FiAlertCircle as IconFailure } from 'react-icons/fi';
import { AiOutlineLoading3Quarters as IconLoading } from 'react-icons/ai';

import { attributes as _home } from '@database/pages/home.md';

import { GitHub } from '@application/api/github';
import { NPM } from '@application/api/npm';
import { replaceBetweenCurlyBracesWithAData } from '@application/helpers/utilities';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/home/partials/home-slider/HomeSlider.module.scss';

interface IHomeSliderGitHubState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  apiStatus?: number;
  fileName?: string;
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

  // Get GitHub and then NPM Data: begin
  const refStateCanBeUpdated = useRef<boolean>(false);

  const [stateHomeSliderGitHub, setStateHomeSliderGitHub] = useState<IHomeSliderGitHubState>({
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  });

  const [stateHomeSliderNPM, setStateHomeSliderNPM] = useState<IHomeSliderNPMState>({
    isLoading: true,
    isSuccess: false,
  });

  const getHomeSliderNPMDataAsync = useCallback(async () => {
    try {
      const npmData = await new NPM().getTotalDownloadCounts();
      if (npmData instanceof Object && refStateCanBeUpdated.current) {
        setStateHomeSliderNPM({
          isLoading: false,
          isSuccess: true,
          downloadCounts: npmData.downloadCounts,
        });
      } else {
        throw new Error(npmData.toString());
      }
    } catch (error) {
      if (refStateCanBeUpdated.current) {
        setStateHomeSliderNPM({
          isLoading: false,
          isSuccess: false,
        });
      }
    }
  }, [refStateCanBeUpdated]);

  const getHomeSliderGitHubDataAsync = useCallback(async () => {
    try {
      const gitHubData = await new GitHub().getLatestReleaseAsync();

      if (gitHubData instanceof Object && refStateCanBeUpdated.current) {
        setStateHomeSliderGitHub({
          isLoading: false,
          isSuccess: true,
          isFailure: false,
          fileName: gitHubData.fileName,
          downloadUrl: gitHubData.downloadUrl,
        });
      } else {
        throw new Error(gitHubData.toString());
      }
    } catch (error) {
      if (refStateCanBeUpdated.current) {
        setStateHomeSliderGitHub({
          apiStatus: error instanceof Error ? (+(error?.message) || 500) : 500,
          isLoading: false,
          isSuccess: false,
          isFailure: true,
        });
      }
    }
  }, [refStateCanBeUpdated]);

  useEffect(() => {
    if (stateHomeSliderGitHub.isLoading) {
      refStateCanBeUpdated.current = true;
      getHomeSliderGitHubDataAsync();
    }
    if (stateHomeSliderGitHub.isSuccess && stateHomeSliderNPM.isLoading) {
      refStateCanBeUpdated.current = true;
      getHomeSliderNPMDataAsync();
    }
    return () => {
      refStateCanBeUpdated.current = false;
    };
  }, [
    stateHomeSliderGitHub,
    stateHomeSliderNPM,
    refStateCanBeUpdated,
    getHomeSliderGitHubDataAsync,
    getHomeSliderNPMDataAsync,
  ]);
  // Get GitHub and then NPM Data: end

  return (
    <div className={styles.slider}>
      <div className={styles.slider__container}>
        <div className={styles.slider__media}>
          <LazyImage
            threshold={0.25}
            className={styles.slider__media__image}
            classNameLoaded={styles['slider__media__image--loaded']}
            width="500"
            height="500"
            src={`${process.env.appUrl}${_dbHomeSlider?.image}`}
            alt={appName}
          />
        </div>
        <div className={styles.slider__content}>
          <h1
            className={styles.slider__content__title}
            dangerouslySetInnerHTML={{ __html: _dbHomeSlider?.title || '' }}
          ></h1>
          <p
            className={styles.slider__content__description}
            dangerouslySetInnerHTML={{ __html: _dbHomeSlider?.description || '' }}
          ></p>
          <div className={styles.slider__content__download}>
            <p className={styles.slider__content__download__info}>{_dbHomeSlider?.downloadInfo}</p>
            <a
              href={stateHomeSliderGitHub.isSuccess ? stateHomeSliderGitHub.downloadUrl : undefined}
              download={stateHomeSliderGitHub.isSuccess}
              className={[
                `${styles.slider__content__download__link}`,
                `${stateHomeSliderGitHub.isLoading ? (styles['slider__content__download__link--loading'] || '') : ''}`,
                `${stateHomeSliderGitHub.isFailure ? (styles['slider__content__download__link--failure'] || '') : ''}`,
              ].join(' ').trim()}
            >
              {stateHomeSliderGitHub.isLoading &&
                <>
                  <IconLoading className={[
                    `${styles.slider__content__download__link__icon}`,
                    `${stateHomeSliderGitHub.isLoading ? (styles['slider__content__download__link__icon--loading'] || '') : ''}`,
                  ].join(' ').trim()} />
                  <span className={styles.slider__content__download__link__filename}>{_dbHomeSlider?.loading}</span>
                  <span className={styles.slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                </>
              }
              {stateHomeSliderGitHub.isSuccess &&
                <>
                  <IconSuccess className={styles.slider__content__download__link__icon} />
                  <span className={styles.slider__content__download__link__filename}>{stateHomeSliderGitHub.fileName}</span>

                  {stateHomeSliderNPM.isLoading &&
                    <span className={styles.slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                  }
                  {stateHomeSliderNPM.isSuccess &&
                    <span className={styles.slider__content__download__link__count}>{replaceBetweenCurlyBracesWithAData((_dbHomeSlider?.downloadCount || ''), stateHomeSliderNPM.downloadCounts)}</span>
                  }
                </>
              }
              {stateHomeSliderGitHub.isFailure &&
                <>
                  <IconFailure className={[
                    `${styles.slider__content__download__link__icon}`,
                    `${stateHomeSliderGitHub.isFailure ? (styles['slider__content__download__link__icon--failure'] || '') : ''}`,
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
