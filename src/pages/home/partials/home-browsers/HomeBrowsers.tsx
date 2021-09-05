import {
  ImChrome as IconChrome,
  ImFirefox as IconFirefox,
  ImSafari as IconSafari,
  ImOpera as IconOpera,
  ImEdge as IconEdgeLegacy,
  ImIe as IconIE,
} from 'react-icons/im';
import { SiMicrosoftedge as IconEdge } from 'react-icons/si';

import { attributes as _home } from '@database/pages/home.md';

import styles from '@pages/home/partials/home-browsers/HomeBrowsers.module.scss';

function HomeBrowsers(): JSX.Element {
  const { _dbHomeBrowsers } = _home;

  return (
    <div className={styles.home__browsers}>
      <h2 className={styles.home__browsers__title}>{_dbHomeBrowsers?.title}</h2>
      <div className={styles.home__browsers__list}>
        <div className={styles.home__browsers__list__item}>
          <IconChrome className={styles.home__browsers__list__item__icon} />
          <span className={styles.home__browsers__list__item__text}>{_dbHomeBrowsers?.chrome}</span>
        </div>
        <div className={styles.home__browsers__list__item}>
          <IconFirefox className={styles.home__browsers__list__item__icon} />
          <span className={styles.home__browsers__list__item__text}>{_dbHomeBrowsers?.firefox}</span>
        </div>
        <div className={styles.home__browsers__list__item}>
          <IconSafari className={styles.home__browsers__list__item__icon} />
          <span className={styles.home__browsers__list__item__text}>{_dbHomeBrowsers?.safari}</span>
        </div>
        <div className={styles.home__browsers__list__item}>
          <IconEdge className={styles.home__browsers__list__item__icon} />
          <span className={styles.home__browsers__list__item__text}>{_dbHomeBrowsers?.edge}</span>
        </div>
        <div className={styles.home__browsers__list__item}>
          <IconOpera className={styles.home__browsers__list__item__icon} />
          <span className={styles.home__browsers__list__item__text}>{_dbHomeBrowsers?.opera}</span>
        </div>
        <div className={styles.home__browsers__list__item}>
          <IconEdgeLegacy className={styles.home__browsers__list__item__icon} />
          <span className={styles.home__browsers__list__item__text}>{_dbHomeBrowsers?.edgeLegacy}</span>
        </div>
        <div className={styles.home__browsers__list__item}>
          <IconIE className={styles.home__browsers__list__item__icon} />
          <span className={styles.home__browsers__list__item__text}>{_dbHomeBrowsers?.ie}</span>
        </div>
      </div>
      <p className={styles.home__browsers__disclaimer}>{_dbHomeBrowsers?.disclaimer}</p>
    </div>
  );
}

export default HomeBrowsers;