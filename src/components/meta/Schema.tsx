import { attributes as _socialMedia } from '@database/settings/socialMedia.md';

function Schema(): JSX.Element {

  const { _dbSocialMedia } = _socialMedia;

  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': process.env.appName,
    'url': process.env.appUrl,
    'logo': `${process.env.appUrl}${process.env.appOgImageSrc}`,
    'sameAs': _dbSocialMedia?.filter(x => x.isActive)?.map(x => x.url) || [],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />;
}

export default Schema;
