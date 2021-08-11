import Head from 'next/head';
import { useRouter } from 'next/router';

import { attributes as _settings } from '@database/settings/settings.md';
import { IDatabaseMeta } from '@database/database.i';

interface IMetaTags {
  meta?: IDatabaseMeta;
}

function MetaTags({ meta }: IMetaTags): JSX.Element {
  const { _dbSettings } = _settings;
  const router = useRouter();

  const appName = process.env.appName;
  const appUrl = process.env.appUrl;
  const appOgImageSrc = process.env.appOgImageSrc;

  const canonicalUrl = `${appUrl || ''}${(router?.asPath?.length > 1 ? router.asPath : '')}` || '';
  const yearInit = _dbSettings?.metaYearInit;
  const yearCurrent = new Date().getFullYear() || '';

  const metaBase = {
    languageCode: _dbSettings?.metaLanguageCode,
    language: _dbSettings?.metaLanguage,
    title: _dbSettings?.metaTitle,
    description: _dbSettings?.metaDescription,
    robots: _dbSettings?.metaRobots,
    themeColor: _dbSettings?.metaThemeColor,
    ogImage: appOgImageSrc,
  };
  const metaData = { ...metaBase, ...meta };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="content-language" content={metaData.languageCode} />
      <meta name="language" content={metaData.language} />
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="robots" content={metaData.robots || metaBase.robots} />
      <meta name="googlebot" content={metaData.robots || metaBase.robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="shortcut icon" href={`${appUrl}${'/favicon.png'}`} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="shortlink" href={canonicalUrl} />
      <meta name="generator" content={appName} />
      <meta name="designer" content={appName} />
      <meta name="copyright" content={`© ${yearInit}-${yearCurrent} ${appName}. ${_dbSettings?.metaCopyright}`} />

      {/* TODO: SEO */}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap" rel="stylesheet" />
    </Head>
  );
}

export default MetaTags;
