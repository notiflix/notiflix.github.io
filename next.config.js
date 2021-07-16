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
  images: {
    loader: 'imgix',
    disableStaticImages: true,
  },

  // gzip enabled => default is true
  compress: true,

  // remove "x-powered-by"
  poweredByHeader: false,

  // remove dev tools
  devIndicators: {
    autoPrerender: false,
  },

  // add "/" to end of the pages link (true => affects all assets and pages URLs)
  trailingSlash: false,

  // custom environments
  env: {
    isDev: isDev,
    isProd: isProd,
    PUBLIC_URL: publicUrl,
  },

  // assets prefix
  assetPrefix: publicUrl,

  // TODO:
  async redirects() {
    return [
      {
        source: '/redirect-me',
        destination: '/redirect-to',
        permanent: false,
      },
    ]
  },

  // TODO:
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    }
  },

  // Build ID, Dir, and Ext
  distDir: '.build',
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
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
