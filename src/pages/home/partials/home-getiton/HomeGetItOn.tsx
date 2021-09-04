import { Notify as NotiflixNotify } from 'notiflix';
import { FiCopy as IconCopy } from 'react-icons/fi';

import { attributes as _home } from '@database/pages/home.md';

import { constants } from '@application/constants';

import LogoYarn from '@components/logo/LogoYarn';
import LogoNPM from '@components/logo/LogoNPM';
import LogoGitHub from '@components/logo/LogoGitHub';

import styles from '@pages/home/partials/home-getiton/HomeGetItOn.module.scss';

function HomeGetItOn(): JSX.Element {
  const { _dbHomeGetItOn } = _home;

  const copyTextToTheClipboardOnClickHandler = (event: React.MouseEvent<HTMLSpanElement>): void => {
    if (event.target instanceof HTMLSpanElement) {
      event.preventDefault();
      const code = event.target.innerText;
      window.navigator.clipboard.writeText(code);
      NotiflixNotify.success(`${_dbHomeGetItOn?.clipboard}<br/><b>${code}</b>`, constants.app.libraryOptions.notify);
    }
  };

  return (
    <div className={styles.home__getiton}>
      <h2 className={styles.home__getiton__title}>{_dbHomeGetItOn?.title}</h2>
      <div className={styles.home__getiton__links}>
        <a
          aria-label={_dbHomeGetItOn?.yarn.title}
          className={styles.home__getiton__link}
          href={_dbHomeGetItOn?.yarn.url}
          target="_blank"
          rel="noreferrer"
        >
          <span
            className={styles.home__getiton__link__script}
            onClick={copyTextToTheClipboardOnClickHandler}
          >
            <span className={styles.home__getiton__link__script__copy}>
              <IconCopy className={styles.home__getiton__link__script__copy__icon} />
              <span>{constants.app.text.copy}</span>
            </span>
            {_dbHomeGetItOn?.yarn.script}
          </span>
          <LogoYarn className={styles.home__getiton__link__icon} />
        </a>
        <a
          aria-label={_dbHomeGetItOn?.npm.title}
          className={styles.home__getiton__link}
          href={_dbHomeGetItOn?.npm.url}
          target="_blank"
          rel="noreferrer"
        >
          <span
            className={styles.home__getiton__link__script}
            onClick={copyTextToTheClipboardOnClickHandler}
          >
            <span className={styles.home__getiton__link__script__copy}>
              <IconCopy className={styles.home__getiton__link__script__copy__icon} />
              <span>{constants.app.text.copy}</span>
            </span>
            {_dbHomeGetItOn?.npm.script}
          </span>
          <LogoNPM className={styles.home__getiton__link__icon} />
        </a>
        <a
          aria-label={_dbHomeGetItOn?.github.title}
          className={styles.home__getiton__link}
          href={_dbHomeGetItOn?.github.url}
          target="_blank"
          rel="noreferrer"
        >
          <LogoGitHub className={styles.home__getiton__link__icon} />
        </a>
      </div>
    </div>
  );
}

export default HomeGetItOn;
