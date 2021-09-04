import {
  FiHome as IconHome,
  FiBell as IconNotify,
  FiInfo as IconReport,
  FiCheckCircle as IconConfirm,
  FiLoader as IconLoading,
  FiShield as IconBlock,
  FiDownloadCloud as IconDownload,
  FiBook as IconDocumentation,
} from 'react-icons/fi';

import { EPageId } from '../enumerations/page-id';


type TRoutesFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';
type TRoutesPriority = '1.0' | '0.9' | '0.8' | '0.7' | '0.6' | '0.5';

interface IRoutes {
  id: string;
  sortOrder: number;
  isActive: boolean;
  isProductPage: boolean;
  addToNextJSConfig: boolean;
  addToSitemap: boolean;
  sitemapFrequency?: TRoutesFrequency;
  sitemapPriority?: TRoutesPriority;
  showInHeaderMenu: boolean;
  showInFooterMenu: boolean;
  isTargetBlank: boolean;
  name: string;
  pathPage: string;
  pathAs: string;
  pathDBFile: string;
  IconComponent?: React.FC;
}

const routes: IRoutes[] = [
  // Page Home: begin
  {
    id: EPageId.HOME,
    sortOrder: 1,
    isActive: true,
    isProductPage: false,
    addToNextJSConfig: true,
    addToSitemap: true,
    sitemapFrequency: 'daily',
    sitemapPriority: '1.0',
    showInHeaderMenu: false,
    showInFooterMenu: false,
    isTargetBlank: false,
    name: 'Home',
    pathPage: '/home',
    pathAs: '/',
    pathDBFile: 'src/_database/pages/home.md',
    IconComponent: IconHome,
  },
  // Page Home: end

  // Page Notify: begin
  {
    id: EPageId.NOTIFY,
    sortOrder: 2,
    isActive: true,
    isProductPage: true,
    addToNextJSConfig: true,
    addToSitemap: true,
    sitemapFrequency: 'weekly',
    sitemapPriority: '1.0',
    showInHeaderMenu: true,
    showInFooterMenu: true,
    isTargetBlank: false,
    name: 'Notify',
    pathPage: '/notify',
    pathAs: '/notify',
    pathDBFile: 'src/_database/pages/notify.md',
    IconComponent: IconNotify,
  },
  // Page Notify: end

  // Page Report: begin
  {
    id: EPageId.REPORT,
    sortOrder: 3,
    isActive: true,
    isProductPage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    sitemapFrequency: 'weekly',
    sitemapPriority: '1.0',
    showInHeaderMenu: true,
    showInFooterMenu: true,
    isTargetBlank: false,
    name: 'Report',
    pathPage: '/report',
    pathAs: '/report',
    pathDBFile: 'src/_database/pages/report.md',
    IconComponent: IconReport,
  },
  // Page Report: end

  // Page Confirm: begin
  {
    id: EPageId.CONFIRM,
    sortOrder: 4,
    isActive: true,
    isProductPage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    sitemapFrequency: 'weekly',
    sitemapPriority: '1.0',
    showInHeaderMenu: true,
    showInFooterMenu: true,
    isTargetBlank: false,
    name: 'Confirm',
    pathPage: '/confirm',
    pathAs: '/confirm',
    pathDBFile: 'src/_database/pages/confirm.md',
    IconComponent: IconConfirm,
  },
  // Page Confirm: end

  // Page Loading: begin
  {
    id: EPageId.LOADING,
    sortOrder: 5,
    isActive: true,
    isProductPage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    sitemapFrequency: 'weekly',
    sitemapPriority: '1.0',
    showInHeaderMenu: true,
    showInFooterMenu: true,
    isTargetBlank: false,
    name: 'Loading',
    pathPage: '/loading',
    pathAs: '/loading',
    pathDBFile: 'src/_database/pages/loading.md',
    IconComponent: IconLoading,
  },
  // Page Loading: end

  // Page Block: begin
  {
    id: EPageId.BLOCK,
    sortOrder: 6,
    isActive: true,
    isProductPage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    sitemapFrequency: 'weekly',
    sitemapPriority: '1.0',
    showInHeaderMenu: true,
    showInFooterMenu: true,
    isTargetBlank: false,
    name: 'Block',
    pathPage: '/block',
    pathAs: '/block',
    pathDBFile: 'src/_database/pages/block.md',
    IconComponent: IconBlock,
  },
  // Page Block: end

  // Page Download: begin
  {
    id: EPageId.DOWNLOAD,
    sortOrder: 7,
    isActive: true,
    isProductPage: false,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    sitemapFrequency: 'monthly',
    sitemapPriority: '0.9',
    showInHeaderMenu: true,
    showInFooterMenu: true,
    isTargetBlank: false,
    name: 'Download',
    pathPage: '/download',
    pathAs: '/download',
    pathDBFile: 'src/_database/pages/download.md',
    IconComponent: IconDownload,
  },
  // Page Download: end

  // Page Documentation: begin
  {
    id: EPageId.DOCUMENTATION,
    sortOrder: 8,
    isActive: true,
    isProductPage: false,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    sitemapFrequency: 'monthly',
    sitemapPriority: '1.0',
    showInHeaderMenu: true,
    showInFooterMenu: true,
    isTargetBlank: false,
    name: 'Documentation',
    pathPage: '/documentation',
    pathAs: '/documentation',
    pathDBFile: 'src/_database/pages/documentation.md',
    IconComponent: IconDocumentation,
  },
  // Page Documentation: end
];

export type {
  IRoutes,
  TRoutesFrequency,
  TRoutesPriority,
};

export {
  routes,
  IconHome,
  IconNotify,
  IconReport,
  IconConfirm,
  IconLoading,
  IconBlock,
  IconDownload,
  IconDocumentation,
};
