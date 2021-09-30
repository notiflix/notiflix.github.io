import { FiSearch as IconSearch, FiChevronRight as IconArrowRight } from 'react-icons/fi';

import { attributes as _documentation } from '@database/pages/documentation.md';
import { IDatabaseDocumentationTableProductOptions, IDatabaseDocumentationTableCommonViewTableHead } from '@database/database.i';

import { replaceBetweenCurlyBracesWithAData, createDocumentationCodeClassName, windowScrollToElementBySelector } from '@application/helpers/utilities';

import styles from '@pages/documentation/partials/content-search-area-results/ContentSearchAreaResults.module.scss';

interface IContentSearchAreaResults {
  searchTerm: string;
  searchCloseOnClickHandler: () => void;
  dataNamespace?: string;
  dataTableHead?: IDatabaseDocumentationTableCommonViewTableHead;
  dataOptions?: (IDatabaseDocumentationTableProductOptions | undefined)[];
}

function ContentSearchAreaResults({ searchTerm, searchCloseOnClickHandler, dataNamespace, dataTableHead, dataOptions }: IContentSearchAreaResults): JSX.Element {
  const { _dbDocsSearch } = _documentation;

  // Mapped Results by Search Term: begin
  const mappedSearchResults = dataOptions?.map((optionGroup) => {
    const relatedOptions = optionGroup?.options?.filter(x => x?.name.includes(searchTerm) || x?.description.includes(searchTerm));
    if (relatedOptions && relatedOptions?.length > 0) {
      return {
        title: optionGroup?.sectionTitle,
        type: optionGroup?.sectionType,
        options: relatedOptions,
      };
    }
    return undefined;
  }).filter(x => x);
  // Mapped Results by Search Term: end

  // Results: Scoll to Table by Item OnClick Handler: begin
  const buttonMoreOnClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event?.currentTarget instanceof HTMLButtonElement) {
      const targetSelector = event?.currentTarget?.dataset?.selector || '';
      windowScrollToElementBySelector({
        selector: `tr[data-selector="${targetSelector}"]`,
        headerFix: true,
        threshold: 25,
        isSmooth: true,
      });
      searchCloseOnClickHandler();
    }
  };
  // Results: Scoll to Table by Item OnClick Handler: end

  return (
    <div className={styles.results}>
      {
        (mappedSearchResults && mappedSearchResults?.length < 1) &&
        <div className={styles.results__notfound}>
          <IconSearch className={styles.results__notfound__icon} />
          <p className={styles.results__notfound__message}>{_dbDocsSearch?.resultsNotFound}</p>
        </div>
      }

      {
        (mappedSearchResults && mappedSearchResults?.length > 0) &&
        <div className={styles.results__wrapper}>
          <h2 className={styles.results__title}>{replaceBetweenCurlyBracesWithAData((_dbDocsSearch?.resultsTitle || ''), dataNamespace)}</h2>
          <div className={styles.results__content}>
            {
              mappedSearchResults?.map((results, resultsIndex) => (results &&
                <div
                  key={resultsIndex}
                  className={styles.results__group}
                >
                  <h3 className={[
                    `${styles.results__group__title}`,
                    `${styles[`results__group__title--${results?.type}`] || ''}`,
                  ].join(' ').trim()}>{results?.title}</h3>
                  <div className={styles.results__group__table}>
                    <table className={`table table--compact table--${results?.type}`}>
                      <thead className="table__thead">
                        <tr className="table__tr">
                          <th className="table__th">{dataTableHead?.option}</th>
                          <th className="table__th">{dataTableHead?.type}</th>
                          <th className="table__th">{dataTableHead?.defaultValue}</th>
                          <th className="table__th table__th--center">{dataTableHead?.description}</th>
                        </tr>
                      </thead>
                      <tbody className="table__tbody">
                        {
                          results?.options?.map((option, optionIndex) => (option &&
                            <tr
                              key={optionIndex}
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
                              <td className="table__td table__td--center">
                                <button
                                  type="button"
                                  data-selector={`${dataNamespace}-${results?.type}-${option?.name}`}
                                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => buttonMoreOnClickHandler(event)}
                                  className="table__td__button"
                                >
                                  <span className="table__td__button__text">{_dbDocsSearch?.resultsButtonMore}</span>
                                  <IconArrowRight className="table__td__button__icon" />
                                </button>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      }
    </div>
  );
}

export default ContentSearchAreaResults;
