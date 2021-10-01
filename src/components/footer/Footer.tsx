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
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content__top}>
          <div className={styles.footer__content__top__logo}>
            <LogoNotiflix className={styles.footer__content__top__logo__svg} colorNoti={'currentColor'} colorFlix={'currentColor'} />
          </div>
          <div className={styles.footer__content__top__menu}>
            <FooterMenu />
          </div>
        </div>
        <div className={styles.footer__content__bottom}>
          <p className={styles.footer__content__bottom__copyright} dangerouslySetInnerHTML={{ __html: `&copy; ${_dbAppMeta?.metaYearInit} - ${new Date().getFullYear()} ${constants.app.name}. ${_dbAppMeta?.metaCopyright}` }}></p>
          <a href={_dbAppContent?.footer?.gitHubUrl} target="_blank" rel="noreferrer" className={styles.footer__content__bottom__link}>
            <IconGitHub className={styles.footer__content__bottom__link__icon} />
            <span>{_dbAppContent?.footer?.gitHubName}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
