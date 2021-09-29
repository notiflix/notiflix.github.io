import { useLayoutEffect } from 'react';

import { attributes as _documentation } from '@database/pages/documentation.md';

import { EProductId } from '@application/enumerations/product-id';
import { windowScrollToElementBySelector } from '@application/helpers/utilities';

import ContentSectionProduct from '@pages/documentation/partials/content-section-product/ContentSectionProduct';

import styles from '@pages/documentation/partials/content-section/ContentSection.module.scss';

function ContentSection(): JSX.Element {
  const {
    _dbDocsTableCommon,
    _dbDocsTableNotify,
    _dbDocsTableReport,
    _dbDocsTableConfirm,
    _dbDocsTableLoading,
    _dbDocsTableBlock,
  } = _documentation;

  useLayoutEffect(() => {
    if (window.location.hash) {
      windowScrollToElementBySelector({
        selector: window.location.hash,
        headerFix: true,
        clearHash: true,
      });
    }
  }, []);

  return (
    <div className={styles.section}>
      <ContentSectionProduct
        productId={EProductId.NOTIFY}
        dataCommon={_dbDocsTableCommon}
        dataProduct={_dbDocsTableNotify}
      />
      <ContentSectionProduct
        productId={EProductId.REPORT}
        dataCommon={_dbDocsTableCommon}
        dataProduct={_dbDocsTableReport}
      />
      <ContentSectionProduct
        productId={EProductId.CONFIRM}
        dataCommon={_dbDocsTableCommon}
        dataProduct={_dbDocsTableConfirm}
      />
      <ContentSectionProduct
        productId={EProductId.LOADING}
        dataCommon={_dbDocsTableCommon}
        dataProduct={_dbDocsTableLoading}
      />
      <ContentSectionProduct
        productId={EProductId.BLOCK}
        dataCommon={_dbDocsTableCommon}
        dataProduct={_dbDocsTableBlock}
      />
    </div>
  );
}

export default ContentSection;
