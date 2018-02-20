'use strict';

const path = require('path');
const sass = require('node-sass');
const chalk = require('chalk');
const fs = require('fs');
const paths = require('../config/paths');

module.exports = function buildLegacySass() {
  const legacySrcInputSassPath = path.join(paths.appSrc, 'legacy.scss');
  const legacySrcOutputCssPath = path.join(paths.appSrc, 'legacy.css');
  if (fs.existsSync(legacySrcInputSassPath)) {
    console.log(
      chalk.cyan(
        'Detected `src/legacy.scss`, attempting to compile to `src/legacy.css` using node-sass.'
      )
    );

    const { css } = sass.renderSync({
      file: legacySrcInputSassPath,
      includePaths: [paths.appNodeModules],
    });

    fs.writeFileSync(legacySrcOutputCssPath, css);

    console.log(
      chalk.cyan('Successfully wrote compiled Sass to `src/legacy.css`')
    );
  }

  const legacyDemoInputSassPath = path.join(paths.appDemo, 'legacy.scss');
  const legacyDemoOutputCssPath = path.join(paths.appDemo, 'legacy.css');
  if (fs.existsSync(legacyDemoInputSassPath)) {
    console.log(
      chalk.cyan(
        'Detected `demo/legacy.scss`, attempting to compile to `demo/legacy.css` using node-sass.'
      )
    );

    const { css } = sass.renderSync({
      file: legacyDemoInputSassPath,
      includePaths: [paths.appNodeModules],
    });

    fs.writeFileSync(legacyDemoOutputCssPath, css);

    console.log(
      chalk.cyan('Successfully wrote compiled Sass to `demo/legacy.css`')
    );
  }
};
