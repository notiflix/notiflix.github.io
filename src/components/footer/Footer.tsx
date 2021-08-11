import { FaGithub as IconGitHub } from 'react-icons/fa';

import { attributes as _settings } from '@database/settings/settings.md';

import { Constants } from '@constants/Constants';

import Logo from '@components/logo/Logo';

import styles from '@components/footer/Footer.module.scss';

function Footer(): JSX.Element {
  const { _dbSettings } = _settings;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content__top}>
          <div className={styles.footer__content__top__logo}>
            <Logo className={styles.footer__content__top__logo__svg} colorNoti={'currentColor'} colorFlix={'currentColor'} />
          </div>
          <div className={styles.footer__content__top__menu}>
            {/* TODO: Footer Menu from Routes.ts */}
          </div>
        </div>
        <div className={styles.footer__content__bottom}>
          <p className={styles.footer__content__bottom__copyright}>&copy; {_dbSettings?.metaYearInit} - {new Date().getFullYear()} {Constants.app.name}. {_dbSettings?.metaCopyright}</p>
          <a href={_dbSettings?.footerGitHubUrl} target="_blank" rel="noreferrer" className={styles.footer__content__bottom__link}>
            <IconGitHub className={styles.footer__content__bottom__link__icon} />
            <span>{_dbSettings?.footerGitHubName}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
