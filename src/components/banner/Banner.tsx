import { FiTerminal as IconFallback } from 'react-icons/fi';

import { IDatabaseNotifyBanner } from '@database/database.i';

import { constants } from '@application/constants';

import styles from '@components/banner/Banner.module.scss';

interface IBanner {
  classNamePrefix: string;
  content?: IDatabaseNotifyBanner;
  IconComponent?: React.FC;
}

function Banner({ classNamePrefix, content, IconComponent }: IBanner): JSX.Element {
  const Icon = IconComponent || IconFallback;

  return (
    <div className={[
      `${styles.banner}`,
      `${styles[`banner--${classNamePrefix}`] || ''}`,
    ].join(' ').trim()}>
      <div className={styles.banner__container}>

        <div className={styles.banner__content}>
          <Icon className={styles.banner__content__icon} />
          <h1 className={styles.banner__content__title}>{content?.title}</h1>
          <p className={styles.banner__content__description}>{content?.description}</p>
          <div className={styles.banner__content__code}>
            <h2 className={styles.banner__content__subtitle}>{content?.importDescription}</h2>
            <code className="code code--large">
              <span className="code__l1">
                <span className="code__import">{`import `}</span>
                <span>{`{`}</span>
                <span className="code__attr">{` ${content?.importNamespace} `}</span>
                <span>{`}`}</span>
                <span className="code__import">{` from `}</span>
                <span className="code__string">{`'${constants.app.name.toLocaleLowerCase('en')}'`}</span>
                <span>{`;`}</span>
              </span>
            </code>
            <h2 className={styles.banner__content__subtitle}>{content?.htmlDescription}</h2>
            <code className="code code--medium code--html">
              <span className="code__l1 code__l1--pb0">
                <span className="code__comment code__comment--html">{`${content?.htmlOneByOne}`}</span>
              </span>
              <span className="code__l1 code__l1--pt0 code__l1--pb0">
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
              <span className="code__l1 code__l1--pt0">
                <span>{`<`}</span>
                <span className="code__const">{`script`}</span>
                <span className="code__attr">{` src`}</span>
                <span className="code__light">{`=`}</span>
                <span className="code__string">{`"${content?.htmlOneByOneJS}"`}</span>
                <span>{`></`}</span>
                <span className="code__const">{`script`}</span>
                <span>{`>`}</span>
              </span>

              <span className="code__l1 code__l1--pb0">
                <span className="code__comment code__comment--html">{`${content?.htmlAllInOne}`}</span>
              </span>
              <span className="code__l1 code__l1--pt0">
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

export default Banner;
