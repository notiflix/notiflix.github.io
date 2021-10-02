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

  const routePathAs = routes.find(x => x.id === meta?.routeId)?.pathAs || '/';
  const canonicalUrl = `${appUrl || ''}${(routePathAs.length > 1 ? routePathAs : '')}` || '';
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

  const ogImageUrl = `${appUrl}${(metaData.ogImage || appOgImagePath)}`;
  const themeColor = metaData.themeColor || metaBase.themeColor;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
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
      <meta name="author" content={_dbAppMeta?.metaAuthor} />
      <meta name="designer" content={_dbAppMeta?.metaAuthor} />
      <meta name="copyright" content={`© ${yearInit}-${yearCurrent} ${appName}. ${_dbAppMeta?.metaCopyright}`} />

      <meta property="og:site_name" content={appName} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={_dbAppMeta?.metaTwitterUser} />
      <meta name="twitter:creator" content={_dbAppMeta?.metaTwitterUser} />
      <meta name="twitter:domain" content={_dbAppMeta?.metaTwitterDomain} />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:description" content={metaData.description} />

      <link rel="manifest" href={`${appUrl}/manifest.json`} crossOrigin="use-credentials" />
      <meta name="theme-color" content={themeColor} />
      <meta name="application-name" content={appName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content={appName} />
      <link rel="apple-touch-icon" href={`${appUrl}/webapp/apple-touch-icon.png`} />
      <link rel="apple-touch-startup-image" href={`${appUrl}/webapp/index.png`} />

      <meta name="google-site-verification" content={_dbAppMeta?.metaGoogleSiteVerification} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&amp;display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata&amp;display=swap" />
    </Head>
  );
}

export default MetaTags;
