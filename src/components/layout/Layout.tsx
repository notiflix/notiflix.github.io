import { useRouter } from 'next/router';

import { attributes as _dbSettings } from '@database/settings/app.md';
import { IDatabaseMeta } from '@database/database.i';

type TChildren = React.ReactNode
  | JSX.Element
  | JSX.Element[]
  | string
  | string[]
  | React.ReactChild
  | React.ReactChild[];

interface ILayout {
  children?: TChildren;
  meta?: IDatabaseMeta;
}

function Layout({ children, meta }: ILayout): JSX.Element {
  const { _databaseSettings } = _dbSettings;

  console.log('Layout Meta: ', meta);

  const router = useRouter();
  console.log('Layout Router: ', router);

  // schema "application/ld+json" meta
  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': process.env.appName,
    'url': process.env.publicUrl,
    'logo': _databaseSettings.metaOgImage,
    'sameAs': [], // TODO: Social Media Links from DB
  };

  return (
    <>
      {/* TODO: MetaTags */}
      {/* TODO: Header */}
      <noscript>
        <p className="noscript">{_databaseSettings.bodyNoScript}</p>
      </noscript>
      <section className={`section ${'todo'}`}>
        {children}
      </section>
      {/* TODO: Footer */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />
    </>
  );
}

export default Layout;
