interface IRoutes {
  id: number;
  sortOrder: number;
  isActive: boolean;
  addToNextJSConfig: boolean;
  addToSitemap: boolean;
  addToNavMenu: boolean;
  name: string;
  pathAs: string;
  pathPage: string;
  pathDBFile: string;
  targetBlank: boolean;
  icon: {
    use: boolean;
    className: string;
  };
}

const Routes: Array<IRoutes> = [
  // Home Page
  {
    id: 1,
    sortOrder: 1,
    isActive: true,
    addToNextJSConfig: true,
    addToSitemap: true,
    addToNavMenu: true,
    name: 'Home',
    pathAs: '/',
    pathPage: '/home',
    pathDBFile: '/pages/about.md',
    targetBlank: false,
    icon: {
      use: false,
      className: 'fab fa-github',
    },
  },

  // About Page
  {
    id: 2,
    sortOrder: 2,
    isActive: true,
    addToNextJSConfig: true,
    addToSitemap: true,
    addToNavMenu: true,
    name: 'About',
    pathAs: '/about',
    pathPage: '/about',
    pathDBFile: '/pages/about.md',
    targetBlank: false,
    icon: {
      use: false,
      className: 'fab fa-github',
    },
  },

];

export type { IRoutes };

export { Routes };
