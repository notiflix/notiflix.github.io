import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '@components/logo/Logo';

import styles from '@components/header/Header.module.scss';

interface IHeader {
  classNamePrefix: string;
}

function Header({ classNamePrefix }: IHeader): JSX.Element {
  // Sticky: begin
  const [scrollTop, setScrollTop] = useState<number>(0);

  const documentScrollListener = (): void => {
    setScrollTop(Math.round(window.document.scrollingElement?.scrollTop || 0));
  };

  useLayoutEffect(() => {
    window.document.addEventListener('scroll', documentScrollListener);
    return () => {
      window.document.removeEventListener('scroll', documentScrollListener);
    };
  }, []);
  // Sticky: end

  return (
    <header className={`${styles.header} ${styles[`header--${classNamePrefix}`] || ''} ${scrollTop > 1 ? (styles[`header--sticky`] || '') : ''}`}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href={'/'} passHref>
            <a className={styles.header__logo__link}>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={styles.header__menu}>
          <p>TODO: nav menu</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
