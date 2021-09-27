import Head from 'next/head';

import { attributes as _appMeta } from '@database/app/meta.md';
import { IDatabasePageMeta } from '@database/database.i';

import { routes } from '@application/routes';

interface IMetaTags {
  meta?: IDatabasePageMeta;
}

function MetaTags({ meta }: IMetaTags): JSX.Element {
  const { _dbAppMeta } = _appMeta;

  const appName = process.env.appName;
  const appUrl = process.env.appUrl;
  const appOgImagePath = process.env.appOgImagePath;

  const pathAs = routes.find(x => x?.id === meta?.routeId)?.pathAs || '';
  const canonicalUrl = `${appUrl || ''}${(pathAs?.length > 1 ? pathAs : '')}` || '';
  const yearInit = _dbAppMeta?.metaYearInit;
  const yearCurrent = new Date().getFullYear() || '';

  const metaBase = {
    languageCode: _dbAppMeta?.metaLanguageCode,
    language: _dbAppMeta?.metaLanguage,
    title: _dbAppMeta?.metaTitle,
    description: _dbAppMeta?.metaDescription,
    robots: _dbAppMeta?.metaRobots,
    themeColor: _dbAppMeta?.metaThemeColor,
    ogImage: appOgImagePath,
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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      <link rel="shortcut icon" href={`${appUrl}${'/favicon.png'}`} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="shortlink" href={canonicalUrl} />
      <meta name="generator" content={appName} />
      <meta name="designer" content={appName} />
      <meta name="copyright" content={`© ${yearInit}-${yearCurrent} ${appName}. ${_dbAppMeta?.metaCopyright}`} />

      {/* TODO: SEO */}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" />
    </Head>
  );
}

export default MetaTags;
