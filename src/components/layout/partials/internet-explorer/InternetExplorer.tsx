import { FaGithub as IconGitHub } from 'react-icons/fa';

import { attributes as _appContent } from '@database/app/content.md';

import styles from '@components/layout/partials/internet-explorer/InternetExplorer.module.scss';

function InternetExplorer(): JSX.Element {
  const { _dbAppContent } = _appContent;

  return (
    <div className={styles.ie}>
      <h2 className={styles.ie__title}>{_dbAppContent?.browsers?.ieTitle}</h2>
      <p className={styles.ie__description}>{_dbAppContent?.browsers?.ieDescription}</p>
      <a
        className={styles.ie__link}
        href={_dbAppContent?.browsers?.ieLinkUrl}
        target="_blank"
        rel="noreferrer"
      >
        <IconGitHub className={styles.ie__link__icon} />
        <span>{_dbAppContent?.browsers?.ieLinkText}</span>
      </a>
    </div>
  );
}

export default InternetExplorer;
