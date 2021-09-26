import { useState } from 'react';
import { HiOutlineTable as IconTable } from 'react-icons/hi';
import { FiCode as IconCode } from 'react-icons/fi';

import { IDatabaseDocumentationProduct, IDatabaseDocumentationProductNotify, IDatabaseDocumentationProductReport } from '@database/database.i';

import { constants } from '@application/constants';

import ContentSectionProductTable from '@pages/documentation/partials/content-section-product-table/ContentSectionProductTable';

import styles from '@pages/documentation/partials/content-section-product/ContentSectionProduct.module.scss';

interface IContentSectionProduct {
  data?: IDatabaseDocumentationProduct | IDatabaseDocumentationProductNotify | IDatabaseDocumentationProductReport;
}

function ContentSectionProduct({ data }: IContentSectionProduct): JSX.Element {
  const namespaceGlobal = constants.app.name;

  // Switch To Code View: begin
  const [stateViewAsCode, setStateViewAsCode] = useState<boolean>(false);
  const switchToCodeViewOnClickHandler = (isCodeView: boolean): void => {
    setStateViewAsCode(isCodeView);
  };
  // Switch To Code View: end

  return (
    <div id={data?.optionsCommon?.sectionId} className={styles.product}>

      <div className={styles.product__head}>
        <h2
          className={styles.product__head__title}
          dangerouslySetInnerHTML={{ __html: data?.title || '' }}
        ></h2>
        <p
          className={styles.product__head__description}
          dangerouslySetInnerHTML={{ __html: data?.description || '' }}
        ></p>
      </div>

      <div className={styles.product__nav}>
        <button
          type="button"
          onClick={() => switchToCodeViewOnClickHandler(false)}
          className={[
            `${styles.product__nav__button}`,
            `${!stateViewAsCode ? `${styles[`product__nav__button--active`] || ''}` : ''}`,
          ].join(' ').trim()}
        >
          <IconTable className={styles.product__nav__button__icon} />
          <span>{data?.viewTable}</span>
        </button>
        <button
          type="button"
          onClick={() => switchToCodeViewOnClickHandler(true)}
          className={[
            `${styles.product__nav__button}`,
            `${stateViewAsCode ? `${styles[`product__nav__button--active`] || ''}` : ''}`,
          ].join(' ').trim()}
        >
          <IconCode className={styles.product__nav__button__icon} />
          <span>{data?.viewCode}</span>
        </button>
      </div>

      <div className={styles.product__body}>
        <div className={[
          `${styles.product__tables}`,
          `${!stateViewAsCode ? `${styles['product__tables--active'] || ''}` : ''}`,
        ].join(' ').trim()}>
          <ContentSectionProductTable
            tableHead={data?.tableHead}
            data={data?.optionsCommon}
          />
          {
            (
              (data && 'optionsSuccess' in data) ||
              (data && 'optionsFailure' in data) ||
              (data && 'optionsWarning' in data) ||
              (data && 'optionsInfo' in data)
            ) && [
              data?.optionsSuccess,
              data?.optionsFailure,
              data?.optionsWarning,
              data?.optionsInfo,
            ].map((optionsGroup, index) => (optionsGroup &&
              <ContentSectionProductTable
                key={index}
                id={optionsGroup?.sectionId}
                tableHead={data?.tableHead}
                data={optionsGroup}
              />
            ))
          }
        </div>

        <div className={[
          `${styles.product__codes}`,
          `${stateViewAsCode ? `${styles['product__codes--active'] || ''}` : ''}`,
        ].join(' ').trim()}>

          {/* TODO: will be a component */}
          <div className={styles.product__code}>
            <code className="code code--medium">
              <span className="code__indent1 code__indent--pb0">
                <span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span>
                <span className="code__namespace">{data?.namespace}</span>
                <span>{`.`}</span>
                <span className="code__method">{data?.functionNameInit}</span>
                <span>{`({`}</span>
              </span>
              {
                data?.optionsCommon?.options?.map((option, index) => (option &&
                  <span key={index} className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`${option?.name}: `}</span>
                    <span className={`code__${option?.type}`}>{`${option?.type === 'string' ? `'${option?.defaultValue}'` : option?.defaultValue}`}</span>
                    <span>{`,`}</span>
                  </span>
                ))
              }
              {
                (
                  (data && 'optionsSuccess' in data) ||
                  (data && 'optionsFailure' in data) ||
                  (data && 'optionsWarning' in data) ||
                  (data && 'optionsInfo' in data)
                )
                &&
                [
                  data?.optionsSuccess,
                  data?.optionsFailure,
                  data?.optionsWarning,
                  data?.optionsInfo,
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

          {/* TODO: will be a component */}
          <div className={styles.product__code}>
            <h1>TODO: MERGE</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContentSectionProduct;
