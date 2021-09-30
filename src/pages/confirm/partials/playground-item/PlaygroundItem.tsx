import { useRef } from 'react';
import Link from 'next/link';
import { Confirm as NotiflixConfirm } from 'notiflix';
import { FiSettings as IconDocs } from 'react-icons/fi';
import { HiOutlineArrowDown as IconArrowDown } from 'react-icons/hi';
import { BiMailSend as IconSend } from 'react-icons/bi';

import { IDatabaseConfirmMethodShow, IDatabaseConfirmMethodAsk } from '@database/database.i';

import { constants } from '@application/constants';
import { routes } from '@application/routes';
import { EPageId } from '@application/enumerations/page-id';
import { EConfirm } from '@application/enumerations/confirm';

interface IPlaygroundItem {
  isModule: boolean;
  namespace: string;
  data: IDatabaseConfirmMethodShow | IDatabaseConfirmMethodAsk;
}

import styles from '@pages/confirm/partials/playground-item/PlaygroundItem.module.scss';

function PlaygroundItem({
  isModule,
  namespace,
  data,
}: IPlaygroundItem): JSX.Element {
  const isMethodShow = data?.functionName === EConfirm.SHOW;
  const isMethodAsk = data?.functionName === EConfirm.ASK;
  const namespaceGlobal = constants.app.name;
  const namespaceModule = namespace;
  const pathPageDocs = routes.find(route => route?.id === EPageId.DOCUMENTATION)?.pathPage || '/';
  const pathAsDocs = routes.find(route => route?.id === EPageId.DOCUMENTATION)?.pathAs || '/';

  // Inputs Refs: begin
  const refsDemoInputs = useRef<(HTMLInputElement | null)[]>([]);
  const refsDemoInputsIndexes: {
    title: number;
    question: number;
    answer: number;
    okButton: number;
    cancelButton: number;
    okButtonCallback: number;
    cancelButtonCallback: number;
  } = {
    title: 0,
    question: 1,
    answer: 2,
    okButton: 3,
    cancelButton: 4,
    okButtonCallback: 5,
    cancelButtonCallback: 6,
  };
  // Inputs Refs: end

  // Demo Button OnClick Handler: begin
  const demoButtonOnClickHandler = (): void => {
    const isAllInputsAreValid = refsDemoInputs.current.map(input => {
      if (input && !input.value) {
        input.focus();
        return false;
      }
      return true;
    }).every(x => x);

    if (isAllInputsAreValid) {
      const inputTitle = refsDemoInputs.current[refsDemoInputsIndexes.title];
      const inputQuestion = refsDemoInputs.current[refsDemoInputsIndexes.question];
      const inputAnswer = refsDemoInputs.current[refsDemoInputsIndexes.answer];
      const inputOkButton = refsDemoInputs.current[refsDemoInputsIndexes.okButton];
      const inputCancelButton = refsDemoInputs.current[refsDemoInputsIndexes.cancelButton];
      const inputOkButtonCallback = refsDemoInputs.current[refsDemoInputsIndexes.okButtonCallback];
      const inputCancelButtonCallback = refsDemoInputs.current[refsDemoInputsIndexes.cancelButtonCallback];

      if (isMethodShow) {
        NotiflixConfirm.show(
          inputTitle?.value || '',
          inputQuestion?.value || '',
          inputOkButton?.value || '',
          inputCancelButton?.value || '',
          () => alert(inputOkButtonCallback?.value || ''),
          () => alert(inputCancelButtonCallback?.value || ''),
          constants.app.libraryOptions.confirm,
        );
      } else if (isMethodAsk) {
        NotiflixConfirm.ask(
          inputTitle?.value || '',
          inputQuestion?.value || '',
          inputAnswer?.value || '',
          inputOkButton?.value || '',
          inputCancelButton?.value || '',
          () => alert(inputOkButtonCallback?.value || ''),
          () => alert(inputCancelButtonCallback?.value || ''),
          constants.app.libraryOptions.confirm,
        );
      }
    }
  };
  // Demo Button OnClick Handler: end

  return (
    <div
      className={[
        `${styles.item}`,
        `${styles[`item--${data?.functionName}`] || ''}`,
      ].join(' ').trim()}
    >
      <div className={styles.item__content}>

        <div className={styles.item__head}>
          <h3
            className={[
              `${styles.item__head__title}`,
              `${styles[`item__head__title--${data?.functionName}`] || ''}`,
            ].join(' ').trim()}
          >
            {
              [
                (!isModule ? namespaceGlobal : null),
                namespaceModule,
                `${data?.functionName}();`,
              ].filter(x => x).join('.')
            }
          </h3>
          <p className={styles.item__head__description}>{data?.infoDescription}</p>
          <Link href={pathPageDocs} as={`${process.env.appUrl}${pathAsDocs}${data?.infoDocsLinkRouteHash}`} passHref prefetch={false}>
            <a className={styles.item__head__link}>
              <IconDocs className={styles.item__head__link__icon} />
              <span>{data?.infoDocsLinkText}</span>
            </a>
          </Link>
        </div>

        <div className={styles.item__usage}>
          <div className={styles.item__usage__code}>
            <code className="code code--medium">
              <span className="code__indent1 code__indent--pb0">
                <span className="code__comment code__comment--fullbeginning"></span>
              </span>
              {
                data?.comments?.map((comment, index) => {
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
                {!isModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                <span className="code__namespace">{namespaceModule}</span>
                <span>{`.`}</span>
                <span className="code__method">{data?.functionName}</span>
                <span>{`(`}</span>
              </span>

              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'${data?.defaultValueTitle}'`}</span>
                <span>{`,`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'${data?.defaultValueQuestion}'`}</span>
                <span>{`,`}</span>
              </span>
              {
                (isMethodAsk && 'defaultValueAnswer' in data) &&
                <span className="code__indent2 code__indent--py0">
                  <span className="code__string">{`'${data?.defaultValueAnswer}'`}</span>
                  <span>{`,`}</span>
                </span>
              }
              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'${data?.defaultValueButtonOk}'`}</span>
                <span>{`,`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'${data?.defaultValueButtonCancel}'`}</span>
                <span>{`,`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                {
                  isModule
                    ?
                    <>
                      <span>{`() `}</span>
                      <span className="code__function">{`=>`}</span>
                      <span>{` {`}</span>
                    </>
                    :
                    <>
                      <span className="code__function">{`function`}</span>
                      <span className="code__method">{` ${data?.defaultValueButtonOkCallbackFn}`}</span>
                      <span>{`() {`}</span>
                    </>
                }
              </span>
              <span className="code__indent3 code__indent--py0">
                <span className="code__method">{`alert`}</span>
                <span>{`(`}</span>
                <span className="code__string">{`'${data?.defaultValueButtonOkCallbackTxt}'`}</span>
                <span>{`);`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span>{`},`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                {
                  isModule
                    ?
                    <>
                      <span>{`() `}</span>
                      <span className="code__function">{`=>`}</span>
                      <span>{` {`}</span>
                    </>
                    :
                    <>
                      <span className="code__function">{`function`}</span>
                      <span className="code__method">{` ${data?.defaultValueButtonCancelCallbackFn}`}</span>
                      <span>{`() {`}</span>
                    </>
                }
              </span>
              <span className="code__indent3 code__indent--py0">
                <span className="code__method">{`alert`}</span>
                <span>{`(`}</span>
                <span className="code__string">{`'${data?.defaultValueButtonCancelCallbackTxt}'`}</span>
                <span>{`);`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span>{`},`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span>{`{`}</span>
              </span>
              <span className="code__indent3 code__indent--py0">
                <span className="code__comment">{`${data?.defaultValueOptionsComment}`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span>{`},`}</span>
              </span>

              <span className="code__indent1 code__indent--pt0">
                <span>{`);`}</span>
              </span>
            </code>
          </div>

          <div className={styles.item__usage__preview}>
            <IconArrowDown className={styles.item__usage__preview__arrow} />

            <div
              className={[
                `${styles.item__usage__preview__item}`,
                `${styles[`item__usage__preview__item--${data?.functionName}`] || ''}`,
              ].join(' ').trim()}
            >
              <svg className={styles.item__usage__preview__item__arrow} width="40" height="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 54"><path fill="currentColor" d="M28.45 2.32h-3.49c-7.04 0-12.34 2.11-15.98 5.49-4.04 3.76-6.03 9.13-6.03 14.93 0 5.81 1.99 11.17 6.03 14.93 3.57 3.32 8.76 5.41 15.6 5.49-1.11-2.37-2.12-4.08-3.11-6.68-.29-.77.7-1.25 1.28-.98 5.09 2.37 10.08 4.9 14.99 7.61.43.23.57 1.01.13 1.35-4.49 3.47-9.32 6.1-14.63 7.96-.58.2-1.28-.44-1.02-1.05l2.44-6.59c-7.32-.06-12.89-2.32-16.76-5.92-4.39-4.08-6.55-9.87-6.55-16.12 0-6.24 2.16-12.03 6.55-16.12C11.82 2.98 17.49.71 24.96.71h3.49a.805.805 0 1 1 0 1.61zm7.57 41.63c-4.06-2.21-8.19-4.31-12.37-6.3.85 1.9 1.85 3.73 2.71 5.64.17.38.18.78.03 1.18l-2.21 5.97c4.23-1.62 8.17-3.78 11.84-6.49z" /></svg>

              <h5
                className={styles.item__usage__preview__item__title}
                dangerouslySetInnerHTML={{ __html: data?.defaultValueTitle || '' }}
              ></h5>
              <p
                className={styles.item__usage__preview__item__question}
                dangerouslySetInnerHTML={{ __html: data?.defaultValueQuestion || '' }}
              ></p>
              {
                (isMethodAsk && 'demoInputPlaceholderAnswer' in data) &&
                <div className={styles.item__usage__preview__item__answer}>
                  <input type="text" maxLength={110} className={styles.item__usage__preview__item__answer__input} readOnly placeholder={data?.demoInputPlaceholderAnswer} />
                </div>
              }
              <div className={styles.item__usage__preview__item__buttons}>
                <button
                  type="button"
                  className={styles.item__usage__preview__item__button}
                >{data?.defaultValueButtonOk}</button>
                <button
                  type="button"
                  className={styles.item__usage__preview__item__button}
                >{data?.defaultValueButtonCancel}</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.item__demo}>

          <div className={styles.item__demo__head}>
            <h4 className={styles.item__demo__head__title}>{data?.demoInfoTitle}</h4>
          </div>

          <div className={styles.item__demo__code}>
            <code className="code code--medium">
              <span className="code__indent1 code__indent--pb0">
                {!isModule && <><span className="code__namespace">{namespaceGlobal}</span><span>{`.`}</span></>}
                <span className="code__namespace">{namespaceModule}</span>
                <span>{`.`}</span>
                <span className="code__method">{data?.functionName}</span>
                <span>{`(`}</span>
              </span>

              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'`}</span>
                <span className="code__string">
                  <input
                    ref={(_inputTitle: HTMLInputElement) => refsDemoInputs.current[refsDemoInputsIndexes.title] = _inputTitle}
                    className="code__input"
                    placeholder={data?.demoInputPlaceholderTitle}
                    defaultValue={data?.defaultValueTitle}
                    type="text"
                    maxLength={34}
                  />
                </span>
                <span className="code__string">{`'`}</span>
                <span>{`,`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'`}</span>
                <span className="code__string">
                  <input
                    ref={(_inputQuestion: HTMLInputElement) => refsDemoInputs.current[refsDemoInputsIndexes.question] = _inputQuestion}
                    className="code__input"
                    placeholder={data?.demoInputPlaceholderQuestion}
                    defaultValue={data?.defaultValueQuestion}
                    type="text"
                    maxLength={110}
                  />
                </span>
                <span className="code__string">{`'`}</span>
                <span>{`,`}</span>
              </span>
              {
                (isMethodAsk && 'demoInputPlaceholderAnswer' in data && 'defaultValueAnswer' in data) &&
                <span className="code__indent2 code__indent--py0">
                  <span className="code__string">{`'`}</span>
                  <span className="code__string">
                    <input
                      ref={(_inputAnswer: HTMLInputElement) => refsDemoInputs.current[refsDemoInputsIndexes.answer] = _inputAnswer}
                      className="code__input"
                      placeholder={data?.demoInputPlaceholderAnswer}
                      defaultValue={data?.defaultValueAnswer}
                      type="text"
                      maxLength={110}
                    />
                  </span>
                  <span className="code__string">{`'`}</span>
                  <span>{`,`}</span>
                </span>
              }
              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'`}</span>
                <span className="code__string">
                  <input
                    ref={(_inputOkButton: HTMLInputElement) => refsDemoInputs.current[refsDemoInputsIndexes.okButton] = _inputOkButton}
                    className="code__input"
                    placeholder={data?.demoInputPlaceholderOkButton}
                    defaultValue={data?.defaultValueButtonOk}
                    type="text"
                    maxLength={34}
                  />
                </span>
                <span className="code__string">{`'`}</span>
                <span>{`,`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span className="code__string">{`'`}</span>
                <span className="code__string">
                  <input
                    ref={(_inputCancelButton: HTMLInputElement) => refsDemoInputs.current[refsDemoInputsIndexes.cancelButton] = _inputCancelButton}
                    className="code__input"
                    placeholder={data?.demoInputPlaceholderCancelButton}
                    defaultValue={data?.defaultValueButtonCancel}
                    type="text"
                    maxLength={34}
                  />
                </span>
                <span className="code__string">{`'`}</span>
                <span>{`,`}</span>
              </span>

              <span className="code__indent2 code__indent--py0">
                {
                  isModule
                    ?
                    <>
                      <span>{`() `}</span>
                      <span className="code__function">{`=>`}</span>
                      <span>{` {`}</span>
                    </>
                    :
                    <>
                      <span className="code__function">{`function`}</span>
                      <span className="code__method">{` ${data?.defaultValueButtonOkCallbackFn}`}</span>
                      <span>{`() {`}</span>
                    </>
                }
              </span>
              <span className="code__indent3 code__indent--py0">
                <span className="code__method">{`alert`}</span>
                <span>{`(`}</span>
                <span className="code__string">{`'`}</span>
                <span className="code__string">
                  <input
                    ref={(_inputOkButtonCallback: HTMLInputElement) => refsDemoInputs.current[refsDemoInputsIndexes.okButtonCallback] = _inputOkButtonCallback}
                    className="code__input"
                    placeholder={data?.demoInputPlaceholderOkButtonCallback}
                    defaultValue={data?.defaultValueButtonOkCallbackTxt}
                    type="text"
                    maxLength={110}
                  />
                </span>
                <span className="code__string">{`'`}</span>
                <span>{`);`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span>{`},`}</span>
              </span>

              <span className="code__indent2 code__indent--py0">
                {
                  isModule
                    ?
                    <>
                      <span>{`() `}</span>
                      <span className="code__function">{`=>`}</span>
                      <span>{` {`}</span>
                    </>
                    :
                    <>
                      <span className="code__function">{`function`}</span>
                      <span className="code__method">{` ${data?.defaultValueButtonCancelCallbackFn}`}</span>
                      <span>{`() {`}</span>
                    </>
                }
              </span>
              <span className="code__indent3 code__indent--py0">
                <span className="code__method">{`alert`}</span>
                <span>{`(`}</span>
                <span className="code__string">{`'`}</span>
                <span className="code__string">
                  <input
                    ref={(_inputCancelButtonCallback: HTMLInputElement) => refsDemoInputs.current[refsDemoInputsIndexes.cancelButtonCallback] = _inputCancelButtonCallback}
                    className="code__input"
                    placeholder={data?.demoInputPlaceholderCancelButtonCallback}
                    defaultValue={data?.defaultValueButtonCancelCallbackTxt}
                    type="text"
                    maxLength={110}
                  />
                </span>
                <span className="code__string">{`'`}</span>
                <span>{`);`}</span>
              </span>
              <span className="code__indent2 code__indent--py0">
                <span>{`},`}</span>
              </span>

              <span className="code__indent1 code__indent--pt0">
                <span>{`);`}</span>
              </span>
            </code>

            <button
              aria-label={data?.demoButtonText}
              type="button"
              onClick={demoButtonOnClickHandler}
              className={styles.item__demo__code__button}
            >
              <IconSend className={styles.item__demo__code__button__icon} />
              <span>{data?.demoButtonText}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PlaygroundItem;
