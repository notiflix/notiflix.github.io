import Link from 'next/link';

import { attributes as _appContent } from '@database/app/content.md';

import { constants } from '@application/constants';
import { routes } from '@application/routes';

import styles from '@components/footer/partials/FooterMenu.module.scss';

function FooterMenu(): JSX.Element {
  const { _dbAppContent } = _appContent;

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        {routes?.filter(route => route?.isActive && route?.showInFooterMenu)?.sort((x, y) => x?.sortOrder - y?.sortOrder)?.map(route => {
          return (
            <li key={route?.id} className={styles.nav__ul__li}>
              <Link href={route?.pathPage} as={`${process.env.appUrl}${route?.pathAs}`} passHref prefetch={route?.prefetch}>
                <a
                  aria-label={`${constants.app.name} ${route?.name} ${_dbAppContent?.buttons?.module}`}
                  target={route?.isTargetBlank ? '_blank' : undefined}
                  className={[
                    `${styles.nav__ul__li__a}`,
                    `${route?.isProductPage ? (styles[`nav__ul__li__a--product`] || '') : ''}`,
                  ].join(' ').trim()}
                >
                  {route?.IconComponent && <route.IconComponent />}
                  <span>{route?.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FooterMenu;
