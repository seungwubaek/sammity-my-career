// Guide for next-intl v3.0.0-rc.4 for server components
// https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
