import { useCallback, useEffect, useRef, useState } from 'react';
import { FiDownloadCloud as IconSuccess, FiAlertCircle as IconFailure } from 'react-icons/fi';
import { AiOutlineLoading3Quarters as IconLoading } from 'react-icons/ai';

import { attributes as _home } from '@database/pages/home.md';

import { GitHub } from '@application/api/github';
import { NPM } from '@application/api/npm';
import { replaceBetweenCurlyBracesWithAData } from '@application/helpers/utilities';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/home/partials/slider/Slider.module.scss';

interface ISliderGitHubState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  apiStatus?: number;
  fileName?: string;
  downloadUrl?: string;
}

interface ISliderNPMState {
  isLoading: boolean;
  isSuccess: boolean;
  downloadCounts?: number;
}

function Slider(): JSX.Element {
  const { _dbHomeSlider } = _home;
  const appName = process.env.appName;

  // Get GitHub and then NPM Data: begin
  const refStateCanBeUpdated = useRef<boolean>(false);

  const [stateSliderGitHub, setStateSliderGitHub] = useState<ISliderGitHubState>({
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  });

  const [stateSliderNPM, setStateSliderNPM] = useState<ISliderNPMState>({
    isLoading: true,
    isSuccess: false,
  });

  const getSliderNPMDataAsync = useCallback(async () => {
    try {
      const npmData = await new NPM().getTotalDownloadCounts();
      if (npmData instanceof Object && refStateCanBeUpdated.current) {
        setStateSliderNPM({
          isLoading: false,
          isSuccess: true,
          downloadCounts: npmData.downloadCounts,
        });
      } else {
        throw new Error(npmData.toString());
      }
    } catch (error) {
      if (refStateCanBeUpdated.current) {
        setStateSliderNPM({
          isLoading: false,
          isSuccess: false,
        });
      }
    }
  }, [refStateCanBeUpdated]);

  const getSliderGitHubDataAsync = useCallback(async () => {
    try {
      const gitHubData = await new GitHub().getLatestReleaseAsync();

      if (gitHubData instanceof Object && refStateCanBeUpdated.current) {
        setStateSliderGitHub({
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
        setStateSliderGitHub({
          apiStatus: error instanceof Error ? (+(error?.message) || 500) : 500,
          isLoading: false,
          isSuccess: false,
          isFailure: true,
        });
      }
    }
  }, [refStateCanBeUpdated]);

  useEffect(() => {
    if (stateSliderGitHub.isLoading) {
      refStateCanBeUpdated.current = true;
      getSliderGitHubDataAsync();
    }
    if (stateSliderGitHub.isSuccess && stateSliderNPM.isLoading) {
      refStateCanBeUpdated.current = true;
      getSliderNPMDataAsync();
    }
    return () => {
      refStateCanBeUpdated.current = false;
    };
  }, [
    stateSliderGitHub,
    stateSliderNPM,
    refStateCanBeUpdated,
    getSliderGitHubDataAsync,
    getSliderNPMDataAsync,
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
              href={stateSliderGitHub.isSuccess ? stateSliderGitHub.downloadUrl : undefined}
              download={stateSliderGitHub.isSuccess}
              className={[
                `${styles.slider__content__download__link}`,
                `${stateSliderGitHub.isLoading ? (styles['slider__content__download__link--loading'] || '') : ''}`,
                `${stateSliderGitHub.isFailure ? (styles['slider__content__download__link--failure'] || '') : ''}`,
              ].join(' ').trim()}
            >
              {stateSliderGitHub.isLoading &&
                <>
                  <IconLoading className={[
                    `${styles.slider__content__download__link__icon}`,
                    `${stateSliderGitHub.isLoading ? (styles['slider__content__download__link__icon--loading'] || '') : ''}`,
                  ].join(' ').trim()} />
                  <span className={styles.slider__content__download__link__filename}>{_dbHomeSlider?.loading}</span>
                  <span className={styles.slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                </>
              }
              {stateSliderGitHub.isSuccess &&
                <>
                  <IconSuccess className={styles.slider__content__download__link__icon} />
                  <span className={styles.slider__content__download__link__filename}>{stateSliderGitHub.fileName}</span>

                  {stateSliderNPM.isLoading &&
                    <span className={styles.slider__content__download__link__count}>{_dbHomeSlider?.loading}</span>
                  }
                  {stateSliderNPM.isSuccess &&
                    <span className={styles.slider__content__download__link__count}>{replaceBetweenCurlyBracesWithAData((_dbHomeSlider?.downloadCount || ''), stateSliderNPM.downloadCounts)}</span>
                  }
                </>
              }
              {stateSliderGitHub.isFailure &&
                <>
                  <IconFailure className={[
                    `${styles.slider__content__download__link__icon}`,
                    `${stateSliderGitHub.isFailure ? (styles['slider__content__download__link__icon--failure'] || '') : ''}`,
                  ].join(' ').trim()} />
                  <span>{stateSliderGitHub.apiStatus === 403 ? _dbHomeSlider?.restricted : _dbHomeSlider?.failure}</span>
                </>
              }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
