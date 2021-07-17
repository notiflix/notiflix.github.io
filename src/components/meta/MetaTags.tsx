import Head from 'next/head';
import { useRouter } from 'next/router';

import { attributes as _settings } from '@database/settings/settings.md';
import { IDatabaseMeta } from '@database/database.i';

interface IMetaTags {
  meta: IDatabaseMeta;
}

function MetaTags({ meta }: IMetaTags): JSX.Element {
  const { _dbSettings } = _settings;
  const router = useRouter();

  const appName = process.env.appName;
  const publicUrl = process.env.publicUrl;
  const canonical = `${publicUrl || ''}${(router?.asPath?.length > 1 ? router.asPath : '')}` || '';
  const yearInit = _dbSettings.metaYearInit;
  const yearCurrent = new Date().getFullYear() || '';

  const metaBase = {
    languageCode: _dbSettings.metaLanguageCode,
    language: _dbSettings.metaLanguage,
    title: _dbSettings.metaTitle,
    description: _dbSettings.metaDescription,
    robots: _dbSettings.metaRobots,
    themeColor: _dbSettings.metaThemeColor,
    ogImage: _dbSettings.metaOgImage,
  };
  const metaData = { ...meta, ...metaBase };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="content-language" content={metaData.languageCode} />
      <meta name="language" content={metaData.language} />
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="robots" content={metaData.robots} />
      <meta name="googlebot" content={metaData.robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="shortcut icon" href={`${publicUrl}${'/favicon.png'}`} />

      <link rel="canonical" href={canonical} />
      <link rel="shortlink" href={canonical} />
      <meta name="generator" content={appName} />
      <meta name="designer" content={appName} />
      <meta name="copyright" content={`Copyright ${yearInit}-${yearCurrent} ${appName}. ${_dbSettings.metaCopyright}`} />

      {/* TODO: SEO */}
    </Head>
  );
}

export default MetaTags;
