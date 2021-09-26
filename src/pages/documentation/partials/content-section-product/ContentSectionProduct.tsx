import { useState } from 'react';
import { HiOutlineTable as IconTable } from 'react-icons/hi';
import { FiCode as IconCode } from 'react-icons/fi';

import { IDatabaseDocumentationTableCommon, IDatabaseDocumentationTableProduct, IDatabaseDocumentationTableProductNotify, IDatabaseDocumentationTableProductReport } from '@database/database.i';

import { constants } from '@application/constants';
import { EProductId } from '@application/enumerations/product-id';

import ContentSectionProductTable from '@pages/documentation/partials/content-section-product-table/ContentSectionProductTable';
import ContentSectionProductCode from '@pages/documentation/partials/content-section-product-code/ContentSectionProductCode';

import styles from '@pages/documentation/partials/content-section-product/ContentSectionProduct.module.scss';

interface IContentSectionProduct {
  productId: EProductId;
  dataCommon?: IDatabaseDocumentationTableCommon;
  dataProduct?: IDatabaseDocumentationTableProduct | IDatabaseDocumentationTableProductNotify | IDatabaseDocumentationTableProductReport;
}

function ContentSectionProduct({ productId, dataCommon, dataProduct }: IContentSectionProduct): JSX.Element {
  const namespaceGlobal = constants.app.name;
  const namespaceProduct = dataProduct?.namespace;

  // Switch To Code View: begin
  const [stateViewAsCode, setStateViewAsCode] = useState<boolean>(false);
  const switchToCodeViewOnClickHandler = (isCodeView: boolean): void => {
    setStateViewAsCode(isCodeView);
  };
  // Switch To Code View: end

  return (
    <div id={dataProduct?.optionsCommon?.sectionId} className={styles.product}>

      <div className={styles.product__head}>
        <h2
          className={styles.product__head__title}
          dangerouslySetInnerHTML={{ __html: `${namespaceGlobal} ${namespaceProduct || ''} ${dataCommon?.titleSuffix || ''}` }}
        ></h2>
        <p
          className={styles.product__head__description}
          dangerouslySetInnerHTML={{ __html: dataCommon?.description || '' }}
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
          <span>{dataCommon?.viewTable?.button}</span>
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
          <span>{dataCommon?.viewCode?.button}</span>
        </button>
      </div>

      <div className={styles.product__body}>
        <div className={[
          `${styles.product__tables}`,
          `${!stateViewAsCode ? `${styles['product__tables--active'] || ''}` : ''}`,
        ].join(' ').trim()}>
          <ContentSectionProductTable
            tableHead={dataCommon?.viewTable?.tableHead}
            tableData={dataProduct?.optionsCommon}
          />
          {
            (
              (dataProduct && 'optionsSuccess' in dataProduct) ||
              (dataProduct && 'optionsFailure' in dataProduct) ||
              (dataProduct && 'optionsWarning' in dataProduct) ||
              (dataProduct && 'optionsInfo' in dataProduct)
            ) && [
              dataProduct?.optionsSuccess,
              dataProduct?.optionsFailure,
              dataProduct?.optionsWarning,
              dataProduct?.optionsInfo,
            ].map((optionsGroup, index) => (optionsGroup &&
              <ContentSectionProductTable
                key={index}
                id={optionsGroup?.sectionId}
                tableHead={dataCommon?.viewTable?.tableHead}
                tableData={optionsGroup}
              />
            ))
          }
        </div>

        <div className={[
          `${styles.product__codes}`,
          `${stateViewAsCode ? `${styles['product__codes--active'] || ''}` : ''}`,
        ].join(' ').trim()}>
          <ContentSectionProductCode
            isInitFunction={true}
            productId={productId}
            dataNamespace={dataProduct?.namespace || ''}
            dataCommon={dataCommon?.viewCode}
            optionsCommon={dataProduct?.optionsCommon}
            optionsSuccess={(dataProduct && 'optionsSuccess' in dataProduct) ? dataProduct?.optionsSuccess : undefined}
            optionsFailure={(dataProduct && 'optionsFailure' in dataProduct) ? dataProduct?.optionsFailure : undefined}
            optionsWarning={(dataProduct && 'optionsWarning' in dataProduct) ? dataProduct?.optionsWarning : undefined}
            optionsInfo={(dataProduct && 'optionsInfo' in dataProduct) ? dataProduct?.optionsInfo : undefined}
          />

          <ContentSectionProductCode
            isInitFunction={false}
            productId={productId}
            dataNamespace={dataProduct?.namespace || ''}
            dataCommon={dataCommon?.viewCode}
            optionsCommon={dataProduct?.optionsCommon}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentSectionProduct;
