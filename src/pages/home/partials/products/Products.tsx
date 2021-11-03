import Link from 'next/link';
import { FiTerminal as IconFallback, FiCornerDownRight as IconMore } from 'react-icons/fi';

import { attributes as _home } from '@database/pages/home.md';

import { routes } from '@application/routes';

import styles from '@pages/home/partials/products/Products.module.scss';

function Products(): JSX.Element {
  const { _dbHomeProducts } = _home;

  return (
    <div className={styles.products}>
      <div className={styles.products__container}>
        <div className={styles.products__content}>
          <h2 className={styles.products__title}>{_dbHomeProducts?.title}</h2>
          <div className={styles.products__list}>
            {_dbHomeProducts?.products
              ?.filter(product => routes.find(route => route?.id === product?.routeId)?.isActive)
              ?.sort((productX, productY) => (routes.find(route => route?.id === productX?.routeId)?.sortOrder || 0) - (routes.find(route => route?.id === productY?.routeId)?.sortOrder || 1))
              ?.map((product, index) => {
                const ProductIconComponent = routes.find(route => route?.id === product?.routeId)?.IconComponent || IconFallback;
                const productPathPage = routes.find(route => route?.id === product?.routeId)?.pathPage || '/';
                const productPathAs = routes.find(route => route?.id === product?.routeId)?.pathAs || '/';
                const productIsTargetBlank = routes.find(route => route?.id === product?.routeId)?.isTargetBlank;

                return (
                  <div key={index} className={styles.products__list__item}>
                    <div className={styles.products__list__item__content}>
                      <ProductIconComponent className={styles.products__list__item__icon} />
                      <h3 className={styles.products__list__item__title}>{product?.title}</h3>
                      <p className={styles.products__list__item__description}>{product?.description}</p>
                      <Link href={productPathPage} as={`${process.env.appUrl}${productPathAs}`} passHref prefetch={false}>
                        <a
                          target={productIsTargetBlank ? '_blank' : undefined}
                          className={styles.products__list__item__link}
                        >
                          <IconMore className={styles.products__list__item__link__icon} />
                          <span aria-label={product?.buttonLabel} className={styles.products__list__item__link__text}>{product?.button}</span>
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

export default Products;
