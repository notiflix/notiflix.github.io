import { FaGithub as IconGitHub } from 'react-icons/fa';

import { attributes as _appMeta } from '@database/app/meta.md';
import { attributes as _appContent } from '@database/app/content.md';

import { constants } from '@application/constants';

import LogoNotiflix from '@components/logo/LogoNotiflix';
import FooterMenu from '@components/footer/partials/FooterMenu';

import styles from '@components/footer/Footer.module.scss';

function Footer(): JSX.Element {
  const { _dbAppMeta } = _appMeta;
  const { _dbAppContent } = _appContent;

  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.contentTop}>
          <div className={styles.logo}>
            <LogoNotiflix className={styles.logoSVG} colorNoti={'currentColor'} colorFlix={'currentColor'} />
          </div>
          <div className={styles.menu}>
            <FooterMenu />
          </div>
        </div>

        <div className={styles.contentBottom}>
          <p
            className={styles.copyright}
            dangerouslySetInnerHTML={{
              __html: `&copy; ${_dbAppMeta?.metaYearInit} - ${new Date().getFullYear()} ${constants.app.name}. ${_dbAppMeta?.metaCopyright} <br/>${_dbAppContent?.footer?.appVersion} ${constants.app.version}`,
            }}
          ></p>
          <a
            href={_dbAppContent?.footer?.gitHubUrl}
            target="_blank" rel="noreferrer"
            className={styles.link}
          >
            <IconGitHub className={styles.linkIcon} />
            <span>{_dbAppContent?.footer?.gitHubName}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
