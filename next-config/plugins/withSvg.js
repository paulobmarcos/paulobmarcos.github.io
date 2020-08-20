module.exports = (userOptions = {}) => (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    const { assetPrefix = '' } = nextConfig;
    const { dev, isServer } = options;

    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('svg-inline-loader'),
      ...userOptions,
      options: {
        limit: 0,
        name: dev ? 'svgs/[name].[ext]' : 'svgs/[name].[hash:15].[ext]',
        publicPath: `${assetPrefix}/_next/static/chunks/media`,
        outputPath: 'static/chunks/media',
        emitFile: !isServer,
        ...userOptions.options,
      },
    });

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});
