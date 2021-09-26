import { useLayoutEffect } from 'react';

import { attributes as _documentation } from '@database/pages/documentation.md';

import { windowScrollToElementById } from '@application/helpers/utilities';

import ContentSectionProduct from '@pages/documentation/partials/content-section-product/ContentSectionProduct';

import styles from '@pages/documentation/partials/content-section/ContentSection.module.scss';

function ContentSection(): JSX.Element {
  const { _dbDocsNotify } = _documentation;

  useLayoutEffect(() => {
    if (window.location.hash) {
      windowScrollToElementById(window.location.hash, true, true, true);
    }
  }, []);

  return (
    <div className={styles.section}>
      <ContentSectionProduct data={_dbDocsNotify} />
    </div>
  );
}

export default ContentSection;
