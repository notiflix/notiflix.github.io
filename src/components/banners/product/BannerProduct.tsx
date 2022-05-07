import { FiTerminal as IconFallback } from 'react-icons/fi';

import { IDatabaseBannerProducts } from '@database/database.i';

import { routes } from '@application/routes';
import { classNames } from '@application/helpers/utilities';

import styles from '@components/banners/product/BannerProduct.module.scss';

interface IBannerProduct {
  classNamePrefix: string;
  routeId?: string;
  content?: IDatabaseBannerProducts;
}

function BannerProduct({ classNamePrefix, routeId, content }: IBannerProduct): JSX.Element {
  const IconComponent = routes.find(route => route?.id === routeId)?.IconComponent || IconFallback;

  return (
    <div className={classNames(styles.root, styles[classNamePrefix])}>
      <div className={styles.container}>

        <div className={styles.content}>
          <IconComponent className={styles.icon} />
          <h1 className={styles.title}>{content?.title}</h1>
          <p className={styles.description}>{content?.description}</p>
          <div className={styles.code}>
            <h2 className={styles.subtitle}>{content?.importDescription}</h2>
            <code className="code code--large">
              <span className="code__indent1">
                <span className="code__import">{`import `}</span>
                <span>{`{`}</span>
                <span className="code__attr">{` ${content?.importNamespace} `}</span>
                <span>{`}`}</span>
                <span className="code__import">{` from `}</span>
                <span className="code__string">{`'${content?.importPath}'`}</span>
                <span>{`;`}</span>
              </span>
            </code>
            <h2 className={styles.subtitle}>{content?.htmlDescription}</h2>
            <code className="code code--medium code--html">
              <span className="code__indent1 code__indent--pb0">
                <span className="code__comment code__comment--html">{`${content?.htmlOnlyThis}`}</span>
              </span>
              <span className="code__indent1 code__indent--pt0">
                <span>{`<`}</span>
                <span className="code__const">{`script`}</span>
                <span className="code__attr">{` src`}</span>
                <span className="code__light">{`=`}</span>
                <span className="code__string">{`"${content?.htmlOnlyThisJS}"`}</span>
                <span>{`></`}</span>
                <span className="code__const">{`script`}</span>
                <span>{`>`}</span>
              </span>

              <span className="code__indent1 code__indent--pb0">
                <span className="code__comment code__comment--html">{`${content?.htmlOneByOne}`}</span>
              </span>
              <span className="code__indent1 code__indent--py0">
                <span>{`<`}</span>
                <span className="code__const">{`link`}</span>
                <span className="code__attr">{` rel`}</span>
                <span className="code__light">{`=`}</span>
                <span className="code__string">{`"stylesheet"`}</span>
                <span className="code__attr">{` href`}</span>
                <span className="code__light">{`=`}</span>
                <span className="code__string">{`"${content?.htmlOneByOneCSS}"`}</span>
                <span>{` />`}</span>
              </span>
              <span className="code__indent1 code__indent--pt0">
                <span>{`<`}</span>
                <span className="code__const">{`script`}</span>
                <span className="code__attr">{` src`}</span>
                <span className="code__light">{`=`}</span>
                <span className="code__string">{`"${content?.htmlOneByOneJS}"`}</span>
                <span>{`></`}</span>
                <span className="code__const">{`script`}</span>
                <span>{`>`}</span>
              </span>

              <span className="code__indent1 code__indent--pb0">
                <span className="code__comment code__comment--html">{`${content?.htmlAllInOne}`}</span>
              </span>
              <span className="code__indent1 code__indent--pt0">
                <span>{`<`}</span>
                <span className="code__const">{`script`}</span>
                <span className="code__attr">{` src`}</span>
                <span className="code__light">{`=`}</span>
                <span className="code__string">{`"${content?.htmlAllInOneJS}"`}</span>
                <span>{`></`}</span>
                <span className="code__const">{`script`}</span>
                <span>{`>`}</span>
              </span>
            </code>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BannerProduct;
