import { existsSync, readFileSync, writeFileSync } from 'fs';
import { Constants } from '../constants/Constants';
import { Routes } from '../routes/Routes';

// Constants: begin
const appUrl = Constants.appUrl;
const appName = Constants.appName;
const appOgImageSrc = `${Constants.appUrl}${Constants.appOgImageSrc}`;
const sitemapStyleUrl = `${Constants.appUrl}/sitemap.xsl`;
const pathOutput = 'public/sitemap.xml';
const pathPages = 'src/pages';
// Constants: end


// Helper: Format Date as YYYY-MM-DD: begin
const sitemapFormatDate = (date: string): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  if (month.length < 2) { month = '0' + month; }
  if (day.length < 2) { day = '0' + day; }
  return [year, month, day].join('-');
};
// Helper: Format Date as YYYY-MM-DD: end

// Helper: Create "changefreq" and "priority": begin
interface ISitemapCreateFrequencyAndPriority {
  frequency: string;
  priority: string;
}

const sitemapCreateFrequencyAndPriority = (date: string): ISitemapCreateFrequencyAndPriority => {
  const today = new Date().valueOf();
  const pageDate = new Date(date).valueOf();
  const differenceAsDays = Math.round((today - pageDate) / (1000 * 3600 * 24));
  let frequency = 'daily';
  let priority = '1.0';
  if (differenceAsDays > 365) {
    frequency = 'yearly';
    priority = '0.7';
  }
  if (differenceAsDays > 93) {
    frequency = 'monthly';
    priority = '0.8';
  }
  if (differenceAsDays > 7) {
    frequency = 'weekly';
    priority = '0.9';
  }
  return {
    frequency,
    priority,
  };
};
// Helper: Create "changefreq" and "priority": end

// Helper: Get Pages Last Modified Date via DB file: begin
const sitemapGetPagesLastModifiedDate = (path: string): string => {
  const newDateAsString = new Date().toString();

  // check the file is exist
  if (!existsSync(path)) {
    return newDateAsString;
  }

  // read the file and return "pageMeta.lastModifiedDate"
  const fileAsText = readFileSync(path, 'utf-8');
  if (fileAsText) {
    // TODO: require!!!
    // @typescript-eslint/no-var-requires
    // eslint-disable-next-line
    const parseMD = require('parse-md').default;
    const fileTextAsObj = parseMD(fileAsText);
    return fileTextAsObj?.metadata?._dbMeta?.lastModifiedDate || newDateAsString;
  }

  // else
  return newDateAsString;
};
// Helper: Get Pages Last Modified Date via DB file: end


// Sitemap: Create Url: begin
interface ISitemapCreateUrl {
  loc: string;
  lastMod: string;
  image?: string;
  caption?: string;
}

const sitemapCreateUrl = ({ loc, lastMod, image, caption }: ISitemapCreateUrl): string => {
  // image src
  let imageSrc = appOgImageSrc;
  if (image) {
    imageSrc = image;
  }

  // image caption
  let imageCaption = appName;
  if (caption) {
    imageCaption = caption.length > 50 ? caption.substring(0, 50) + '...' : caption;
  }

  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${sitemapFormatDate(lastMod)}</lastmod>
    <changefreq>${sitemapCreateFrequencyAndPriority(lastMod).frequency}</changefreq>
    <priority>${sitemapCreateFrequencyAndPriority(lastMod).priority}</priority>
    <image:image>
      <image:loc>${imageSrc}</image:loc>
      <image:caption>${imageCaption}</image:caption>
    </image:image>
  </url>
  `;
};
// Sitemap: Create Url: end

// Sitemap: Create Urls from Pages: begin
const sitemapCreateUrlsFromPages = (): string => {
  let sitemapPagesUrls = '';

  // if Pages folders exist
  if (existsSync(pathPages)) {
    Routes?.filter(route => route.isActive && route.addToSitemap)?.map(route => {
      // page path
      let pagePath = route.pathAs || '';

      // if home page
      if (pagePath === '/') { pagePath = ''; }

      // page full url
      const pageFullUrl = `${appUrl}${pagePath}`;

      // page last mod date
      const pageLastModifiedDate = sitemapGetPagesLastModifiedDate(route.pathDBFile);

      // create a sitemap url for this page
      sitemapPagesUrls += sitemapCreateUrl({
        loc: pageFullUrl,
        lastMod: pageLastModifiedDate,
      });
    });
  }

  // Return Urls
  return sitemapPagesUrls;
};
// Sitemap: Create Urls from Pages: end


// Sitemap: Create XML Content: begin
const sitemapCreateXmlPageContent = (): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="${sitemapStyleUrl}"?>
  <urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapCreateUrlsFromPages()}
  </urlset>`;
};
// Sitemap: Create XML Content: end

// Sitemap: Write XML Content: begin
const sitemapWriteXMLFile = (pathOutput: string): void => {
  writeFileSync(pathOutput, sitemapCreateXmlPageContent());
};
sitemapWriteXMLFile(pathOutput);
// Sitemap: Write XML Content: end
