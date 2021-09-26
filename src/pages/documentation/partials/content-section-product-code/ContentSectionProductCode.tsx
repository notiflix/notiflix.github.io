import { IDatabaseDocumentationTableProductOptions, IDatabaseDocumentationTableCommonViewCode } from '@database/database.i';

import { constants } from '@application/constants';
import { EProductId } from '@application/enumerations/product-id';

import styles from '@pages/documentation/partials/content-section-product-code/ContentSectionProductCode.module.scss';

interface IContentSectionProductCode {
  isInitFunction: boolean;
  productId: EProductId;
  dataNamespace: string;
  dataCommon?: IDatabaseDocumentationTableCommonViewCode;
  optionsCommon?: IDatabaseDocumentationTableProductOptions;
  optionsSuccess?: IDatabaseDocumentationTableProductOptions;
  optionsFailure?: IDatabaseDocumentationTableProductOptions;
  optionsWarning?: IDatabaseDocumentationTableProductOptions;
  optionsInfo?: IDatabaseDocumentationTableProductOptions;
}

function ContentSectionProductCode({
  isInitFunction,
  productId,
  dataNamespace,
  dataCommon,
  optionsCommon,
  optionsSuccess,
  optionsFailure,
  optionsWarning,
  optionsInfo,
}: IContentSectionProductCode): JSX.Element {
  const namespaceGlobal = constants.app.name;

  return (
    <div className={styles.code}>

      <div className={styles.code__head}>
        <h4 className={styles.code__head__title}>{`${namespaceGlobal}.${dataNamespace}.${isInitFunction ? dataCommon?.functionNameInit : dataCommon?.functionNameMerge}({});`}</h4>
        <p
          className={styles.code__head__description}
          dangerouslySetInnerHTML={{ __html: (isInitFunction ? dataCommon?.descriptionInit : dataCommon?.descriptionMerge) || '' }}
        ></p>
      </div>

      {
        isInitFunction &&
        <div className={styles.code__content}>
          <code className="code code--medium">
            <span className="code__indent1 code__indent--pb0">
              <span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span>
              <span className="code__namespace">{dataNamespace}</span>
              <span>{`.`}</span>
              <span className="code__method">{dataCommon?.functionNameInit}</span>
              <span>{`({`}</span>
            </span>
            {
              optionsCommon?.options?.map((option, index) => (option &&
                <span key={index} className="code__indent2 code__indent--py0">
                  <span className="code__attr">{`${option?.name}: `}</span>
                  <span className={`code__${option?.type}`}>{`${option?.type === 'string' ? `'${option?.defaultValue}'` : option?.defaultValue}`}</span>
                  <span>{`,`}</span>
                </span>
              ))
            }
            {
              (optionsSuccess || optionsFailure || optionsWarning || optionsInfo) && [
                optionsSuccess,
                optionsFailure,
                optionsWarning,
                optionsInfo,
              ].map((optionsGroup, index) => (optionsGroup &&
                <span key={index}>
                  <span className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`${optionsGroup?.sectionType}: `}</span>
                    <span>{`{`}</span>
                  </span>
                  {
                    optionsGroup?.options?.map((option, index) => (
                      <span key={index} className="code__indent3 code__indent--py0">
                        <span className="code__attr">{`${option?.name}: `}</span>
                        <span className={`code__${option?.type}`}>{`${option?.type === 'string' ? `'${option?.defaultValue}'` : option?.defaultValue}`}</span>
                        <span>{`,`}</span>
                      </span>
                    ))
                  }
                  <span className="code__indent2 code__indent--py0">
                    <span>{`},`}</span>
                  </span>
                </span>
              ))
            }
            <span className="code__indent1 code__indent--pt0">
              <span>{`});`}</span>
            </span>
          </code>
        </div>
      }

      {
        !isInitFunction &&
        <div className={styles.code__content}>
          <div className={[
            `${styles.code__content__scope}`,
            `${styles['code__content__scope--webapp']}`,
          ].join(' ').trim()}>
            <h5 className={styles.code__content__scope__title}>{dataCommon?.scopeWebApp}</h5>

            <div className={[
              `${styles.code__content__scope}`,
              `${styles['code__content__scope--global']}`,
            ].join(' ').trim()}>
              <h5 className={styles.code__content__scope__title}>{dataCommon?.scopeGlobal}</h5>
              <div className={styles.code__content__scope__code}>
                <code className="code code--medium">
                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span>
                    <span className="code__namespace">{dataNamespace}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{dataCommon?.functionNameInit}</span>
                    <span>{`({`}</span>
                  </span>

                  {productId === EProductId.NOTIFY &&
                    <>
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`width: `}</span>
                        <span className="code__string">{`'300px'`}</span>
                        <span>{`,`}</span>
                      </span>
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`position: `}</span>
                        <span className="code__string">{`'right-bottom'`}</span>
                        <span>{`,`}</span>
                      </span>
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`closeButton: `}</span>
                        <span className="code__boolean">{`false`}</span>
                        <span>{`,`}</span>
                      </span>
                    </>
                  }

                  {productId === EProductId.REPORT &&
                    <>
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`width: `}</span>
                        <span className="code__string">{`'300px'`}</span>
                        <span>{`,`}</span>
                      </span>
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`messageMaxLength: `}</span>
                        <span className="code__number">{`1923`}</span>
                        <span>{`,`}</span>
                      </span>
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`plainText: `}</span>
                        <span className="code__boolean">{`true`}</span>
                        <span>{`,`}</span>
                      </span>
                    </>
                  }

                  <span className="code__indent1 code__indent--pt0">
                    <span>{`});`}</span>
                  </span>
                </code>
              </div>

              <div className={[
                `${styles.code__content__scope}`,
                `${styles['code__content__scope--component']}`,
              ].join(' ').trim()}>
                <h5 className={styles.code__content__scope__title}>{dataCommon?.scopeComponent}</h5>
                <div className={styles.code__content__scope__code}>
                  <code className="code code--medium">
                    <span className="code__indent1 code__indent--pb0">
                      <span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span>
                      <span className="code__namespace">{dataNamespace}</span>
                      <span>{`.`}</span>
                      <span className="code__method">{dataCommon?.functionNameMerge}</span>
                      <span>{`({`}</span>
                    </span>

                    {
                      productId === EProductId.NOTIFY &&
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`closeButton: `}</span>
                        <span className="code__boolean">{`true`}</span>
                        <span>{`,`}</span>
                      </span>
                    }

                    {
                      productId === EProductId.REPORT &&
                      <span className="code__indent2 code__indent--py0">
                        <span className="code__attr">{`plainText: `}</span>
                        <span className="code__boolean">{`false`}</span>
                        <span>{`,`}</span>
                      </span>
                    }

                    <span className="code__indent1 code__indent--pt0">
                      <span>{`});`}</span>
                    </span>
                  </code>
                </div>
              </div>
            </div>

          </div>
        </div>
      }
    </div>
  );
}

export default ContentSectionProductCode;
