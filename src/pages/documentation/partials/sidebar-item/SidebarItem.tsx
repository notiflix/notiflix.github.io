import { useState } from 'react';
import { FiPlus as IconPlus, FiMinus as IconMinus } from 'react-icons/fi';

import { IDatabaseDocumentationTableProductOptions } from '@database/database.i';

import { constants } from '@application/constants';
import { isHTMLElementVisible, windowScrollToElementBySelector } from '@application/helpers/utilities';

import styles from '@pages/documentation/partials/sidebar-item/SidebarItem.module.scss';

interface ISidebarItem {
  onClickHandlerMobileNavigation: (state: boolean) => void;
  dataTitleSuffix: string;
  dataNamespace: string;
  optionsCommon?: IDatabaseDocumentationTableProductOptions;
  optionsSuccess?: IDatabaseDocumentationTableProductOptions;
  optionsFailure?: IDatabaseDocumentationTableProductOptions;
  optionsWarning?: IDatabaseDocumentationTableProductOptions;
  optionsInfo?: IDatabaseDocumentationTableProductOptions;
}

function SidebarItem({
  onClickHandlerMobileNavigation,
  dataTitleSuffix,
  dataNamespace,
  optionsCommon,
  optionsSuccess,
  optionsFailure,
  optionsWarning,
  optionsInfo,
}: ISidebarItem): JSX.Element {
  const namespaceGlobal = constants.app.name;

  // Sidebar List Open/Close OnClick Handler: begin
  const [stateListIsOpened, setStateListIsOpened] = useState<boolean>(false);
  const buttonOnClickHandler = (toggle: boolean): void => {
    setStateListIsOpened(toggle);
    if (!stateListIsOpened) {
      windowScrollToElementBySelector({
        selector: `#${optionsCommon?.sectionId}`,
        headerFix: true,
        threshold: 20,
        isSmooth: true,
      });
      onClickHandlerMobileNavigation(false);
    }
  };
  // Sidebar List Open/Close OnClick Handler: end

  // Sidebar Scoll to Table by Item OnClick Handler: begin
  const listItemOnClickHandler = (event: React.MouseEvent<HTMLLIElement>): void => {
    if (event?.currentTarget instanceof HTMLLIElement) {
      const eventDataSelector = event?.currentTarget?.dataset?.selector || '';
      const targetSelector = `tr[data-selector="${eventDataSelector}"]`;
      const targetElement: HTMLTableElement | null = window.document.querySelector(targetSelector);

      if (targetElement) {
        let timeout = 0;
        if (!isHTMLElementVisible(targetElement)) {
          const targetModule = eventDataSelector.split('-')[0] || '';
          const targetTableViewButton: HTMLButtonElement | null = window.document.querySelector(`button[data-table-namespace="${targetModule}"]`);
          targetTableViewButton?.click();
          timeout = 500;
        }
        const delay = setTimeout(() => {
          windowScrollToElementBySelector({
            selector: targetSelector,
            headerFix: true,
            threshold: 32,
            isSmooth: true,
          });
          onClickHandlerMobileNavigation(false);
          clearTimeout(delay);
        }, timeout);
      }
    }
  };
  // Sidebar Scoll to Table by Item OnClick Handler: end

  return (
    <div className={styles.item}>

      <div className={styles.item__head}>
        <button
          type="button"
          onClick={() => buttonOnClickHandler(!stateListIsOpened)}
          className={[
            `${styles.item__head__button}`,
            `${stateListIsOpened ? `${styles['item__head__button--active'] || ''}` : ''}`,
          ].join(' ').trim()}
        >
          <span className={styles.item__head__button__text}>{`${namespaceGlobal} ${dataNamespace}${dataTitleSuffix}`}</span>
          {
            stateListIsOpened ?
              <IconMinus className={styles.item__head__button__icon} />
              :
              <IconPlus className={styles.item__head__button__icon} />
          }
        </button>
      </div>

      <ul
        className={[
          `${styles.item__list}`,
          `${stateListIsOpened ? `${styles['item__list--active'] || ''}` : ''}`,
        ].join(' ').trim()}
      >
        <li className={[
          `${styles.item__list__li}`,
          `${styles['item__list__li--title'] || ''}`,
        ].join(' ').trim()}>{optionsCommon?.sectionTitle}</li>
        {
          optionsCommon?.options?.map((option, index) => (option &&
            <li
              key={index}
              data-selector={`${dataNamespace}-${optionsCommon?.sectionType}-${option?.name}`}
              onClick={(event: React.MouseEvent<HTMLLIElement>) => listItemOnClickHandler(event)}
              className={styles.item__list__li}
            >
              <span className={styles.item__list__li__text}>{option?.name}</span>
            </li>
          ))
        }
        {
          (optionsSuccess || optionsFailure || optionsWarning || optionsInfo) && [
            optionsSuccess,
            optionsFailure,
            optionsWarning,
            optionsInfo,
          ].map((optionsGroup, index) => (optionsGroup &&
            <li
              key={index}
              className={[
                `${styles.item__list__li}`,
                `${styles['item__list__li--group'] || ''}`,
              ].join(' ').trim()}
            >
              <ul
                className={[
                  `${styles.item__list}`,
                  `${styles['item__list--secondary'] || ''}`,
                ].join(' ').trim()}
              >
                <li className={[
                  `${styles.item__list__li}`,
                  `${styles['item__list__li--title'] || ''}`,
                ].join(' ').trim()}>{optionsGroup?.sectionTitle}</li>
                {
                  optionsGroup?.options?.map((option, index) => (option &&
                    <li
                      key={index}
                      data-selector={`${dataNamespace}-${optionsGroup?.sectionType}-${option?.name}`}
                      onClick={(event: React.MouseEvent<HTMLLIElement>) => listItemOnClickHandler(event)}
                      className={styles.item__list__li}
                    >
                      <span className={styles.item__list__li__text}>{option?.name}</span>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default SidebarItem;
