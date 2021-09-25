import { useCallback, useEffect, useState } from 'react';
import { Marked } from '@ts-stack/markdown';
import { FiDownloadCloud as IconDownload, FiAlertTriangle as IconFailure } from 'react-icons/fi';
import { FaGithub as IconGitHub } from 'react-icons/fa';

import { attributes as _download } from '@database/pages/download.md';

import { GitHub, IGitHubAllReleases } from '@application/api/github';

import styles from '@pages/download/partials/download-table/DownloadTable.module.scss';


interface IDownloadTableGitHubState {
  isLoading: boolean;
  isSuccess: boolean;
  isFailure: boolean;
  placeholder?: number[];
  apiStatus?: number;
  releases?: IGitHubAllReleases[];
}

function DownloadTable(): JSX.Element {
  const { _dbDownloadTable } = _download;

  // Get All Releases from GitHub: begin
  const [stateDownloadTableGitHub, setStateDownloadTableGitHub] = useState<IDownloadTableGitHubState>({
    isLoading: true,
    isSuccess: false,
    isFailure: false,
    placeholder: [1, 2, 3, 4, 5, 6],
  });

  const getGitHubAllReleasesAsync = useCallback(async () => {
    try {
      const gitHubData = await new GitHub().getAllReleasesAsync();
      if (Array.isArray(gitHubData)) {
        setStateDownloadTableGitHub({
          isLoading: false,
          isSuccess: true,
          isFailure: false,
          releases: gitHubData,
        });
      } else {
        throw new Error(gitHubData.toString());
      }
    } catch (error) {
      setStateDownloadTableGitHub({
        apiStatus: error instanceof Error ? (+(error?.message) || 500) : 500,
        isLoading: false,
        isSuccess: false,
        isFailure: true,
      });
    }
  }, []);

  useEffect(() => {
    if (stateDownloadTableGitHub.isLoading) {
      getGitHubAllReleasesAsync();
    }
  }, [stateDownloadTableGitHub, getGitHubAllReleasesAsync]);
  // Get All Releases from GitHub: end

  return (
    <div className={styles.table}>
      <div className={styles.table__head}>
        <IconDownload className={styles.table__head__icon} />
        <h1 className={styles.table__head__title}>{_dbDownloadTable?.title}</h1>
        <p className={styles.table__head__description}>{_dbDownloadTable?.description}</p>
      </div>
      <div className={styles.table__body}>
        <div className={[
          `${styles.table__body__item}`,
          `${styles['table__body__item--head']}`,
        ].join(' ').trim()}>
          <div className={[
            `${styles.table__body__item__col}`,
            `${styles['table__body__item__col--version']}`,
          ].join(' ').trim()}>
            <span>{_dbDownloadTable?.version}</span>
          </div>
          <div className={[
            `${styles.table__body__item__col}`,
            `${styles['table__body__item__col--notes']}`,
          ].join(' ').trim()}>
            <span>{_dbDownloadTable?.releaseNotes}</span>
          </div>
          <div className={[
            `${styles.table__body__item__col}`,
            `${styles['table__body__item__col--date']}`,
          ].join(' ').trim()}>
            <span>{_dbDownloadTable?.releaseDate}</span>
          </div>
          <div className={[
            `${styles.table__body__item__col}`,
            `${styles['table__body__item__col--download']}`,
          ].join(' ').trim()}>
            <span>{_dbDownloadTable?.download}</span>
          </div>
        </div>

        {
          stateDownloadTableGitHub.isLoading &&
          stateDownloadTableGitHub.placeholder?.map((_, index) => (
            <div key={index} className={[
              `${styles.table__body__item}`,
              `${styles['table__body__item--placeholder']}`,
            ].join(' ').trim()}></div>
          ))
        }

        {
          stateDownloadTableGitHub.isFailure &&
          <div className={styles.table__body__failure}>
            <IconFailure className={styles.table__body__failure__icon} />
            <p className={styles.table__body__failure__message}>{stateDownloadTableGitHub.apiStatus === 403 ? _dbDownloadTable?.restricted : _dbDownloadTable?.failure}</p>
            <a
              className={styles.table__body__failure__link}
              href={_dbDownloadTable?.restrictedLinkUrl}
              target="_blank"
              rel="noreferrer"
            >
              <IconGitHub className={styles.table__body__failure__link__icon} />
              <span>{_dbDownloadTable?.restrictedLinkText}</span>
            </a>
          </div>
        }

        {
          stateDownloadTableGitHub.isSuccess &&
          stateDownloadTableGitHub.releases?.map((release, index) => (
            <div
              key={index}
              className={[
                `${styles.table__body__item}`,
                `${index === 0 ? `${styles['table__body__item--latest']}` : ''} `,
              ].join(' ').trim()}
            >
              <div className={[
                `${styles.table__body__item__col}`,
                `${styles['table__body__item__col--version']}`,
              ].join(' ').trim()}>
                <span>{release?.versionName}</span>
                {
                  index === 0 &&
                  <span className={styles['table__body__item__col--version__latest']}>{_dbDownloadTable?.latestVersion}</span>
                }
              </div>
              <div
                className={[
                  `${styles.table__body__item__col}`,
                  `${styles['table__body__item__col--notes']}`,
                ].join(' ').trim()}
                dangerouslySetInnerHTML={{ __html: Marked.parse(release?.releaseNotesAsMarkdown) || '' }}
              ></div>
              <div className={[
                `${styles.table__body__item__col}`,
                `${styles['table__body__item__col--date']}`,
              ].join(' ').trim()}>
                <span>{release?.releaseDate}</span>
              </div>
              <div className={[
                `${styles.table__body__item__col}`,
                `${styles['table__body__item__col--download']}`,
              ].join(' ').trim()}>
                <a
                  href={release?.downloadUrl}
                  download
                  className={styles.table__body__item__col__link}
                >
                  <IconDownload className={styles.table__body__item__col__link__icon} />
                  <span>{release?.downloadName}</span>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default DownloadTable;
