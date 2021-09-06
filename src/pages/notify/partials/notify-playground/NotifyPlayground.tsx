import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Notify as NotiflixNotify } from 'notiflix';
import { FiSettings as IconDocs } from 'react-icons/fi';
import { HiOutlineArrowDown as IconArrowDown } from 'react-icons/hi';
import { BiMailSend as IconSend } from 'react-icons/bi';

import { attributes as _notify } from '@database/pages/notify.md';
import { TDatabaseNotifyFunctionNames } from '@database/database.i';

import { constants } from '@application/constants';
import { routes } from '@application/routes';
import { EPageId } from '@application/enumerations/page-id';
import { getNotifyIconsAsSrc } from '@application/enumerations/notify';

import LazyImage from '@components/lazyimage/LazyImage';

import styles from '@pages/notify/partials/notify-playground/NotifyPlayground.module.scss';

function NotifyPlayground(): JSX.Element {
  const { _dbNotifyPlayground } = _notify;
  const namespaceGlobal = constants.app.name;
  const namespaceModule = _dbNotifyPlayground?.namespace;
  const pathPageDocs = routes.find(route => route.id === EPageId.DOCUMENTATION)?.pathPage || '/';
  const pathAsDocs = routes.find(route => route.id === EPageId.DOCUMENTATION)?.pathAs || '/';

  // Switch As Module: begin
  const [stateNotifyIsModule, setStateNotifyIsModule] = useState<boolean>(true);
  const switchAsAModuleOnClickHandler = (isAModule: boolean): void => {
    setStateNotifyIsModule(isAModule);
  };
  // Switch As Module: end

  // Demo Call Notiflix Function by Type: begin
  const callNotifyFunctionByTypeOnClickHandler = (
    functionName: TDatabaseNotifyFunctionNames,
    message: string,
    callback?: () => void,
  ): void => {
    NotiflixNotify[functionName](message, callback, constants.app.libraryOptions.notify);
  };
  // Demo Call Notiflix Function by Type: end

  // Demo Buttons Handler: begin
  const refsDemoInputs = useRef<(HTMLInputElement | null)[]>([]);
  const demoButtonsOnClickHandler = (functionName: TDatabaseNotifyFunctionNames, targetIndex: number): void => {
    const thisMessage = refsDemoInputs.current[targetIndex]?.value || '';
    if (thisMessage) {
      callNotifyFunctionByTypeOnClickHandler(functionName, thisMessage);
    } else {
      refsDemoInputs.current[targetIndex]?.focus();
    }
  };
  // Demo Buttons Handler: end

  // Callback Button Handler: begin
  const refCallbackInput = useRef<HTMLInputElement | null>(null);
  const callbackButtonOnClickHandler = (): void => {
    const functionName = _dbNotifyPlayground?.types.find(x => x)?.functionName;
    const alertMessage = refCallbackInput.current?.value || '';
    if (functionName && alertMessage) {
      callNotifyFunctionByTypeOnClickHandler(functionName, (_dbNotifyPlayground?.callbackExampleMessage || ''), () => {
        alert(alertMessage);
      });
    } else {
      refCallbackInput.current?.focus();
    }
  };
  // Callback Button Handler: end


  return (
    <div className={styles.notify__playground}>

      <div className={styles.notify__playground__head}>
        <h2 className={styles.notify__playground__head__title}>{_dbNotifyPlayground?.title}</h2>
        <button
          aria-label={constants.app.text.switch}
          onClick={() => switchAsAModuleOnClickHandler(!stateNotifyIsModule)}
          className={[
            `${styles.notify__playground__head__switch}`,
            `${styles[`notify__playground__head__switch--${stateNotifyIsModule ? 'module' : 'global'}`] || ''}`,
          ].join(' ').trim()}
        >
          <span className={styles.notify__playground__head__switch__text}>{stateNotifyIsModule ? constants.app.text.module : constants.app.text.global}</span>
        </button>
      </div>

      <div className={styles.notify__playground__list}>
        {/* Functions: begin */}
        {_dbNotifyPlayground?.types
          ?.filter(x => x.isActive)
          ?.sort((a, b) => a.sortOrder - b.sortOrder)
          ?.map((type, index) => {
            return (
              <div
                key={index}
                className={[
                  `${styles.notify__playground__list__item}`,
                  `${styles[`notify__playground__list__item--${type.functionName}`] || ''}`,
                ].join(' ').trim()}
              >
                <div className={styles.notify__playground__list__item__content}>

                  <div className={styles.notify__playground__list__item__head}>
                    <h3
                      className={[
                        `${styles.notify__playground__list__item__head__title}`,
                        `${styles[`notify__playground__list__item__head__title--${type.functionName}`] || ''}`,
                      ].join(' ').trim()}
                    >
                      {[
                        (!stateNotifyIsModule ? namespaceGlobal : null),
                        namespaceModule,
                        `${type.functionName}();`,
                      ].filter(x => x).join('.')}
                    </h3>
                    <Link href={pathPageDocs} as={`${process.env.appUrl}${pathAsDocs}${type.docsLinkRouteHash}`} passHref>
                      <a className={styles.notify__playground__list__item__head__link}>
                        <IconDocs className={styles.notify__playground__list__item__head__link__icon} />
                        <span>{_dbNotifyPlayground.docsLinkText}</span>
                      </a>
                    </Link>
                  </div>

                  <div className={styles.notify__playground__list__item__usage}>

                    <div className={styles.notify__playground__list__item__usage__code}>
                      <code className="code code--medium">
                        <span className="code__lvl1 code__lvl--pb0">
                          <span className="code__comment code__comment--fullbeginning"></span>
                        </span>
                        {_dbNotifyPlayground.comments.map((comment, index) => {
                          return (
                            <span key={index} className="code__lvl1 code__lvl--py0">
                              <span className="code__comment code__comment--fullmiddle">{comment}</span>
                            </span>
                          );
                        })}
                        <span className="code__lvl1 code__lvl--py0">
                          <span className="code__comment code__comment--fullend"></span>
                        </span>

                        <span className="code__lvl1">
                          {!stateNotifyIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                          <span className="code__namespace">{namespaceModule}</span>
                          <span>{`.`}</span>
                          <span className="code__func">{type.functionName}</span>
                          <span>{`(`}</span>
                          <span className="code__string">{`'${type.defaultValue}'`}</span>
                          <span>{`);`}</span>
                        </span>
                      </code>
                    </div>

                    <div className={styles.notify__playground__list__item__usage__preview}>
                      <IconArrowDown className={styles.notify__playground__list__item__usage__preview__arrow} />

                      <div
                        className={[
                          `${styles.notify__playground__list__item__usage__preview__item}`,
                          `${styles[`notify__playground__list__item__usage__preview__item--${type.functionName}`] || ''}`,
                        ].join(' ').trim()}
                      >
                        <svg className={styles.notify__playground__list__item__usage__preview__item__arrow} width="40" height="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 54"><path fill="currentColor" d="M28.45 2.32h-3.49c-7.04 0-12.34 2.11-15.98 5.49-4.04 3.76-6.03 9.13-6.03 14.93 0 5.81 1.99 11.17 6.03 14.93 3.57 3.32 8.76 5.41 15.6 5.49-1.11-2.37-2.12-4.08-3.11-6.68-.29-.77.7-1.25 1.28-.98 5.09 2.37 10.08 4.9 14.99 7.61.43.23.57 1.01.13 1.35-4.49 3.47-9.32 6.1-14.63 7.96-.58.2-1.28-.44-1.02-1.05l2.44-6.59c-7.32-.06-12.89-2.32-16.76-5.92-4.39-4.08-6.55-9.87-6.55-16.12 0-6.24 2.16-12.03 6.55-16.12C11.82 2.98 17.49.71 24.96.71h3.49a.805.805 0 1 1 0 1.61zm7.57 41.63c-4.06-2.21-8.19-4.31-12.37-6.3.85 1.9 1.85 3.73 2.71 5.64.17.38.18.78.03 1.18l-2.21 5.97c4.23-1.62 8.17-3.78 11.84-6.49z" /></svg>
                        <button
                          type="button"
                          onClick={() => callNotifyFunctionByTypeOnClickHandler(type.functionName, type.defaultValue)}
                          className={styles.notify__playground__list__item__usage__preview__item__button}
                        >
                          <LazyImage
                            threshold={0.25}
                            className={styles.notify__playground__list__item__usage__preview__item__icon}
                            classNameLoaded={styles[`notify__playground__list__item__usage__preview__item__icon--loaded`]}
                            width="40"
                            height="40"
                            src={getNotifyIconsAsSrc(type.id)}
                            alt={type.functionName}
                          />
                          <span>{type.defaultValue}</span>
                        </button>
                      </div>
                    </div>

                  </div>

                  <div className={styles.notify__playground__list__item__demo}>

                    <div className={styles.notify__playground__list__item__demo__head}>
                      <h4 className={styles.notify__playground__list__item__demo__head__title}>{_dbNotifyPlayground.demoInfoTitle}</h4>
                      <p className={styles.notify__playground__list__item__demo__head__description}>{_dbNotifyPlayground.demoInfoDescription}</p>
                    </div>

                    <div className={styles.notify__playground__list__item__demo__code}>
                      <code className="code code--medium">
                        <span className="code__lvl1">
                          {!stateNotifyIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                          <span className="code__namespace">{namespaceModule}</span>
                          <span>{`.`}</span>
                          <span className="code__func">{type.functionName}</span>
                          <span>{`(`}</span>
                          <span className="code__string">{`'`}</span>
                          <span className="code__string">
                            <input
                              ref={_input => refsDemoInputs.current[index] = _input}
                              className="code__input"
                              placeholder={_dbNotifyPlayground.demoInputPlaceholder}
                              type="text"
                            />
                          </span>
                          <span className="code__string">{`'`}</span>
                          <span>{`);`}</span>
                        </span>
                      </code>
                      <button
                        aria-label={_dbNotifyPlayground.demoButtonText}
                        type="button"
                        onClick={() => demoButtonsOnClickHandler(type.functionName, index)}
                        className={styles.notify__playground__list__item__demo__code__button}
                      >
                        <IconSend className={styles.notify__playground__list__item__demo__code__button__icon} />
                        <span>{_dbNotifyPlayground.demoButtonText}</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        {/* Functions: end */}

        {/* Callback: begin */}
        <div
          className={[
            `${styles.notify__playground__list__item}`,
            `${styles[`notify__playground__list__item--callback`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.notify__playground__list__item__content}>
            <div className={styles.notify__playground__list__item__head}>
              <h3 className={styles.notify__playground__list__item__head__title}>{_dbNotifyPlayground?.callbackInfoTitle}</h3>
              <p className={styles.notify__playground__list__item__head__description}>{_dbNotifyPlayground?.callbackInfoDescription}</p>
            </div>

            <div className={styles.notify__playground__list__item__demo}>
              <div className={styles.notify__playground__list__item__demo__code}>
                <code className="code code--medium">
                  <span className="code__lvl1 code__lvl--pb0">
                    {!stateNotifyIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__func">{_dbNotifyPlayground?.types.find(x => x)?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbNotifyPlayground?.callbackExampleMessage}'`}</span>
                    <span>{`, `}</span>
                    {stateNotifyIsModule ?
                      <>
                        <span>{`() `}</span>
                        <span className="code__boolean">{`=>`}</span>
                        <span>{` {`}</span>
                      </>
                      :
                      <>
                        <span className="code__boolean">{`function`}</span>
                        <span className="code__func">{` cb`}</span>
                        <span>{`() {`}</span>
                      </>
                    }
                  </span>

                  <span className="code__lvl2 code__lvl--py0">
                    <span className="code__func">{`alert`}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'`}</span>
                    <span className="code__string">
                      <input
                        ref={refCallbackInput}
                        className="code__input"
                        placeholder={_dbNotifyPlayground?.callbackInputPlaceholder}
                        type="text"
                      />
                    </span>
                    <span className="code__string">{`'`}</span>
                    <span>{`);`}</span>
                  </span>

                  <span className="code__lvl1 code__lvl--pt0">
                    <span>{`});`}</span>
                  </span>
                </code>
                <button
                  aria-label={_dbNotifyPlayground?.callbackButtonText}
                  type="button"
                  onClick={callbackButtonOnClickHandler}
                  className={styles.notify__playground__list__item__demo__code__button}
                >
                  <IconSend className={styles.notify__playground__list__item__demo__code__button__icon} />
                  <span>{_dbNotifyPlayground?.callbackButtonText}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Callback: end */}

        {/* Extend: begin */}
        <div
          className={[
            `${styles.notify__playground__list__item}`,
            `${styles[`notify__playground__list__item--extend`] || ''}`,
          ].join(' ').trim()}
        >
          <div className={styles.notify__playground__list__item__content}>
            <div className={styles.notify__playground__list__item__head}>
              <h3 className={styles.notify__playground__list__item__head__title}>{_dbNotifyPlayground?.extendInfoTitle}</h3>
              <p className={styles.notify__playground__list__item__head__description}>{_dbNotifyPlayground?.extendInfoDescription}</p>
              <Link href={pathPageDocs} as={`${process.env.appUrl}${pathAsDocs}${_dbNotifyPlayground?.extendDocsLinkRouteHash}`} passHref>
                <a className={styles.notify__playground__list__item__head__link}>
                  <IconDocs className={styles.notify__playground__list__item__head__link__icon} />
                  <span>{_dbNotifyPlayground?.extendDocsLinkText}</span>
                </a>
              </Link>
            </div>

            <div className={styles.notify__playground__list__item__usage}>
              <div className={styles.notify__playground__list__item__usage__code}>
                <code className="code code--medium">
                  <span className="code__lvl1 code__lvl--pb0">
                    {!stateNotifyIsModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                    <span className="code__namespace">{namespaceModule}</span>
                    <span>{`.`}</span>
                    <span className="code__func">{_dbNotifyPlayground?.types.find(x => x)?.functionName}</span>
                    <span>{`(`}</span>
                    <span className="code__string">{`'${_dbNotifyPlayground?.extendExampleMessage}'`}</span>
                    <span>{`, {`}</span>
                  </span>
                  <span className="code__lvl2 code__lvl--py0">
                    <span className="code__attr">{`ID: `}</span>
                    <span className="code__string">{`'MKA'`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__lvl2 code__lvl--py0">
                    <span className="code__attr">{`timeout: `}</span>
                    <span className="code__number">{`1923`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__lvl2 code__lvl--py0">
                    <span className="code__attr">{`showOnlyTheLastOne: `}</span>
                    <span className="code__boolean">{`true`}</span>
                    <span>{`,`}</span>
                  </span>
                  <span className="code__lvl1 code__lvl--pt0">
                    <span>{`});`}</span>
                  </span>
                </code>
              </div>
            </div>
          </div>
        </div>
        {/* Extend: end */}
      </div>

    </div>
  );
}

export default NotifyPlayground;
