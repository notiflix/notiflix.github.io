import { useRef, useState } from 'react';
import { FiChevronDown as IconArrowDown } from 'react-icons/fi';

import { attributes as _content } from '@database/app/content.md';
import { attributes as _documentation } from '@database/pages/documentation.md';

import { EProductId, getProductNameAsString } from '@application/enumerations/product-id';

import ContentSearchAreaResults from '@pages/documentation/partials/content-search-area-results/ContentSearchAreaResults';

import styles from '@pages/documentation/partials/content-search-area/ContentSearchArea.module.scss';

function ContentSearchArea(): JSX.Element {
  const { _dbAppContent } = _content;
  const {
    _dbDocsSearch,
    _dbDocsTableCommon,
    _dbDocsTableNotify,
    _dbDocsTableReport,
    _dbDocsTableConfirm,
    _dbDocsTableLoading,
    _dbDocsTableBlock,
  } = _documentation;

  const [stateSearchTypeListIsOpened, setStateSearchTypeListIsOpened] = useState<boolean>(false);
  const [stateSearchType, setStateSearchType] = useState<EProductId>(EProductId.NOTIFY);
  const [stateSearchTerm, setStateSearchTerm] = useState<string>('');
  const refSearchInput = useRef<HTMLInputElement | null>(null);

  // Input: begin
  const searchInputDispatchKeyupEventHandler = (input: HTMLInputElement): void => {
    input.dispatchEvent(new Event('keyup', {
      bubbles: true,
    }));
  };

  const searchInputOnKeyupHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event?.currentTarget instanceof HTMLInputElement) {
      const searchTerm = (event?.currentTarget?.value || '').trim().toLocaleLowerCase('en');
      setStateSearchTerm(searchTerm);
    }
  };

  const searchResultsCloseButtonOnClickHandler = (): void => {
    setStateSearchTerm('');
    setStateSearchTypeListIsOpened(false);
  };
  // Input: end

  // Select: begin
  const selectButtonToggleSearchTypesOnClickHandler = (state: boolean): void => {
    setStateSearchTypeListIsOpened(state);
  };

  const selectButtonSetSearchTypeOnClickHandler = (productId: EProductId): void => {
    setStateSearchType(productId);
    setStateSearchTypeListIsOpened(false);
    if (refSearchInput.current) {
      searchInputDispatchKeyupEventHandler(refSearchInput.current);
    }
  };
  // Select: end

  return (
    <div className={styles.area}>
      <div className={styles.area__head}>
        <input
          ref={refSearchInput}
          type="text"
          onFocus={(event: React.FocusEvent<HTMLInputElement>) => searchInputDispatchKeyupEventHandler(event.currentTarget)}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => searchInputOnKeyupHandler(event)}
          className={styles.area__head__input}
          placeholder={_dbDocsSearch?.inputPlaceholder}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck="false"
          maxLength={_dbDocsSearch?.inputMaxLength}
        />
        <div className={[
          `${styles.area__head__select}`,
          `${stateSearchTypeListIsOpened ? `${styles['area__head__select--active'] || ''}` : ''}`,
        ].join(' ').trim()}>
          <button
            type="button"
            className={styles.area__head__select__value}
            onClick={() => selectButtonToggleSearchTypesOnClickHandler(true)}
          >
            <span className={styles.area__head__select__value__text}>
              <span className={styles.area__head__select__value__text__prefix}>{`${_dbDocsSearch?.selectPrefix} `}</span>
              <span className={styles.area__head__select__value__text__type}>{getProductNameAsString(stateSearchType)}</span>
            </span>
          </button>
          <IconArrowDown className={styles.area__head__select__icon} />

          <ul className={[
            `${styles.area__head__select__options}`,
            `${stateSearchTypeListIsOpened ? `${styles['area__head__select__options--active'] || ''}` : ''}`,
          ].join(' ').trim()}>
            {
              Object.keys(EProductId)?.map((product, index) => (
                <li
                  key={index}
                  className={styles.area__head__select__options__item}
                >
                  <button
                    type="button"
                    className={styles.area__head__select__options__button}
                    onClick={() => selectButtonSetSearchTypeOnClickHandler(product as EProductId)}
                  >
                    <span className={styles.area__head__select__options__button__text}>
                      <span className={styles.area__head__select__options__button__text__prefix}>{`${_dbDocsSearch?.selectPrefix} `}</span>
                      <span className={styles.area__head__select__options__button__text__type}>{getProductNameAsString(product)}</span>
                    </span>
                  </button>
                </li>
              ))
            }
          </ul>
          {
            stateSearchTypeListIsOpened &&
            <button
              aria-label={_dbAppContent?.buttons?.close}
              type="button"
              onClick={() => selectButtonToggleSearchTypesOnClickHandler(false)}
              className={styles.area__head__select__close}
            ></button>
          }
        </div>
      </div>

      <div className={styles.area__results}>
        {
          (stateSearchTerm?.length > 0) &&
          <>
            {
              stateSearchType === EProductId.NOTIFY &&
              <ContentSearchAreaResults
                searchTerm={stateSearchTerm}
                searchCloseOnClickHandler={searchResultsCloseButtonOnClickHandler}
                dataNamespace={_dbDocsTableNotify?.namespace}
                dataTableHead={_dbDocsTableCommon?.viewTable?.tableHead}
                dataOptions={[
                  _dbDocsTableNotify?.optionsCommon,
                  _dbDocsTableNotify?.optionsSuccess,
                  _dbDocsTableNotify?.optionsFailure,
                  _dbDocsTableNotify?.optionsWarning,
                  _dbDocsTableNotify?.optionsInfo,
                ]}
              />
            }
            {
              stateSearchType === EProductId.REPORT &&
              <ContentSearchAreaResults
                searchTerm={stateSearchTerm}
                searchCloseOnClickHandler={searchResultsCloseButtonOnClickHandler}
                dataNamespace={_dbDocsTableReport?.namespace}
                dataTableHead={_dbDocsTableCommon?.viewTable?.tableHead}
                dataOptions={[
                  _dbDocsTableReport?.optionsCommon,
                  _dbDocsTableReport?.optionsSuccess,
                  _dbDocsTableReport?.optionsFailure,
                  _dbDocsTableReport?.optionsWarning,
                  _dbDocsTableReport?.optionsInfo,
                ]}
              />
            }
            {
              stateSearchType === EProductId.CONFIRM &&
              <ContentSearchAreaResults
                searchTerm={stateSearchTerm}
                searchCloseOnClickHandler={searchResultsCloseButtonOnClickHandler}
                dataNamespace={_dbDocsTableConfirm?.namespace}
                dataTableHead={_dbDocsTableCommon?.viewTable?.tableHead}
                dataOptions={[_dbDocsTableConfirm?.optionsCommon]}
              />
            }
            {
              stateSearchType === EProductId.LOADING &&
              <ContentSearchAreaResults
                searchTerm={stateSearchTerm}
                searchCloseOnClickHandler={searchResultsCloseButtonOnClickHandler}
                dataNamespace={_dbDocsTableLoading?.namespace}
                dataTableHead={_dbDocsTableCommon?.viewTable?.tableHead}
                dataOptions={[_dbDocsTableLoading?.optionsCommon]}
              />
            }
            {
              stateSearchType === EProductId.BLOCK &&
              <ContentSearchAreaResults
                searchTerm={stateSearchTerm}
                searchCloseOnClickHandler={searchResultsCloseButtonOnClickHandler}
                dataNamespace={_dbDocsTableBlock?.namespace}
                dataTableHead={_dbDocsTableCommon?.viewTable?.tableHead}
                dataOptions={[_dbDocsTableBlock?.optionsCommon]}
              />
            }
          </>
        }
      </div>

      {
        (stateSearchTerm?.length > 0) &&
        <button
          aria-label={_dbAppContent?.buttons?.close}
          type="button"
          onClick={searchResultsCloseButtonOnClickHandler}
          className={styles.area__results__close}
        ></button>
      }
    </div>
  );
}

export default ContentSearchArea;
