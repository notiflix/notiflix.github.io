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
  id: string;
  sortOrder: number;
  isActive: boolean;
  isModulePage: boolean;
  addToNextJSConfig: boolean;
  addToSitemap: boolean;
  showInHeaderMenu: boolean;
  showInFooterMenu: boolean;
  name: string;
  pathPage: string;
  pathAs: string;
  pathDBFile: string;
  isTargetBlank: boolean;
  IconComponent?: React.FC;
}

const routes: IRoutes[] = [
  // Page Home: begin
  {
    id: 'HOME',
    sortOrder: 1,
    isActive: true,
    isModulePage: false,
    addToNextJSConfig: true,
    addToSitemap: true,
    showInHeaderMenu: false,
    showInFooterMenu: false,
    name: 'Home',
    pathPage: '/home',
    pathAs: '/',
    pathDBFile: 'src/_database/pages/home.md',
    isTargetBlank: false,
    IconComponent: IconHome,
  },
  // Page Home: end

  // Page Notify: begin
  {
    id: 'NOTIFY',
    sortOrder: 2,
    isActive: true,
    isModulePage: true,
    addToNextJSConfig: true,
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Notify',
    pathPage: '/notify',
    pathAs: '/notify',
    pathDBFile: 'src/_database/pages/notify.md',
    isTargetBlank: false,
    IconComponent: IconNotify,
  },
  // Page Notify: end

  // Page Report: begin
  {
    id: 'REPORT',
    sortOrder: 3,
    isActive: true,
    isModulePage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Report',
    pathPage: '/report',
    pathAs: '/report',
    pathDBFile: 'src/_database/pages/report.md',
    isTargetBlank: false,
    IconComponent: IconReport,
  },
  // Page Report: end

  // Page Confirm: begin
  {
    id: 'CONFIRM',
    sortOrder: 4,
    isActive: true,
    isModulePage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Confirm',
    pathPage: '/confirm',
    pathAs: '/confirm',
    pathDBFile: 'src/_database/pages/confirm.md',
    isTargetBlank: false,
    IconComponent: IconConfirm,
  },
  // Page Confirm: end

  // Page Loading: begin
  {
    id: 'LOADING',
    sortOrder: 5,
    isActive: true,
    isModulePage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Loading',
    pathPage: '/loading',
    pathAs: '/loading',
    pathDBFile: 'src/_database/pages/loading.md',
    isTargetBlank: false,
    IconComponent: IconLoading,
  },
  // Page Loading: end

  // Page Block: begin
  {
    id: 'BLOCK',
    sortOrder: 6,
    isActive: true,
    isModulePage: true,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Block',
    pathPage: '/block',
    pathAs: '/block',
    pathDBFile: 'src/_database/pages/block.md',
    isTargetBlank: false,
    IconComponent: IconBlock,
  },
  // Page Block: end

  // Page Download: begin
  {
    id: 'DOWNLOAD',
    sortOrder: 7,
    isActive: true,
    isModulePage: false,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Download',
    pathPage: '/download',
    pathAs: '/download',
    pathDBFile: 'src/_database/pages/download.md',
    isTargetBlank: false,
    IconComponent: IconDownload,
  },
  // Page Download: end

  // Page Documentation: begin
  {
    id: 'DOCUMENTATION',
    sortOrder: 8,
    isActive: true,
    isModulePage: false,
    addToNextJSConfig: false, // TODO: will be true after the page has been created.
    addToSitemap: true,
    showInHeaderMenu: true,
    showInFooterMenu: true,
    name: 'Documentation',
    pathPage: '/documentation',
    pathAs: '/documentation',
    pathDBFile: 'src/_database/pages/documentation.md',
    isTargetBlank: false,
    IconComponent: IconDocumentation,
  },
  // Page Documentation: end
];

export type { IRoutes };

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
