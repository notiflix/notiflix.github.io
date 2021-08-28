import Link from 'next/link';
import { routes } from '@application/routes';

import styles from '@components/header/partials/HeaderMenu.module.scss';

function HeaderMenu(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        {routes?.filter(route => route.isActive && route.showInHeaderMenu)?.sort((x, y) => x.sortOrder - y.sortOrder)?.map(route => {
          return (
            <li key={route.id} className={styles.nav__ul__li}>
              <Link href={route.pathPage} as={`${process.env.appUrl}${route.pathAs}`} passHref>
                <a
                  target={route.targetBlank ? '_blank' : undefined}
                  className={`${styles.nav__ul__li__a} ${route.isProduct ? (styles[`nav__ul__li__a--product`] || '') : ''}`}
                >
                  {route.IconComponent ? <route.IconComponent /> : ''}
                  <span>{route.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderMenu;
