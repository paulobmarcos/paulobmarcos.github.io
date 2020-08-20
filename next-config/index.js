const withPlugins = require('next-compose-plugins');
const { withImages, withSvg } = require('./plugins');

module.exports = (phase, nextConfig) => withPlugins(
  [
    withImages(),
    withSvg(),
  ],
  {
    // Compress on build
    compress: '1',
    // Build Time Environment Variables
    env: {},
  },
)(phase, nextConfig);
