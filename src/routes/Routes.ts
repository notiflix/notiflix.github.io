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

interface IRoutes {
  id: number;
  sortOrder: number;
  isActive: boolean;
  isProduct: boolean;
  addToNextJSConfig: boolean;
  addToSitemap: boolean;
  showInHeaderMenu: boolean;
  showInFooterMenu: boolean;
  name: string;
  pathAs: string;
  pathPage: string;
  pathDBFile: string;
  targetBlank: boolean;
  IconComponent?: React.FC;
}

const Routes: IRoutes[] = [
  // Page Home: begin
  {
    id: 1,
    sortOrder: 1,
    isActive: true,
    isProduct: false,
    addToNextJSConfig: true,
    addToSitemap: true,
    showInHeaderMenu: false,
    showInFooterMenu: false,
    name: 'Home',
    pathAs: '/',
    pathPage: '/home',
    pathDBFile: 'src/_database/pages/home.md',
    targetBlank: false,
    IconComponent: IconHome,
  },
  // Page Home: end

  // Page Notify: begin
  {
    id: 2,
    sortOrder: 2,
    isActive: true,
    isProduct: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Notify',
    pathAs: '/notify',
    pathPage: '/notify',
    pathDBFile: 'src/_database/pages/notify.md',
    targetBlank: false,
    IconComponent: IconNotify,
  },
  // Page Notify: end

  // Page Report: begin
  {
    id: 3,
    sortOrder: 3,
    isActive: true,
    isProduct: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Report',
    pathAs: '/report',
    pathPage: '/report',
    pathDBFile: 'src/_database/pages/report.md',
    targetBlank: false,
    IconComponent: IconReport,
  },
  // Page Report: end

  // Page Confirm: begin
  {
    id: 4,
    sortOrder: 4,
    isActive: true,
    isProduct: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Confirm',
    pathAs: '/confirm',
    pathPage: '/confirm',
    pathDBFile: 'src/_database/pages/confirm.md',
    targetBlank: false,
    IconComponent: IconConfirm,
  },
  // Page Confirm: end

  // Page Loading: begin
  {
    id: 5,
    sortOrder: 5,
    isActive: true,
    isProduct: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Loading',
    pathAs: '/loading',
    pathPage: '/loading',
    pathDBFile: 'src/_database/pages/loading.md',
    targetBlank: false,
    IconComponent: IconLoading,
  },
  // Page Loading: end

  // Page Block: begin
  {
    id: 6,
    sortOrder: 6,
    isActive: true,
    isProduct: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Block',
    pathAs: '/block',
    pathPage: '/block',
    pathDBFile: 'src/_database/pages/block.md',
    targetBlank: false,
    IconComponent: IconBlock,
  },
  // Page Block: end

  // Page Download: begin
  {
    id: 7,
    sortOrder: 7,
    isActive: true,
    isProduct: false,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Download',
    pathAs: '/download',
    pathPage: '/download',
    pathDBFile: 'src/_database/pages/download.md',
    targetBlank: false,
    IconComponent: IconDownload,
  },
  // Page Download: end

  // Page Documentation: begin
  {
    id: 8,
    sortOrder: 8,
    isActive: true,
    isProduct: false,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Documentation',
    pathAs: '/documentation',
    pathPage: '/documentation',
    pathDBFile: 'src/_database/pages/documentation.md',
    targetBlank: false,
    IconComponent: IconDocumentation,
  },
  // Page Documentation: end
];

export type { IRoutes };

export { Routes };
