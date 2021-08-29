import Link from 'next/link';
import { FiTerminal as IconFallback, FiCornerDownRight as IconMore } from 'react-icons/fi';

import { attributes as _home } from '@database/pages/home.md';

import { routes } from '@application/routes';

import styles from '@pages/home/partials/home-modules/HomeModules.module.scss';

function HomeModules(): JSX.Element {
  const { _dbHomeModules } = _home;

  return (
    <div className={styles.home__modules}>
      <div className={styles.home__modules__container}>
        <div className={styles.home__modules__content}>
          <h2 className={styles.home__modules__title}>{_dbHomeModules?.title}</h2>
          <div className={styles.home__modules__list}>
            {_dbHomeModules?.modules
              ?.filter(module => routes.find(route => route.id === module.id)?.isActive)
              ?.sort((moduleX, moduleY) => (routes.find(route => route.id === moduleX.id)?.sortOrder || 0) - (routes.find(route => route.id === moduleY.id)?.sortOrder || 1))
              ?.map((module, index) => {
                const ModuleIconComponent = routes.find(route => route.id === module.id)?.IconComponent || IconFallback;
                const modulePathPage = routes.find(route => route.id === module.id)?.pathPage || '/';
                const modulePathAs = routes.find(route => route.id === module.id)?.pathAs || '/';
                const moduleIsTargetBlank = routes.find(route => route.id === module.id)?.isTargetBlank;

                return (
                  <div key={index} className={styles.home__modules__list__item}>
                    <div key={index} className={styles.home__modules__list__item__wrapper}>
                      <ModuleIconComponent className={styles.home__modules__list__item__icon} />
                      <h3 className={styles.home__modules__list__item__title}>{module.title}</h3>
                      <p className={styles.home__modules__list__item__description}>{module.description}</p>
                      <Link href={modulePathPage} as={`${process.env.appUrl}${modulePathAs}`} passHref>
                        <a
                          target={moduleIsTargetBlank ? '_blank' : undefined}
                          className={styles.home__modules__list__item__link}
                        >
                          <IconMore className={styles.home__modules__list__item__link__icon} />
                          <span className={styles.home__modules__list__item__link__text}>{module.button}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeModules;
