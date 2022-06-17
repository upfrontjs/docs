const { path } = require('@vuepress/shared-utils')

/**
 * @type {import('@vuepress/types').Plugin}
 */
module.exports = {
    name: 'search-shortcut',
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceAppFile.js')
    ],
}
