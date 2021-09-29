import { IDatabaseDocumentationTableProductOptions, IDatabaseDocumentationTableCommonViewTableHead } from '@database/database.i';

import { createDocumentationCodeClassName } from '@application/helpers/utilities';

import styles from '@pages/documentation/partials/content-section-product-table/ContentSectionProductTable.module.scss';

interface IContentSectionProductTable {
  id?: string;
  namespace?: string;
  tableHead?: IDatabaseDocumentationTableCommonViewTableHead;
  tableData?: IDatabaseDocumentationTableProductOptions;
}

function ContentSectionProductTable({ id, namespace, tableHead, tableData }: IContentSectionProductTable): JSX.Element {
  return (
    <div
      id={id}
      className={[
        `${styles.table}`,
        `${styles[`table--${tableData?.sectionType}`] || ''}`,
      ].join(' ').trim()}
    >
      <h3 className={styles.table__title}>{tableData?.sectionTitle}</h3>
      <div className={styles.table__content}>
        <table className={`table table--${tableData?.sectionType}`}>
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
              tableData?.options?.map((option, index) => (option &&
                <tr
                  key={index}
                  data-selector={`${namespace}-${tableData?.sectionType}-${option?.name}`}
                  className={[
                    `table__tr`,
                    `${option?.version ? 'table__tr--new' : ''}`,
                  ].join(' ').trim()}
                >
                  <td className="table__td table__td--option">
                    <div className={[
                      `table__td__option`,
                      `${option?.version ? 'table__td__option--new' : ''}`,
                    ].join(' ').trim()}>
                      <span>{option?.name}</span>
                      {
                        option?.version &&
                        <span className="table__td__option__version">{option?.version}</span>
                      }
                    </div>
                  </td>
                  <td className="table__td table__td--type">
                    <span className={`table__td--${option?.type}`}>{option?.type}</span>
                  </td>
                  <td className="table__td table__td--default">
                    <span className={`table__td--${createDocumentationCodeClassName(option?.type, option?.defaultValue)}`}>{option?.defaultValue}</span>
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
