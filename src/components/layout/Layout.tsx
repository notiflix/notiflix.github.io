import { attributes as _settings } from '@database/settings/settings.md';
import { IDatabaseMeta } from '@database/database.i';

import Schema from '@components/meta/Schema';
import MetaTags from '@components/meta/MetaTags';

type TChildren = React.ReactNode
  | JSX.Element
  | JSX.Element[]
  | string
  | string[]
  | React.ReactChild
  | React.ReactChild[];

interface ILayout {
  meta: IDatabaseMeta;
  children?: TChildren;
}

function Layout({ meta, children }: ILayout): JSX.Element {
  const { _dbSettings } = _settings;

  return (
    <>
      <MetaTags meta={meta} />
      {/* TODO: Header */}
      <noscript>
        <p className="noscript">{_dbSettings.bodyNoScript}</p>
      </noscript>
      <section className={`section ${'todo'}`}>
        {children}
      </section>
      {/* TODO: Footer */}
      <Schema />
    </>
  );
}

export default Layout;
