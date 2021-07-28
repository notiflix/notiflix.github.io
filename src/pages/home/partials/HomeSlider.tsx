import { useCallback, useEffect, useState } from 'react';
import { FiDownloadCloud as IconSuccess, FiAlertCircle as IconFailure } from 'react-icons/fi';
import { AiOutlineLoading3Quarters as IconLoading } from 'react-icons/ai';

import { attributes as _home } from '@database/pages/home.md';

import { addSomeDelayAsync } from '@helpers/utilities/Utilities';

import styles from '@pages/home/partials/HomeSlider.module.scss';


interface IHomeSliderGitHubState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  productVersion?: string;
  productDownloadUrl?: string;
}

function HomeSlider(): JSX.Element {
  const { _dbHomeSlider } = _home;
  const appName = process.env.appName;
  console.log(_dbHomeSlider);


  // Last Version From GitHub: begin
  const [homeSliderGitHubState, setHomeSliderGitHubState] = useState<IHomeSliderGitHubState>({
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  });

  // TODO: will be moved to the API folder as a Service
  const getHomeDataAsync = useCallback(async () => {
    try {
      const response = await fetch('https://api.github.com/repos/notiflix/Notiflix/releases', {
        method: 'get',
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      await addSomeDelayAsync(1000);

      if (response.ok) {

        // TODO: Will be a global interface
        const apiResponse: Array<{
          id: number;
          name: string;
          zipball_url: string;
          prerelease: boolean;
        }> = await response.json();

        const latestRelease = apiResponse?.filter(x => !x.prerelease)?.sort((x, y) => y.id - x.id)?.find(x => x);

        if (latestRelease) {
          setHomeSliderGitHubState({
            isLoading: false,
            isSuccess: true,
            isFailure: false,
            productVersion: latestRelease.name,
            productDownloadUrl: latestRelease.zipball_url,
          });
        } else {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    } catch (error) {
      setHomeSliderGitHubState({
        isLoading: false,
        isSuccess: false,
        isFailure: true,
      });
    }
  }, []);

  useEffect(() => {
    if (homeSliderGitHubState.isLoading) {
      getHomeDataAsync();
    }
  }, [homeSliderGitHubState, getHomeDataAsync]);
  // Last Version From GitHub: end

  return (
    <div className={styles.home__slider}>
      <div className={styles.home__slider__container}>
        <div className={styles.home__slider__media}>
          <img className={styles.home__slider__media__image} width="500" height="500" src={`${process.env.appUrl}${_dbHomeSlider.image}`} alt={appName} />
        </div>
        <div className={styles.home__slider__content}>
          <h1 className={styles.home__slider__content__title} dangerouslySetInnerHTML={{ __html: _dbHomeSlider.title }}></h1>
          <p className={styles.home__slider__content__description} dangerouslySetInnerHTML={{ __html: _dbHomeSlider.description }}></p>
          <div className={styles.home__slider__content__download}>
            <p className={styles.home__slider__content__download__info}>{_dbHomeSlider.downloadInfo}</p>
            <a href={homeSliderGitHubState.isSuccess ? homeSliderGitHubState.productDownloadUrl : undefined} download={homeSliderGitHubState.isSuccess} className={`${styles.home__slider__content__download__link} ${homeSliderGitHubState.isLoading ? (styles['home__slider__content__download__link--loading'] || '') : ''} ${homeSliderGitHubState.isFailure ? (styles['home__slider__content__download__link--failure'] || '') : ''}`}>
              {homeSliderGitHubState.isLoading &&
                <>
                  <IconLoading className={`${styles.home__slider__content__download__link__icon} ${homeSliderGitHubState.isLoading ? (styles['home__slider__content__download__link__icon--loading'] || '') : ''}`} />
                  <span className={styles.home__slider__content__download__link__version}>{'TODO:Loading...'}</span>

                  {/* TODO: Will be NPM state */}
                  <span className={styles.home__slider__content__download__link__count}>{'TODO:Loading...'}</span>
                </>
              }
              {homeSliderGitHubState.isSuccess &&
                <>
                  <IconSuccess className={styles.home__slider__content__download__link__icon} />
                  <span className={styles.home__slider__content__download__link__version}>{`${appName}-${homeSliderGitHubState.productVersion?.replace('v', '')}.zip`}</span>

                  {/* TODO: Will be NPM state */}
                  <span className={styles.home__slider__content__download__link__count}>{_dbHomeSlider.downloadCount}</span>
                </>
              }
              {homeSliderGitHubState.isFailure &&
                <>
                  <IconFailure className={`${styles.home__slider__content__download__link__icon} ${homeSliderGitHubState.isFailure ? (styles['home__slider__content__download__link__icon--failure'] || '') : ''}`} />
                  <span>{'TODO:Uppsss...'}</span>
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
