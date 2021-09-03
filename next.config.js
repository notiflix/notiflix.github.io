/*!
* Notiflix
* Description: Next.js configuration.
* Version: 1.0.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2019-Present Notiflix, GPL-3.0 License ('https://opensource.org/licenses/GPL-3.0')
*/

// Dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const StylelintPlugin = require('stylelint-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { constants } = require('./.dev/src/application/constants');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { routes } = require('./.dev/src/application/routes');


// Constants: begin
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const appUrl = isProd ? constants.app.url : '';
const appName = constants.app.name;
const appVersion = constants.app.version;
const appOgImageSrc = constants.app.ogImageSrc;
// Constants: end

// Next Config: begin
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ts
  typescript: {
    ignoreBuildErrors: false,
  },

  // eslint
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },

  // next images
  images: {
    loader: 'imgix',
    disableStaticImages: true,
  },

  // enable/disable gzip
  compress: true,

  // add/remove "x-powered-by"
  poweredByHeader: false,

  // add/remove "/" to URLs
  trailingSlash: false,

  // custom env
  env: {
    isDev,
    isProd,
    appUrl,
    appName,
    appVersion,
    appOgImageSrc,
  },

  // assets prefix
  assetPrefix: appUrl,

  // extensions
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],

  // dist directory
  distDir: '.build',

  // sass
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // useless with next export
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/redirect-me',
        destination: '/redirect-to',
        permanent: false,
      },
    ];
  },

  // static paths
  exportPathMap: async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultPathMap,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { dev, dir, outDir, distDir, buildId },
  ) => {

    let defaultPaths = {
      '/': { page: '/home' },
      '/404': { page: '/404' },
    };

    routes?.filter(route => route.isActive && route.addToNextJSConfig)?.map(route => {
      const routePath = {
        [route.pathAs]: { page: route.pathPage },
      };
      defaultPaths = { ...defaultPaths, ...routePath };
    });

    return defaultPaths;
  },

  // Build ID
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `BID-${new Date().getTime()}`;
    }
  },

  // Webpack config
  webpack: (config, { isServer, isDev }) => {
    // frontmatter markdown loader
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      },
    );

    // Fixes npm packages that depend on "fs" module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    // eslint
    if (isDev) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/**/*.{ts,tsx,js,jsx}',
          memoryLimit: 8192,
        },
      }));
    }

    // stylelint
    if (isDev) {
      config.plugins.push(new StylelintPlugin({
        files: './src/**/*.scss',
      }));
    }

    // return extended config
    return config;
  },

};
// Next Config: end

module.exports = nextConfig;
