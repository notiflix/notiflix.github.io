import { useEffect, useState } from 'react';
import { FiArrowUp as IconArrowUp } from 'react-icons/fi';

import { attributes as _appContent } from '@database/app/content.md';

import { classNames } from '@application/helpers/utilities';

import styles from '@components/layout/partials/go-to-top/GoToTop.module.scss';

function GoToTop(): JSX.Element {
  const { _dbAppContent } = _appContent;

  // GotoTop OnClick Handler: begin
  const goToTopOnClickHandler = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  // GotoTop OnClick Handler: end

  // GotoTop Show/Hide: begin
  const [stateIsVisible, setStateIsVisible] = useState<boolean>(false);
  const documentScrollListener = (): void => {
    setStateIsVisible(window.document.documentElement?.scrollTop > (window.innerHeight * 1.25));
  };
  useEffect(() => {
    window.document.addEventListener('scroll', documentScrollListener);
    return () => {
      window.document.removeEventListener('scroll', documentScrollListener);
    };
  }, []);
  // GotoTop Show/Hide: end

  return (
    <button
      aria-label={_dbAppContent?.buttons?.goToTop}
      type="button"
      onClick={goToTopOnClickHandler}
      className={classNames(styles.root, {
        [styles.isVisible]: stateIsVisible,
      })}
    >
      <IconArrowUp />
    </button>
  );
}

export default GoToTop;
