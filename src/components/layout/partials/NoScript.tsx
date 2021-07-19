import { attributes as _settings } from '@database/settings/settings.md';

function NoScript(): JSX.Element {
  const { _dbSettings } = _settings;

  return (
    <noscript className="noscript">
      <style>
        {`
        .noscript__message {
          box-sizing: border-box;
          outline: none;
          position: fixed;
          z-index: 9999;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: 0;
          padding: 1.25rem;
          font-family: sans-serif;
          font-size: 1rem;
          color: #f8f8f8;
          background: #1e1e1e;
        }
      `}
      </style>
      <p className="noscript__message">{_dbSettings.bodyNoScriptMessage}</p>
    </noscript>
  );
}

export default NoScript;
