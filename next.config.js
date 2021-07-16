/*!
* Notiflix
* Description: Next.js configuration.
* Version: 1.0.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2019-Present Notiflix, GPL-3.0 License ('https://opensource.org/licenses/GPL-3.0')
*/

// Dependencies
const package = require('./package.json');


// Contstants: begin
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const publicUrl = isProd ? (JSON.stringify((package || {}).homepage) || '').replace(/"/gm, '') : '';
// Contstants: end

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
    isDev: isDev,
    isProd: isProd,
    PUBLIC_URL: publicUrl,
  },

  // assets prefix
  assetPrefix: publicUrl,

  // extensions
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],

  // dist directory
  distDir: '.build',

  // TODO:
  redirects: async () => {
    return [
      {
        source: '/redirect-me',
        destination: '/redirect-to',
        permanent: false,
      },
    ]
  },

  // TODO:
  exportPathMap: async (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
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

    // return extended config
    return config;
  },

};
// Next Config: end

module.exports = nextConfig;
