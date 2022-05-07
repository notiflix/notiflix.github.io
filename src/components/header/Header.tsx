import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMoreHorizontal as IconMenuOpen, FiX as IconMenuClose } from 'react-icons/fi';

import { attributes as _appContent } from '@database/app/content.md';
import { attributes as _home } from '@database/pages/home.md';

import { constants } from '@application/constants';
import { routes } from '@application/routes';
import { classNames } from '@application/helpers/utilities';

import LogoNotiflix from '@components/logo/LogoNotiflix';
import HeaderMenu from '@components/header/partials/HeaderMenu';

import styles from '@components/header/Header.module.scss';

interface IHeader {
  classNamePrefix: string;
}

function Header({ classNamePrefix }: IHeader): JSX.Element {
  const { _dbAppContent } = _appContent;
  const { _dbPageMeta } = _home;

  const logoPathPage = routes.find(x => x?.id === _dbPageMeta?.routeId)?.pathPage || '/';
  const logoPathAs = routes.find(x => x?.id === _dbPageMeta?.routeId)?.pathAs || '/';

  // Sticky: begin
  const [stateIsSticky, setStateIsSticky] = useState<boolean>(false);
  const documentScrollListener = (): void => {
    setStateIsSticky(window.document.documentElement?.scrollTop > 10);
  };
  useEffect(() => {
    window.document.addEventListener('scroll', documentScrollListener);
    return () => {
      window.document.removeEventListener('scroll', documentScrollListener);
    };
  }, []);
  // Sticky: end

  // Mobile Menu Handler: begin
  const [stateIsMenuOpen, setStateIsMenuOpen] = useState<boolean>(false);
  const mobileMenuOnClickHandler = (toggle: boolean): void => {
    setStateIsMenuOpen(toggle);
  };
  // Mobile Menu Handler: end

  return (
    <header className={classNames(styles.root, styles[classNamePrefix], {
      [styles.isSticky]: stateIsSticky,
    })}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <Link href={logoPathPage} as={`${process.env.appUrl}${logoPathAs}`} passHref prefetch={false}>
            <a
              aria-label={constants.app.name}
              onClick={() => mobileMenuOnClickHandler(false)}
              className={styles.logoLink}
            >
              <LogoNotiflix />
            </a>
          </Link>
        </div>

        <button
          aria-label={_dbAppContent?.buttons?.menu}
          type="button"
          className={styles.menuButtonOpen}
          onClick={() => mobileMenuOnClickHandler(true)}
        >
          <IconMenuOpen />
        </button>

        <button
          aria-label={_dbAppContent?.buttons?.close}
          type="button"
          className={classNames(styles.menuButtonOverlay, {
            [styles.isOpen]: stateIsMenuOpen,
          })}
          onClick={() => mobileMenuOnClickHandler(false)}
        ></button>

        <div className={classNames(styles.menu, {
          [styles.isOpen]: stateIsMenuOpen,
        })}>
          <button
            aria-label={_dbAppContent?.buttons?.close}
            type="button"
            className={styles.menuButtonClose}
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
