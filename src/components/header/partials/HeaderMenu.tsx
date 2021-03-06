import Link from 'next/link';

import { attributes as _appContent } from '@database/app/content.md';

import { constants } from '@application/constants';
import { routes } from '@application/routes';

import styles from '@components/header/partials/HeaderMenu.module.scss';
import { classNames } from '@application/helpers/utilities';

interface IHeaderMenu {
  mobileMenuOnClickHandler: (toggle: boolean) => void;
}

function HeaderMenu({ mobileMenuOnClickHandler }: IHeaderMenu): JSX.Element {
  const { _dbAppContent } = _appContent;

  return (
    <nav className={styles.root}>
      <ul className={styles.ul}>
        {
          routes
            ?.filter(route => route?.isActive && route?.showInHeaderMenu)
            ?.sort((x, y) => x?.sortOrder - y?.sortOrder)
            ?.map(route => {
              return (
                <li
                  key={route?.id}
                  className={styles.li}
                >
                  <Link href={route?.pathPage} as={`${process.env.appUrl}${route?.pathAs}`} passHref prefetch={route?.prefetch}>
                    <a
                      onClick={() => mobileMenuOnClickHandler(false)}
                      target={route?.isTargetBlank ? '_blank' : undefined}
                      className={classNames(styles.a, {
                        [styles.isProductPage]: route?.isProductPage,
                      })}
                    >
                      {route?.IconComponent && <route.IconComponent />}
                      <span aria-label={`${constants.app.name} ${route?.name} ${_dbAppContent?.buttons?.module}`}>{route?.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })
        }
      </ul>
    </nav>
  );
}

export default HeaderMenu;
