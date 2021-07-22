/*!
* Notiflix
* Description: Next.js configuration.
* Version: 1.0.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2019-Present Notiflix, GPL-3.0 License ('https://opensource.org/licenses/GPL-3.0')
*/

// Dependencies
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { Constants } = require('./.dev/src/constants/Constants');
const { Routes } = require('./.dev/src/routes/Routes');

// Constants: begin
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const appUrl = isProd ? Constants.appUrl : '';
const appName = Constants.appName;
const appVersion = Constants.appVersion;
// Constants: end

// Next Config: begin
const nextConfig = {
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

  // TODO:
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
    ]
  },

  exportPathMap: async (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) => {

    let defaultPaths = {
      '/': { page: '/home' },
    };

    Routes?.filter(route => route.isActive && route.addToNextJSConfig)?.map(route => {
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
  webpack: (config, { dev, isServer }) => {
    // frontmatter markdown loader
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
      }
    );

    // Fixes npm packages that depend on "fs" module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    // stylelint
    config.plugins.push(new StylelintPlugin({
      files: "./src/**/*.scss",
    }));

    // return extended config
    return config;
  },

};
// Next Config: end

module.exports = nextConfig;
