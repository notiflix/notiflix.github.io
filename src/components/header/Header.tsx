import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMoreHorizontal as IconMenuOpen, FiX as IconMenuClose } from 'react-icons/fi';

import { attributes as _home } from '@database/pages/home.md';

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
  const logoPathAs = routes.find(x => x.id === _dbMeta?.routeId)?.pathPage || '/';

  // Sticky: begin
  const [scrollTop, setScrollTop] = useState<number>(0);

  const documentScrollListener = (): void => {
    setScrollTop(Math.round(window.document.documentElement?.scrollTop || 0));
  };

  useEffect(() => {
    window.document.addEventListener('scroll', documentScrollListener);
    return () => {
      window.document.removeEventListener('scroll', documentScrollListener);
    };
  }, []);
  // Sticky: end

  // Mobile Menu Handler: begin
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const headerMenuMobileClickHandler = (toggle: boolean): void => {
    setMenuOpen(toggle);
  };
  // Mobile Menu Handler: end

  return (
    <header className={[
      `${styles.header}`,
      `${styles[`header--${classNamePrefix}`] || ''}`,
      `${scrollTop > 1 ? (styles[`header--sticky`] || '') : ''}`,
    ].join(' ').trim()}>
      <div className={styles.header__container}>

        <div className={styles.header__logo}>
          <Link href={logoPathPage} as={`${process.env.appUrl}${logoPathAs}`} passHref>
            <a className={styles.header__logo__link}>
              <LogoNotiflix />
            </a>
          </Link>
        </div>

        <button type="button" className={styles.header__menu__open} onClick={() => headerMenuMobileClickHandler(true)}>
          <IconMenuOpen />
        </button>

        <button type="button" className={`${styles.header__menu__overlay} ${menuOpen ? (styles['header__menu__overlay--opened'] || '') : ''}`} onClick={() => headerMenuMobileClickHandler(false)}></button>

        <div className={`${styles.header__menu} ${menuOpen ? (styles['header__menu--opened'] || '') : ''}`}>
          <button type="button" className={styles.header__menu__close} onClick={() => headerMenuMobileClickHandler(false)}>
            <IconMenuClose />
          </button>
          <HeaderMenu />
        </div>

      </div>
    </header>
  );
}

export default Header;
