import Logo from '@components/logo/Logo';

import styles from '@components/header/Header.module.scss';

interface IHeader {
  classNamePrefix: string;
}

function Header({ classNamePrefix }: IHeader): JSX.Element {
  return (
    <header className={`${styles.header} ${styles[`header--${classNamePrefix}`] || ''}`}>
      <div className={styles.header__logo}>
        <Logo />
      </div>
    </header>
  );
}

export default Header;
