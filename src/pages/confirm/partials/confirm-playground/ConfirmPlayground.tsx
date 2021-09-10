import { useState } from 'react';

import { attributes as _confirm } from '@database/pages/confirm.md';

import { constants } from '@application/constants';

import ConfirmPlaygroundItem from '@pages/confirm/partials/confirm-playground-item/ConfirmPlaygroundItem';

import styles from '@pages/confirm/partials/confirm-playground/ConfirmPlayground.module.scss';

function ConfirmPlayground(): JSX.Element {
  const { _dbConfirmPlayground } = _confirm;

  // Switch As Module: begin
  const [stateConfirmIsModule, setStateConfirmIsModule] = useState<boolean>(true);
  const switchAsAModuleOnClickHandler = (isAModule: boolean): void => {
    setStateConfirmIsModule(isAModule);
  };
  // Switch As Module: end

  return (
    <div className={styles.playground}>

      <div className={styles.playground__head}>
        <h2 className={styles.playground__head__title}>{_dbConfirmPlayground?.title}</h2>
        <button
          aria-label={constants.app.text.switch}
          onClick={() => switchAsAModuleOnClickHandler(!stateConfirmIsModule)}
          className={[
            `${styles.playground__head__switch}`,
            `${styles[`playground__head__switch--${stateConfirmIsModule ? 'module' : 'global'}`] || ''}`,
          ].join(' ').trim()}
        >
          <span className={styles.playground__head__switch__text}>{stateConfirmIsModule ? constants.app.text.module : constants.app.text.global}</span>
        </button>
      </div>

      <div className={styles.playground__items}>
        {
          (_dbConfirmPlayground?.methods?.show) &&
          <ConfirmPlaygroundItem
            isModule={stateConfirmIsModule}
            namespace={_dbConfirmPlayground.namespace}
            data={_dbConfirmPlayground.methods.show}
          />
        }
        {
          (_dbConfirmPlayground?.methods?.ask) &&
          <ConfirmPlaygroundItem
            isModule={stateConfirmIsModule}
            namespace={_dbConfirmPlayground.namespace}
            data={_dbConfirmPlayground.methods.ask}
          />
        }
      </div>

    </div>
  );
}

export default ConfirmPlayground;
