'use strict';

const browsers = require('./package.json').browserslist;

module.exports = {
  plugins: {
    // Enable @import
    [require.resolve('postcss-import')]: {},
    // Enable transformation of url()
    [require.resolve('postcss-url')]: {
      url: 'inline',
    },
    // Enable mixins
    [require.resolve('postcss-mixins')]: {
      mixinsDir: './www/shared/styles/imports/mixins',
    },
    // Enable postcss-preset-env
    [require.resolve('postcss-preset-env')]: {
      stage: 3,
      browsers: browsers || ['extends browserslist-config-google'],
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
      insertAfter: {
        'nesting-rules': require('postcss-css-variables')({ preserveAtRulesOrder: true }),
      },
    },
  },
};
