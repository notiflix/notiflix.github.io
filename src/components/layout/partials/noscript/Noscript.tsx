import { attributes as _appContent } from '@database/app/content.md';

function Noscript(): JSX.Element {
  const { _dbAppContent } = _appContent;

  return (
    <noscript className="noscript">
      <style>{`.noscript__message {box-sizing: border-box;outline: none;position: fixed;z-index: 9999;left: 0;top: 0;width: 100%;height: 100%;display: flex;flex-wrap: wrap;flex-direction: column;align-items: center;justify-content: center;text-align: center;margin: 0;padding: 1.25rem;font-family: sans-serif;font-size: 1rem;color: #f8f8f8;background: #1e1e1e;}`}</style>
      <p className="noscript__message">{_dbAppContent?.noscript?.message}</p>
    </noscript>
  );
}

export default Noscript;
