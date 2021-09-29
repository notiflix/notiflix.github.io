import { useEffect, useState } from 'react';
import { FiList as IconNavigation, FiX as IconClose } from 'react-icons/fi';

import { attributes as _appContent } from '@database/app/content.md';
import { attributes as _documentation } from '@database/pages/documentation.md';

import SidebarItem from '@pages/documentation/partials/sidebar-item/SidebarItem';

import styles from '@pages/documentation/partials/sidebar/Sidebar.module.scss';

function Sidebar(): JSX.Element {
  const { _dbAppContent } = _appContent;
  const {
    _dbDocsTableCommon,
    _dbDocsTableNotify,
    _dbDocsTableReport,
    _dbDocsTableConfirm,
    _dbDocsTableLoading,
    _dbDocsTableBlock,
  } = _documentation;

  // Sidebar Navigation Mobile OnClick Handler: begin
  const [stateSidebarMobileIsOpened, setStateSidebarMobileIsOpened] = useState<boolean>(false);
  const buttonSidebarMobileOnClickHandler = (toggle: boolean): void => {
    setStateSidebarMobileIsOpened(toggle);
  };
  // Sidebar Navigation Mobile OnClick Handler: end

  // Sticky: begin
  const [stateIsSticky, setStateIsSticky] = useState<boolean>(false);
  const documentScrollListener = (): void => {
    setStateIsSticky(window.document.documentElement?.scrollTop > 10);
  };
  useEffect(() => {
    window.document.addEventListener('scroll', documentScrollListener);
    return () => {
      window.document.removeEventListener('scroll', documentScrollListener);
    };
  }, []);
  // Sticky: end

  return (
    <>
      <div className={[
        `${styles.sidebar__navigation}`,
        `${stateIsSticky ? `${styles['sidebar__navigation--sticky'] || ''}` : ''}`,
        ``,
      ].join(' ').trim()}>
        <button
          type="button"
          onClick={() => buttonSidebarMobileOnClickHandler(!stateSidebarMobileIsOpened)}
          className={styles.sidebar__navigation__button}
        >
          <IconNavigation className={styles.sidebar__navigation__button__icon} />
          <span className={styles.sidebar__navigation__button__text}>{_dbAppContent?.buttons?.navigation}</span>
        </button>
      </div>

      <div className={[
        `${styles.sidebar}`,
        `${stateSidebarMobileIsOpened ? `${styles['sidebar--mobile'] || ''}` : ''}`,
      ].join(' ').trim()}>

        <h3 className={styles.sidebar__title}>
          <IconNavigation className={styles.sidebar__title__icon} />
          <span className={styles.sidebar__title__text}>{_dbAppContent?.buttons?.navigation}</span>
        </h3>

        <button
          type="button"
          className={styles.sidebar__close}
          onClick={() => buttonSidebarMobileOnClickHandler(false)}
        >
          <IconClose className={styles.sidebar__close__icon} />
          <span className={styles.sidebar__close__text}>{_dbAppContent?.buttons?.close}</span>
        </button>

        <div className={styles.sidebar__content}>
          <SidebarItem
            onClickHandlerMobileNavigation={buttonSidebarMobileOnClickHandler}
            dataTitleSuffix={_dbDocsTableCommon?.titleSuffix || ''}
            dataNamespace={_dbDocsTableNotify?.namespace || ''}
            optionsCommon={_dbDocsTableNotify?.optionsCommon}
            optionsSuccess={_dbDocsTableNotify?.optionsSuccess}
            optionsFailure={_dbDocsTableNotify?.optionsFailure}
            optionsWarning={_dbDocsTableNotify?.optionsWarning}
            optionsInfo={_dbDocsTableNotify?.optionsInfo}
          />
          <SidebarItem
            onClickHandlerMobileNavigation={buttonSidebarMobileOnClickHandler}
            dataTitleSuffix={_dbDocsTableCommon?.titleSuffix || ''}
            dataNamespace={_dbDocsTableReport?.namespace || ''}
            optionsCommon={_dbDocsTableReport?.optionsCommon}
            optionsSuccess={_dbDocsTableReport?.optionsSuccess}
            optionsFailure={_dbDocsTableReport?.optionsFailure}
            optionsWarning={_dbDocsTableReport?.optionsWarning}
            optionsInfo={_dbDocsTableReport?.optionsInfo}
          />
          <SidebarItem
            onClickHandlerMobileNavigation={buttonSidebarMobileOnClickHandler}
            dataTitleSuffix={_dbDocsTableCommon?.titleSuffix || ''}
            dataNamespace={_dbDocsTableConfirm?.namespace || ''}
            optionsCommon={_dbDocsTableConfirm?.optionsCommon}
          />
          <SidebarItem
            onClickHandlerMobileNavigation={buttonSidebarMobileOnClickHandler}
            dataTitleSuffix={_dbDocsTableCommon?.titleSuffix || ''}
            dataNamespace={_dbDocsTableLoading?.namespace || ''}
            optionsCommon={_dbDocsTableLoading?.optionsCommon}
          />
          <SidebarItem
            onClickHandlerMobileNavigation={buttonSidebarMobileOnClickHandler}
            dataTitleSuffix={_dbDocsTableCommon?.titleSuffix || ''}
            dataNamespace={_dbDocsTableBlock?.namespace || ''}
            optionsCommon={_dbDocsTableBlock?.optionsCommon}
          />
        </div>

      </div>
    </>
  );
}

export default Sidebar;
