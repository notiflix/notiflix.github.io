import { FaGithub as IconGitHub } from 'react-icons/fa';

import { attributes as _appContent } from '@database/app/content.md';

import styles from '@components/layout/partials/internet-explorer/InternetExplorer.module.scss';

function InternetExplorer(): JSX.Element {
  const { _dbAppContent } = _appContent;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{_dbAppContent?.browsers?.ieTitle}</h2>
      <p className={styles.description}>{_dbAppContent?.browsers?.ieDescription}</p>
      <a
        className={styles.link}
        href={_dbAppContent?.browsers?.ieLinkUrl}
        target="_blank"
        rel="noreferrer"
      >
        <IconGitHub className={styles.linkIcon} />
        <span>{_dbAppContent?.browsers?.ieLinkText}</span>
      </a>
    </div>
  );
}

export default InternetExplorer;
