const links = require('./links');

module.exports = context => ({
    globalUIComponents: [
        'ThemeManager'
    ],
    theme: 'succinct',
    title: 'UpfrontJS',
    description: 'Data handling framework complementary to backend model systems.',
    plugins: [
        ['one-click-copy', {
            copySelector: ['div[class*="language-shell"] pre', 'div[class*="aside-code"] aside'],
            copyMessage: 'Copied!',
        }],
        ['@vuepress/back-to-top'],
        ['fulltext-search'],
        ['@mr-hope/seo']
    ],
    markdown: {
        lineNumbers: true,
        toc: {
            includeLevel: [2, 3, 4]
        }
    },
    themeConfig: {
        prefersTheme: 'dark',
        nav: [
            ...links.nav
        ],
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        evergreen: true,
        displayAllHeaders: true,
        initialOpenGroupIndex: 0,

        sidebar: links.sidebar,

        repo: 'upfrontjs/framework',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Help me improve this page!'
    }
});

// todo - versioning (full text search should still work the same)
//    https://github.com/robsontenorio/lighthouse/blob/master/docs/.vuepress/enhanceApp.js
//    https://community.netlify.com/t/custom-subdomain-for-branch-deploy/1686
