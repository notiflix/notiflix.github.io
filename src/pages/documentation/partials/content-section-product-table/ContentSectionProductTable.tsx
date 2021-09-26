import { IDatabaseDocumentationProductOptions, IDatabaseDocumentationProductTableHead } from '@database/database.i';

import styles from '@pages/documentation/partials/content-section-product-table/ContentSectionProductTable.module.scss';

interface IContentSectionProductTable {
  id?: string;
  tableHead?: IDatabaseDocumentationProductTableHead;
  data?: IDatabaseDocumentationProductOptions;
}

function ContentSectionProductTable({ id, tableHead, data }: IContentSectionProductTable): JSX.Element {
  return (
    <div
      id={id}
      className={[
        `${styles.table}`,
        `${styles[`table--${data?.sectionType}`] || ''}`,
      ].join(' ').trim()}
    >
      <h3 className={styles.table__title}>{data?.sectionTitle}</h3>
      <div className={styles.table__content}>
        <table className={`table table--${data?.sectionType}`}>
          <thead className="table__thead">
            <tr className="table__tr">
              <th className="table__th">{tableHead?.option}</th>
              <th className="table__th">{tableHead?.type}</th>
              <th className="table__th">{tableHead?.defaultValue}</th>
              <th className="table__th">{tableHead?.description}</th>
            </tr>
          </thead>
          <tbody className="table__tbody">
            {
              data?.options?.map((option, index) => (option &&
                <tr key={index} className="table__tr">
                  <td className="table__td table__td--option">
                    <span>{option?.name}</span>
                  </td>
                  <td className="table__td table__td--type">
                    <span className={`table__td--${option?.type}`}>{option?.type}</span>
                  </td>
                  <td className="table__td table__td--default">
                    <span className={`table__td--${option?.type}`}>{option?.defaultValue}</span>
                  </td>
                  <td className="table__td table__td--description" dangerouslySetInnerHTML={{ __html: option?.description || '' }}></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentSectionProductTable;