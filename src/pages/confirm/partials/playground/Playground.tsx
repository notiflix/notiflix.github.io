import { useState } from 'react';

import { attributes as _appContent } from '@database/app/content.md';
import { attributes as _confirm } from '@database/pages/confirm.md';

import PlaygroundItem from '@pages/confirm/partials/playground-item/PlaygroundItem';

import styles from '@pages/confirm/partials/playground/Playground.module.scss';

function Playground(): JSX.Element {
  const { _dbAppContent } = _appContent;
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
          aria-label={_dbAppContent?.buttons?.switch}
          type="button"
          onClick={() => switchAsAModuleOnClickHandler(!stateConfirmIsModule)}
          className={[
            `${styles.playground__head__switch}`,
            `${styles[`playground__head__switch--${stateConfirmIsModule ? 'module' : 'global'}`] || ''}`,
          ].join(' ').trim()}
        >
          <span className={styles.playground__head__switch__text}>{stateConfirmIsModule ? _dbAppContent?.buttons?.module : _dbAppContent?.buttons?.global}</span>
        </button>
      </div>

      <div className={styles.playground__items}>
        {
          (_dbConfirmPlayground?.methods?.show) &&
          <PlaygroundItem
            isModule={stateConfirmIsModule}
            namespace={_dbConfirmPlayground.namespace}
            data={_dbConfirmPlayground.methods.show}
          />
        }
        {
          (_dbConfirmPlayground?.methods?.ask) &&
          <PlaygroundItem
            isModule={stateConfirmIsModule}
            namespace={_dbConfirmPlayground.namespace}
            data={_dbConfirmPlayground.methods.ask}
          />
        }
        {
          (_dbConfirmPlayground?.methods?.prompt) &&
          <PlaygroundItem
            isModule={stateConfirmIsModule}
            namespace={_dbConfirmPlayground.namespace}
            data={_dbConfirmPlayground.methods.prompt}
          />
        }
      </div>

    </div>
  );
}

export default Playground;
