import { useRef, useState } from 'react';
import Link from 'next/link';
import { Loading as NotiflixLoading } from 'notiflix';
import { FiSettings as IconDocs } from 'react-icons/fi';

import { attributes as _appContent } from '@database/app/content.md';
import { attributes as _loading } from '@database/pages/loading.md';
import { TDatabaseLoadingIndicatorsFunctionNames } from '@database/database.i';

import { constants } from '@application/constants';
import { routes } from '@application/routes';
import { EPageId } from '@application/enumerations/page-id';
import { getLoadingIconsAsSrc } from '@application/enumerations/loading';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/loading/partials/playground/Playground.module.scss';

function Playground(): JSX.Element {
  const { _dbAppContent } = _appContent;
  const { _dbLoadingPlayground } = _loading;
  const namespaceGlobal = constants.app.name;
  const namespaceModule = _dbLoadingPlayground?.namespace;
  const pathPageDocs = routes.find(route => route?.id === EPageId.DOCUMENTATION)?.pathPage || '/';
  const pathAsDocs = routes.find(route => route?.id === EPageId.DOCUMENTATION)?.pathAs || '/';

  // Switch As Module: begin
  const [stateLoadingIsModule, setStateLoadingIsModule] = useState<boolean>(true);
  const switchAsAModuleOnClickHandler = (isAModule: boolean): void => {
    setStateLoadingIsModule(isAModule);
  };
  // Switch As Module: end

  // Demo Call NotiflixLoading Function by Method: begin
  const callNotiflixLoadingFunctionByMethod = (
    functionName: TDatabaseLoadingIndicatorsFunctionNames,
    message?: string,
  ): void => {
    NotiflixLoading[functionName](message, constants.app.libraryOptions.loading);
  };
  // Demo Call NotiflixLoading Function by Method: end

  // Demo Buttons OnClick Handler: begin
  const refDemoInput = useRef<HTMLInputElement | null>(null);
  const demoButtonsOnClickHandler = (functionName: TDatabaseLoadingIndicatorsFunctionNames): void => {
    const loadingMessage = refDemoInput.current?.value || '';
    callNotiflixLoadingFunctionByMethod(functionName, loadingMessage);
  };
  // Demo Buttons OnClick Handler: end

  return (
    <div className={styles.playground}>

      <div className={styles.playground__head}>
        <h2 className={styles.playground__head__title}>{_dbLoadingPlayground?.title}</h2>
        <button
          aria-label={_dbAppContent?.buttons?.switch}
          type="button"
          onClick={() => switchAsAModuleOnClickHandler(!stateLoadingIsModule)}
          className={[
            `${styles.playground__head__switch}`,
            `${styles[`playground__head__switch--${stateLoadingIsModule ? 'module' : 'global'}`] || ''}`,
          ].join(' ').trim()}
        >
          <span className={styles.playground__head__switch__text}>{stateLoadingIsModule ? _dbAppContent?.buttons?.module : _dbAppContent?.buttons?.global}</span>
        </button>
      </div>

      <div className={styles.playground__items}>

        {/* Indicators: begin */}
        <div
          className={[
            `${styles.playground__item}`,
            `${styles[`playground__item--indicators`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.playground__item__content}>

            <div className={styles.playground__item__head}>
              <h3 className={styles.playground__item__head__title}>{_dbLoadingPlayground?.methodsIndicatorsTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbLoadingPlayground?.methodsIndicatorsDescription}</p>
              <Link href={pathPageDocs} as={`${process.env.appUrl}${pathAsDocs}${_dbLoadingPlayground?.infoDocsLinkRouteHash}`} passHref prefetch={false}>
                <a className={styles.playground__item__head__link}>
                  <IconDocs className={styles.playground__item__head__link__icon} />
                  <span>{_dbLoadingPlayground?.infoDocsLinkText}</span>
                </a>
              </Link>
            </div>

            <div className={styles.playground__item__usage}>
              <div className={styles.playground__item__usage__code}>
                <code className="code code--medium">
                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment code__comment--fullbeginning"></span>
                  </span>
                  {
                    _dbLoadingPlayground?.commentsIndicators?.map((comment, index) => {
                      return (
                        <span key={index} className="code__indent1 code__indent--py0">
                          <span className="code__comment code__comment--fullmiddle">{comment}</span>
                        </span>
                      );
                    })
                  }
                  <span className="code__indent1 code__indent--py0">
                    <span className="code__comment code__comment--fullend"></span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentIndicatorOnly}</span>
                  </span>
                  {
                    _dbLoadingPlayground?.methodsIndicators?.map((indicator, index) => (
                      <span key={index} className="code__indent1 code__indent--py0">
                        {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                        <span className="code__namespace">{namespaceModule}</span>
                        <span>{`.`}</span>
                        <span className="code__method">{indicator?.functionName}</span>
                        <span>{`();`}</span>
                      </span>
                    ))
                  }

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentIndicatorWithMessage}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodsIndicators?.find(x => x)?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbLoadingPlayground?.methodsDefaultMessage}'`}</span>
                    <span>{`);`}</span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentIndicatorWithNewOptions}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodsIndicators?.find(x => x)?.functionName}</span>
                    <span>{`({`}</span>
                  </span>
                  <span className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`clickToClose: `}</span>
                    <span className="code__boolean">{`true`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`svgSize: `}</span>
                    <span className="code__string">{`'19px'`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    <span>{`});`}</span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentIndicatorWithMessageAndNewOptions}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodsIndicators?.find(x => x)?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbLoadingPlayground?.methodsDefaultMessage}'`}</span>
                    <span>{`, {`}</span>
                  </span>
                  <span className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`backgroundColor: `}</span>
                    <span className="code__string">{`'rgba(0,0,0,0.8)'`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__indent1 code__indent--pt0">
                    <span>{`});`}</span>
                  </span>

                </code>
              </div>
            </div>

          </div>
        </div>
        {/* Indicators: end */}

        {/* Custom: begin */}
        <div
          className={[
            `${styles.playground__item}`,
            `${styles[`playground__item--custom`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.playground__item__content}>

            <div className={styles.playground__item__head}>
              <h3 className={styles.playground__item__head__title}>{_dbLoadingPlayground?.methodCustomTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbLoadingPlayground?.methodCustomDescription}</p>
            </div>

            <div className={styles.playground__item__usage}>
              <div className={styles.playground__item__usage__code}>
                <code className="code code--medium">
                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentIndicatorCustom}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodCustom?.functionName}</span>
                    <span>{`({`}</span>
                  </span>
                  <span className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`customSvgUrl: `}</span>
                    <span className="code__string">{`'${_dbLoadingPlayground?.methodCustomSvgUrl}'`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    <span>{`});`}</span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentIndicatorCustomWithMessage}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodCustom?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbLoadingPlayground?.methodsDefaultMessage}'`}</span>
                    <span>{`, {`}</span>
                  </span>
                  <span className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`customSvgUrl: `}</span>
                    <span className="code__string">{`'${_dbLoadingPlayground?.methodCustomSvgUrl}'`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__indent1 code__indent--pt0">
                    <span>{`});`}</span>
                  </span>

                </code>
              </div>
            </div>

          </div>
        </div>
        {/* Custom: end */}

        {/* Change: begin */}
        <div
          className={[
            `${styles.playground__item}`,
            `${styles[`playground__item--change`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.playground__item__content}>

            <div className={styles.playground__item__head}>
              <h3 className={styles.playground__item__head__title}>{_dbLoadingPlayground?.methodChangeTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbLoadingPlayground?.methodChangeDescription}</p>
            </div>

            <div className={styles.playground__item__usage}>
              <div className={styles.playground__item__usage__code}>
                <code className="code code--medium">
                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment code__comment--fullbeginning"></span>
                  </span>
                  {
                    _dbLoadingPlayground?.commentsChange?.map((comment, index) => {
                      return (
                        <span key={index} className="code__indent1 code__indent--py0">
                          <span className="code__comment code__comment--fullmiddle">{comment}</span>
                        </span>
                      );
                    })
                  }
                  <span className="code__indent1 code__indent--py0">
                    <span className="code__comment code__comment--fullend"></span>
                  </span>

                  <span className="code__indent1">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodChange?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbLoadingPlayground?.methodChangeMessage}'`}</span>
                    <span>{`);`}</span>
                  </span>
                </code>
              </div>
            </div>

          </div>
        </div>
        {/* Change: end */}

        {/* Remove: begin */}
        <div
          className={[
            `${styles.playground__item}`,
            `${styles[`playground__item--remove`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.playground__item__content}>

            <div className={styles.playground__item__head}>
              <h3 className={styles.playground__item__head__title}>{_dbLoadingPlayground?.methodRemoveTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbLoadingPlayground?.methodRemoveDescription}</p>
            </div>

            <div className={styles.playground__item__usage}>
              <div className={styles.playground__item__usage__code}>
                <code className="code code--medium">
                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment code__comment--fullbeginning"></span>
                  </span>
                  {
                    _dbLoadingPlayground?.commentsRemove?.map((comment, index) => {
                      return (
                        <span key={index} className="code__indent1 code__indent--py0">
                          <span className="code__comment code__comment--fullmiddle">{comment}</span>
                        </span>
                      );
                    })
                  }
                  <span className="code__indent1 code__indent--py0">
                    <span className="code__comment code__comment--fullend"></span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentRemoveImmediately}</span>
                  </span>
                  <span className="code__indent1 code__indent--pt0">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodRemove?.functionName}</span>
                    <span>{`();`}</span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbLoadingPlayground?.commentRemoveWithDelay}</span>
                  </span>
                  <span className="code__indent1 code__indent--pt0">
                    {!stateLoadingIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbLoadingPlayground?.methodRemove?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__number">{`${_dbLoadingPlayground?.methodRemoveDuration}`}</span>
                    <span>{`);`}</span>
                  </span>
                </code>
              </div>
            </div>

          </div>
        </div>
        {/* Remove: end */}

        {/* Demo: begin */}
        <div
          className={[
            `${styles.playground__item}`,
            `${styles[`playground__item--demo`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.playground__item__content}>

            <div className={styles.playground__item__head}>
              <h3 className={styles.playground__item__head__title}>{_dbLoadingPlayground?.demoTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbLoadingPlayground?.demoDescription}</p>
            </div>

            <div className={styles.playground__item__demo}>
              <input
                ref={refDemoInput}
                type="text"
                className={styles.playground__item__demo__input}
                placeholder={_dbLoadingPlayground?.demoInputPlaceholder}
                maxLength={34}
              />
              <div className={styles.playground__item__demo__buttons}>
                {
                  _dbLoadingPlayground?.methodsIndicators?.map((method, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => demoButtonsOnClickHandler(method?.functionName)}
                      className={styles.playground__item__demo__button}
                    >
                      <LazyImage
                        threshold={0.25}
                        className={styles.playground__item__demo__button__icon}
                        classNameLoaded={styles[`playground__item__demo__button__icon--loaded`]}
                        width="32"
                        height="32"
                        src={getLoadingIconsAsSrc(method.id)}
                        alt={method?.functionName}
                      />
                      <span className={styles.playground__item__demo__button__text}>{method?.functionName}</span>
                    </button>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
        {/* Demo: end */}

      </div>

    </div>
  );
}

export default Playground;
