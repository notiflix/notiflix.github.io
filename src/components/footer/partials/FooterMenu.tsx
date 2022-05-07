import Link from 'next/link';

import { attributes as _appContent } from '@database/app/content.md';

import { constants } from '@application/constants';
import { routes } from '@application/routes';
import { classNames } from '@application/helpers/utilities';

import styles from '@components/footer/partials/FooterMenu.module.scss';

function FooterMenu(): JSX.Element {
  const { _dbAppContent } = _appContent;

  return (
    <nav className={styles.root}>
      <ul className={styles.ul}>
        {
          routes
            ?.filter(route => route?.isActive && route?.showInFooterMenu)
            ?.sort((x, y) => x?.sortOrder - y?.sortOrder)
            ?.map(route => {
              return (
                <li
                  key={route?.id}
                  className={styles.li}
                >
                  <Link href={route?.pathPage} as={`${process.env.appUrl}${route?.pathAs}`} passHref prefetch={route?.prefetch}>
                    <a
                      aria-label={`${constants.app.name} ${route?.name} ${_dbAppContent?.buttons?.module}`}
                      target={route?.isTargetBlank ? '_blank' : undefined}
                      className={classNames(styles.a, {
                        [styles.isProduct]: route?.isProductPage,
                      })}
                    >
                      {route?.IconComponent && <route.IconComponent />}
                      <span>{route?.name}</span>
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

export default FooterMenu;
