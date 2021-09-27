import { existsSync, readFileSync, writeFileSync } from 'fs';

import { constants } from '../../constants';
import { routes } from '../../routes';
import { markdownParser } from '../markdown-parser';

// Constants: begin
const appUrl = constants.app.url;
const appName = constants.app.name;
const appOgImageUrl = `${appUrl}${constants.app.ogImagePath}`;
const urlSitemapStyle = `${appUrl}/sitemap.xsl`;
const urlSitemap = `${appUrl}/sitemap.xml`;
const pathSitemapOutput = 'public/sitemap.xml';
const pathRobotsTXTOutput = 'public/robots.txt';
const pathPages = 'src/pages';
// Constants: end


// Helper: Format Date as YYYY-MM-DD: begin
const sitemapFormatDate = (date: string): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1 + '').padStart(2, '0');
  const day = (d.getDate() + '').padStart(2, '0');
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

  // read the file and return "_dbPageMeta.lastModifiedDate"
  const fileAsText = readFileSync(path, 'utf-8');
  if (fileAsText) {
    const fileTextAsObj = markdownParser(fileAsText);
    const lastModifiedDate = fileTextAsObj?.attributes?._dbPageMeta?.lastModifiedDate || newDateAsString;
    return lastModifiedDate;
  }

  // else
  return newDateAsString;
};
// Helper: Get Pages Last Modified Date via DB file: end


// Sitemap: Create Url: begin
interface ISitemapCreateUrl {
  loc: string;
  lastMod: string;
  changefreq?: string;
  priority?: string;
  image?: string;
  caption?: string;
}

const sitemapCreateUrl = ({ loc, lastMod, changefreq, priority, image, caption }: ISitemapCreateUrl): string => {
  // image src
  let imageSrc = appOgImageUrl;
  if (image) {
    imageSrc = image;
  }

  // image caption
  let imageCaption = appName;
  if (caption) {
    imageCaption = caption.length > 50 ? `${caption.substring(0, 50).trim()}...` : caption.trim();
  }

  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${sitemapFormatDate(lastMod)}</lastmod>
    <changefreq>${changefreq || sitemapCreateFrequencyAndPriority(lastMod).frequency}</changefreq>
    <priority>${priority || sitemapCreateFrequencyAndPriority(lastMod).priority}</priority>
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
    routes?.filter(route => route?.isActive && route?.addToSitemap)?.map(route => {
      // page path
      let pagePath = route?.pathAs || '';

      // if home page
      if (pagePath === '/') { pagePath = ''; }

      // page full url
      const pageFullUrl = `${appUrl}${pagePath}`;

      // page last mod date
      const pageLastModifiedDate = sitemapGetPagesLastModifiedDate(route?.pathDBFile);

      // page frequency and priority
      const pageFrequency = route?.sitemapFrequency;
      const pagePriority = route?.sitemapPriority;

      // create a sitemap url for this page
      sitemapPagesUrls += sitemapCreateUrl({
        loc: pageFullUrl,
        lastMod: pageLastModifiedDate,
        changefreq: pageFrequency,
        priority: pagePriority,
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
  <?xml-stylesheet type="text/xsl" href="${urlSitemapStyle}"?>
  <urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapCreateUrlsFromPages()}
  </urlset>`;
};
// Sitemap: Create XML Content: end

// Sitemap: Write XML Content: begin
const sitemapWriteXMLFile = (pathSitemapOutput: string): void => {
  writeFileSync(pathSitemapOutput, sitemapCreateXmlPageContent());
};
sitemapWriteXMLFile(pathSitemapOutput);
// Sitemap: Write XML Content: end

// Robots.txt by Sitemap: begin
const sitemapWriteRobotsTxtFile = (): void => {
  const robotTXT = `Sitemap: ${urlSitemap}

# Google
User-agent: Googlebot
Disallow: /404

# Global
User-agent: *
Disallow: /404

# Yandex
User-agent: Yandex
Disallow: /404

# Microsoft
User-Agent: msnbot
Disallow: /404
`;
  writeFileSync(pathRobotsTXTOutput, robotTXT);
};
sitemapWriteRobotsTxtFile();
// Robots.txt by Sitemap: end
