const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer');
//const { i18n } = require('./next-i18next.config');

module.exports = (phase, nextConfig) =>
  withPlugins([withBundleAnalyzer({ enabled: false })], {
    // Compress on build
    compress: '1',
    // Public Runtime Config
    publicRuntimeConfig: {},
    // Identify unsafe lifecycles, legacy API usage, ...
    reactStrictMode: true,
    // Internationalization - Disabled since it's not supported in static.
    // i18n,
    // Build Time Environment Variables
    env: {},
  })(phase, nextConfig);
