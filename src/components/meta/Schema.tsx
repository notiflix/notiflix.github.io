import { attributes as _settings } from '@database/settings/settings.md';
import { attributes as _socialMedia } from '@database/settings/socialMedia.md';

function Schema(): JSX.Element {

  const { _dbSettings } = _settings;
  const { _dbSocialMedia } = _socialMedia;

  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': process.env.appName,
    'url': process.env.publicUrl,
    'logo': _dbSettings.metaOgImage,
    'sameAs': _dbSocialMedia.filter(x => x.isActive).map(x => x.url),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />;
}

export default Schema;
