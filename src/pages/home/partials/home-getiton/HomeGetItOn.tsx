import { useEffect, useCallback, useState, useRef } from 'react';
import { Notify as NotiflixNotify } from 'notiflix';
import { FiCopy as IconCopy } from 'react-icons/fi';
import { BiStar as IconStar, BiGitRepoForked as IconFork } from 'react-icons/bi';

import { attributes as _home } from '@database/pages/home.md';

import { constants } from '@application/constants';
import { GitHub } from '@application/api/github';

import LogoYarn from '@components/logo/LogoYarn';
import LogoNPM from '@components/logo/LogoNPM';
import LogoGitHub from '@components/logo/LogoGitHub';

import styles from '@pages/home/partials/home-getiton/HomeGetItOn.module.scss';

interface IHomeGetItOnGitHubStatsState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  apiStatus?: number;
  stargazersCount?: number;
  forksCount?: number;
}

function HomeGetItOn(): JSX.Element {
  const { _dbHomeGetItOn } = _home;

  // Copy to the clipboard: begin
  const copyTextToTheClipboardOnClickHandler = (event: React.MouseEvent<HTMLSpanElement>): void => {
    if (event.target instanceof HTMLSpanElement) {
      event.preventDefault();
      const code = event.target.dataset.text || '';
      window.navigator.clipboard.writeText(code);
      NotiflixNotify.success(`${_dbHomeGetItOn?.clipboard}<br/><b>${code}</b>`, constants.app.libraryOptions.notify);
    }
  };
  // Copy to the clipboard: end

  // Get GitHub Stats: begin
  const refStateCanBeUpdated = useRef<boolean>(false);

  const [stateGetItOnGitHubStats, setStateGetItOnGitHubStats] = useState<IHomeGetItOnGitHubStatsState>({
    isLoading: true,
    isSuccess: false,
    isFailure: false,
  });

  const getGitHubStatsAsync = useCallback(async () => {
    try {
      const gitHubData = await new GitHub().getRepoStatsAsync();
      if (gitHubData instanceof Object && refStateCanBeUpdated.current) {
        setStateGetItOnGitHubStats({
          isLoading: false,
          isSuccess: true,
          isFailure: false,
          stargazersCount: gitHubData.stargazersCount,
          forksCount: gitHubData.forksCount,
        });
      } else {
        throw new Error(gitHubData.toString());
      }
    } catch (error) {
      if (refStateCanBeUpdated.current) {
        setStateGetItOnGitHubStats({
          apiStatus: error instanceof Error ? (+(error?.message) || 500) : 500,
          isLoading: false,
          isSuccess: false,
          isFailure: true,
        });
      }
    }
  }, [refStateCanBeUpdated]);

  useEffect(() => {
    if (stateGetItOnGitHubStats.isLoading) {
      refStateCanBeUpdated.current = true;
      getGitHubStatsAsync();
    }
    return () => {
      refStateCanBeUpdated.current = false;
    };
  }, [stateGetItOnGitHubStats, refStateCanBeUpdated, getGitHubStatsAsync]);
  // Get GitHub Stats: end

  return (
    <div className={styles.getiton}>
      <h2 className={styles.getiton__title}>{_dbHomeGetItOn?.title}</h2>
      <div className={styles.getiton__links}>
        <a
          aria-label={_dbHomeGetItOn?.yarn?.title}
          className={styles.getiton__link}
          href={_dbHomeGetItOn?.yarn?.url}
          target="_blank"
          rel="noreferrer"
        >
          <span
            className={styles.getiton__link__script}
            onClick={copyTextToTheClipboardOnClickHandler}
            data-text={_dbHomeGetItOn?.yarn?.script}
          >
            <span className={styles.getiton__link__script__copy}>
              <IconCopy className={styles.getiton__link__script__copy__icon} />
              <span>{constants.app.text.copy}</span>
            </span>
            {_dbHomeGetItOn?.yarn?.script}
          </span>
          <LogoYarn className={styles.getiton__link__icon} />
        </a>
        <a
          aria-label={_dbHomeGetItOn?.npm?.title}
          className={styles.getiton__link}
          href={_dbHomeGetItOn?.npm?.url}
          target="_blank"
          rel="noreferrer"
        >
          <span
            className={styles.getiton__link__script}
            onClick={copyTextToTheClipboardOnClickHandler}
            data-text={_dbHomeGetItOn?.npm?.script}
          >
            <span className={styles.getiton__link__script__copy}>
              <IconCopy className={styles.getiton__link__script__copy__icon} />
              <span>{constants.app.text.copy}</span>
            </span>
            {_dbHomeGetItOn?.npm?.script}
          </span>
          <LogoNPM className={styles.getiton__link__icon} />
        </a>
        <a
          aria-label={_dbHomeGetItOn?.github?.title}
          className={styles.getiton__link}
          href={_dbHomeGetItOn?.github?.url}
          target="_blank"
          rel="noreferrer"
        >
          <LogoGitHub className={styles.getiton__link__icon} />
          {!stateGetItOnGitHubStats.isFailure &&
            <span className={[
              `${styles.getiton__link__stats}`,
              stateGetItOnGitHubStats.isLoading ? `${styles['getiton__link__stats--loading']}` : '',
            ].join(' ').trim()}>
              <span className={styles.getiton__link__stats__item}>
                <IconStar className={styles.getiton__link__stats__item__icon} />
                <span className={styles.getiton__link__stats__item__text}>{stateGetItOnGitHubStats.stargazersCount}</span>
              </span>
              <span className={styles.getiton__link__stats__item}>
                <IconFork className={styles.getiton__link__stats__item__icon} />
                <span className={styles.getiton__link__stats__item__text}>{stateGetItOnGitHubStats.forksCount}</span>
              </span>
            </span>
          }
        </a>
      </div>
    </div>
  );
}

export default HomeGetItOn;
