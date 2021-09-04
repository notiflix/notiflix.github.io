import Link from 'next/link';

import { constants } from '@application/constants';
import { routes } from '@application/routes';

import styles from '@components/header/partials/HeaderMenu.module.scss';

interface IHeaderMenu {
  mobileMenuOnClickHandler: (toggle: boolean) => void;
}

function HeaderMenu({ mobileMenuOnClickHandler }: IHeaderMenu): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        {routes?.filter(route => route.isActive && route.showInHeaderMenu)?.sort((x, y) => x.sortOrder - y.sortOrder)?.map(route => {
          return (
            <li key={route.id} className={styles.nav__ul__li}>
              <Link href={route.pathPage} as={`${process.env.appUrl}${route.pathAs}`} passHref>
                <a
                  aria-label={`${constants.app.name} ${route.name} ${constants.app.text.module}`}
                  onClick={() => mobileMenuOnClickHandler(false)}
                  target={route.isTargetBlank ? '_blank' : undefined}
                  className={[
                    `${styles.nav__ul__li__a}`,
                    `${route.isProductPage ? (styles[`nav__ul__li__a--product`] || '') : ''}`,
                  ].join(' ').trim()}
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
