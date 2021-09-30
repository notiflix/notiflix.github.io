import { useRef, useState } from 'react';
import Link from 'next/link';
import { Block as NotiflixBlock } from 'notiflix';
import { FiSettings as IconDocs, FiShieldOff as IconUnblock } from 'react-icons/fi';

import { attributes as _appContent } from '@database/app/content.md';
import { attributes as _block } from '@database/pages/block.md';
import { TDatabaseBlockIndicatorsFunctionNames } from '@database/database.i';

import { constants } from '@application/constants';
import { routes } from '@application/routes';
import { EPageId } from '@application/enumerations/page-id';
import { getBlockIconsAsSrc } from '@application/enumerations/block';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/block/partials/playground/Playground.module.scss';

function Playground(): JSX.Element {
  const { _dbAppContent } = _appContent;
  const { _dbBlockPlayground } = _block;
  const namespaceGlobal = constants.app.name;
  const namespaceModule = _dbBlockPlayground?.namespace;
  const pathPageDocs = routes.find(route => route?.id === EPageId.DOCUMENTATION)?.pathPage || '/';
  const pathAsDocs = routes.find(route => route?.id === EPageId.DOCUMENTATION)?.pathAs || '/';

  // Switch As Module: begin
  const [stateBlockIsModule, setStateBlockIsModule] = useState<boolean>(true);
  const switchAsAModuleOnClickHandler = (isAModule: boolean): void => {
    setStateBlockIsModule(isAModule);
  };
  // Switch As Module: end

  // Demo Call NotiflixBlock Function by Method: begin
  const callNotiflixBlockFunctionByMethod = (
    functionName: TDatabaseBlockIndicatorsFunctionNames,
    message?: string,
  ): void => {
    NotiflixBlock[functionName](_dbBlockPlayground?.methodsDefaultSelector || '', message, constants.app.libraryOptions.block);
  };
  // Demo Call NotiflixBlock Function by Method: end

  // Demo Buttons Block OnClick Handler: begin
  const refDemoInput = useRef<HTMLInputElement | null>(null);
  const demoButtonsBlockOnClickHandler = (functionName: TDatabaseBlockIndicatorsFunctionNames): void => {
    const blockingMessage = refDemoInput.current?.value || '';
    callNotiflixBlockFunctionByMethod(functionName, blockingMessage);
  };
  // Demo Buttons Block OnClick Handler: end

  // Demo Button Unbock OnClick Handler: begin
  const demoButtonUnblockOnClickHandler = (): void => {
    NotiflixBlock.remove(_dbBlockPlayground?.methodsDefaultSelector || '');
  };
  // Demo Button Unbock OnClick Handler: end

  return (
    <div className={styles.playground}>

      <div className={styles.playground__head}>
        <h2 className={styles.playground__head__title}>{_dbBlockPlayground?.title}</h2>
        <button
          aria-label={_dbAppContent?.buttons?.switch}
          type="button"
          onClick={() => switchAsAModuleOnClickHandler(!stateBlockIsModule)}
          className={[
            `${styles.playground__head__switch}`,
            `${styles[`playground__head__switch--${stateBlockIsModule ? 'module' : 'global'}`] || ''}`,
          ].join(' ').trim()}
        >
          <span className={styles.playground__head__switch__text}>{stateBlockIsModule ? _dbAppContent?.buttons?.module : _dbAppContent?.buttons?.global}</span>
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
              <h3 className={styles.playground__item__head__title}>{_dbBlockPlayground?.methodsBlockTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbBlockPlayground?.methodsBlockDescription}</p>
              <Link href={pathPageDocs} as={`${process.env.appUrl}${pathAsDocs}${_dbBlockPlayground?.infoDocsLinkRouteHash}`} passHref prefetch={false}>
                <a className={styles.playground__item__head__link}>
                  <IconDocs className={styles.playground__item__head__link__icon} />
                  <span>{_dbBlockPlayground?.infoDocsLinkText}</span>
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
                    _dbBlockPlayground?.commentsBlock?.map((comment, index) => {
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
                    <span className="code__comment">{_dbBlockPlayground?.commentBlockOnly}</span>
                  </span>
                  {
                    _dbBlockPlayground?.methodsBlockIndicators?.map((indicator, index) => (
                      <span key={index} className="code__indent1 code__indent--py0">
                        {!stateBlockIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                        <span className="code__namespace">{namespaceModule}</span>
                        <span>{`.`}</span>
                        <span className="code__method">{indicator?.functionName}</span>
                        <span>{`(`}</span>
                        <span className="code__string">{`'${_dbBlockPlayground.methodsDefaultSelector}'`}</span>
                        <span>{`);`}</span>
                      </span>
                    ))
                  }

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbBlockPlayground?.commentBlockWithMessage}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateBlockIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbBlockPlayground?.methodsBlockIndicators?.find(x => x)?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbBlockPlayground?.methodsDefaultSelector}'`}</span>
                    <span>{`, `}</span>
                    <span className="code__string">{`'${_dbBlockPlayground?.methodsDefaultMessage}'`}</span>
                    <span>{`);`}</span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbBlockPlayground?.commentBlockWithNewOptions}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateBlockIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbBlockPlayground?.methodsBlockIndicators?.find(x => x)?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbBlockPlayground?.methodsDefaultSelector}'`}</span>
                    <span>{`, {`}</span>
                  </span>
                  <span className="code__indent2 code__indent--py0">
                    <span className="code__attr">{`cssAnimationDuration: `}</span>
                    <span className="code__number">{`1881`}</span>
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
                    <span className="code__comment">{_dbBlockPlayground?.commentBlockWithMessageAndNewOptions}</span>
                  </span>
                  <span className="code__indent1 code__indent--py0">
                    {!stateBlockIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbBlockPlayground?.methodsBlockIndicators?.find(x => x)?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbBlockPlayground?.methodsDefaultSelector}'`}</span>
                    <span>{`, `}</span>
                    <span className="code__string">{`'${_dbBlockPlayground?.methodsDefaultMessage}'`}</span>
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

        {/* Remove: begin */}
        <div
          className={[
            `${styles.playground__item}`,
            `${styles[`playground__item--remove`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.playground__item__content}>

            <div className={styles.playground__item__head}>
              <h3 className={styles.playground__item__head__title}>{_dbBlockPlayground?.methodUnblockTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbBlockPlayground?.methodUnblockDescription}</p>
            </div>

            <div className={styles.playground__item__usage}>
              <div className={styles.playground__item__usage__code}>
                <code className="code code--medium">
                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment code__comment--fullbeginning"></span>
                  </span>
                  {
                    _dbBlockPlayground?.commentsUnblock?.map((comment, index) => {
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
                    <span className="code__comment">{_dbBlockPlayground?.commentUnblockImmediately}</span>
                  </span>
                  <span className="code__indent1 code__indent--pt0">
                    {!stateBlockIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbBlockPlayground?.methodUnblock?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbBlockPlayground?.methodsDefaultSelector}'`}</span>
                    <span>{`);`}</span>
                  </span>

                  <span className="code__indent1 code__indent--pb0">
                    <span className="code__comment">{_dbBlockPlayground?.commentUnblockWithDelay}</span>
                  </span>
                  <span className="code__indent1 code__indent--pt0">
                    {!stateBlockIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__method">{_dbBlockPlayground?.methodUnblock?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbBlockPlayground?.methodsDefaultSelector}'`}</span>
                    <span>{`, `}</span>
                    <span className="code__number">{`${_dbBlockPlayground?.methodUnblockDuration}`}</span>
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
              <h3 className={styles.playground__item__head__title}>{_dbBlockPlayground?.demoTitle}</h3>
              <p className={styles.playground__item__head__description}>{_dbBlockPlayground?.demoDescription}</p>
            </div>

            <div className={styles.playground__item__demo}>
              <div className={styles.playground__item__demo__element__wrapper}>
                <span className={styles.playground__item__demo__element__selector}>{_dbBlockPlayground?.methodsDefaultSelector}</span>
                <div
                  className={[
                    `${styles.playground__item__demo__element}`,
                    `${_dbBlockPlayground?.methodsDefaultSelector?.split('.')?.pop()}`,
                  ].join(' ').trim()}
                >
                  <LazyImage
                    threshold={0.25}
                    className={styles.playground__item__demo__element__image}
                    classNameLoaded={styles[`playground__item__demo__element__image--loaded`]}
                    width="32"
                    height="32"
                    src={_dbBlockPlayground?.demoElementImage}
                    alt={_dbBlockPlayground?.demoElementTitle}
                  />
                  <h4 className={styles.playground__item__demo__element__title}>{_dbBlockPlayground?.demoElementTitle}</h4>
                  <p
                    className={styles.playground__item__demo__element__description}
                    dangerouslySetInnerHTML={{ __html: _dbBlockPlayground?.demoElementDescription || '' }}
                  ></p>
                </div>
              </div>

              <input
                ref={refDemoInput}
                type="text"
                className={styles.playground__item__demo__input}
                placeholder={_dbBlockPlayground?.demoInputPlaceholder}
                maxLength={34}
              />
              <div className={styles.playground__item__demo__buttons}>
                {
                  _dbBlockPlayground?.methodsBlockIndicators?.map((method, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => demoButtonsBlockOnClickHandler(method?.functionName)}
                      className={styles.playground__item__demo__button}
                    >
                      <LazyImage
                        threshold={0.25}
                        className={styles.playground__item__demo__button__icon}
                        classNameLoaded={styles[`playground__item__demo__button__icon--loaded`]}
                        width="32"
                        height="32"
                        src={getBlockIconsAsSrc(method.id)}
                        alt={method?.functionName}
                      />
                      <span className={styles.playground__item__demo__button__text}>{method?.functionName}</span>
                    </button>
                  ))
                }
                <button
                  type="button"
                  onClick={demoButtonUnblockOnClickHandler}
                  className={[
                    `${styles.playground__item__demo__button}`,
                    `${styles['playground__item__demo__button--remove']}`,
                  ].join(' ').trim()}
                >
                  <IconUnblock className={styles.playground__item__demo__button__icon} />
                  <span className={styles.playground__item__demo__button__text}>{_dbBlockPlayground?.demoButtonUnblock}</span>
                </button>
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
