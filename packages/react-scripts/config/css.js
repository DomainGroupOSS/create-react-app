'use strict';
const feBrary = require('@domain-group/fe-brary');

module.exports = function generateTheme(theme) {
  const themeVars = feBrary.themeVariables[theme];

  const postcssCustomPropertiesVariables = Object.values(
    themeVars
  ).reduce((acc, cssVars) => {
    Object.entries(cssVars).forEach(([key, value]) => {
      // camelCase to kebab-case
      acc[key.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase()] = value;
    });
    return acc;
  }, {});

  const postcssApplyRuleSets = {
    'font-h1': `
      font-size: var(--h1-mobile-font-size);
      line-height: var(--h1-mobile-line-height);

      @media (--tablet-min-width) {
        font-size: var(--h1-font-size);
        line-height: var(--h1-line-height);
      }
    `,
    'a-normalize': `
      color: inherit;
      text-decoration: inherit;

      &:hover,
      &:focus,
      &:visited,
      &:active {
        color: inherit;
        text-decoration: inherit;
      }
    `,
  };

  const postcssCustomMediaExtensions = {
    // var(--tablet-min-width) did not work
    '--tablet-min-width': `(min-width: ${themeVars.global.tabletMinWidth})`,
  };

  return {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: loader => [
      require('postcss-flexbugs-fixes'),
      require('postcss-import')({ root: loader.resourcePath }),
      require('postcss-cssnext')({
        // postcss-cssnext passes `browsers` to multiple features, including autoprefixer
        // https://github.com/MoOx/postcss-cssnext/blob/3.1.0/src/index.js#L29-L33
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        features: {
          autoprefixer: {
            flexbox: 'no-2009',
          },
          customProperties: {
            variables: postcssCustomPropertiesVariables,
          },
          applyRule: {
            sets: postcssApplyRuleSets,
          },
          customMedia: {
            extensions: postcssCustomMediaExtensions,
          },
        },
      }),
    ],
  };
};
