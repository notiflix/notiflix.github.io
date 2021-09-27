import { attributes as _appSocialMedia } from '@database/app/socialMedia.md';

function Schema(): JSX.Element {

  const { _dbAppSocialMedia } = _appSocialMedia;

  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': process.env.appName,
    'url': process.env.appUrl,
    'logo': `${process.env.appUrl}${process.env.appOgImagePath}`,
    'sameAs': _dbAppSocialMedia?.filter(x => x?.isActive)?.map(x => x?.url)?.map(x => x) || [],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />;
}

export default Schema;
