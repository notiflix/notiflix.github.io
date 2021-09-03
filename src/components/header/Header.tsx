import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMoreHorizontal as IconMenuOpen, FiX as IconMenuClose } from 'react-icons/fi';

import { attributes as _home } from '@database/pages/home.md';

import { constants } from '@application/constants';
import { routes } from '@application/routes';

import LogoNotiflix from '@components/logo/LogoNotiflix';
import HeaderMenu from '@components/header/partials/HeaderMenu';

import styles from '@components/header/Header.module.scss';

interface IHeader {
  classNamePrefix: string;
}

function Header({ classNamePrefix }: IHeader): JSX.Element {
  const { _dbMeta } = _home;

  const logoPathPage = routes.find(x => x.id === _dbMeta?.routeId)?.pathPage || '/';
  const logoPathAs = routes.find(x => x.id === _dbMeta?.routeId)?.pathAs || '/';

  // Sticky: begin
  const [stateScrollTop, setStateScrollTop] = useState<number>(0);
  const documentScrollListener = (): void => {
    setStateScrollTop(Math.round(window.document.documentElement?.scrollTop || 0));
  };
  useEffect(() => {
    window.document.addEventListener('scroll', documentScrollListener);
    return () => {
      window.document.removeEventListener('scroll', documentScrollListener);
    };
  }, []);
  // Sticky: end

  // Mobile Menu Handler: begin
  const [stateMenuOpen, setStateMenuOpen] = useState<boolean>(false);
  const mobileMenuOnClickHandler = (toggle: boolean): void => {
    setStateMenuOpen(toggle);
  };
  // Mobile Menu Handler: end

  return (
    <header className={[
      `${styles.header}`,
      `${styles[`header--${classNamePrefix}`] || ''}`,
      `${stateScrollTop > 1 ? (styles[`header--sticky`] || '') : ''}`,
    ].join(' ').trim()}>
      <div className={styles.header__container}>

        <div className={styles.header__logo}>
          <Link href={logoPathPage} as={`${process.env.appUrl}${logoPathAs}`} passHref>
            <a
              onClick={() => mobileMenuOnClickHandler(false)}
              className={styles.header__logo__link}
            >
              <LogoNotiflix />
            </a>
          </Link>
        </div>

        <button
          aria-label={constants.app.text.menu}
          type="button"
          className={styles.header__menu__open}
          onClick={() => mobileMenuOnClickHandler(true)}
        >
          <IconMenuOpen />
        </button>

        <button
          aria-label={constants.app.text.close}
          type="button"
          className={[
            `${styles.header__menu__overlay}`,
            `${stateMenuOpen ? (styles['header__menu__overlay--opened'] || '') : ''}`,
          ].join(' ').trim()}
          onClick={() => mobileMenuOnClickHandler(false)}
        ></button>

        <div className={[
          `${styles.header__menu}`,
          `${stateMenuOpen ? (styles['header__menu--opened'] || '') : ''}`,
        ].join(' ').trim()}>
          <button
            aria-label={constants.app.text.close}
            type="button"
            className={styles.header__menu__close}
            onClick={() => mobileMenuOnClickHandler(false)}
          >
            <IconMenuClose />
          </button>
          <HeaderMenu mobileMenuOnClickHandler={mobileMenuOnClickHandler} />
        </div>

      </div>
    </header>
  );
}

export default Header;
