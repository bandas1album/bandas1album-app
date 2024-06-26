// .lintstagedrc.js
// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  ['src/{components,pages,templates}/**/*']: [
    buildEslintCommand,
    'yarn test --findRelatedTests --passWithNoTests --bail'
  ]
}
