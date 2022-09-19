import links from './links';
import { loadEnv } from 'vite';
import { defaultTheme, defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

export default defineUserConfig({
    lang: 'en-GB',
    title: 'UpfrontJS',
    description: 'Data handling framework complementary to backend model systems.',
    head: [
        ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/upfrontjs/design/5f54d4d13ab22b32ba1782480079ff2b997f82d2/upfrontjs-square.svg' }]
    ],
    markdown: {
        toc: {
            level: [2, 3, 4]
        }
    },
    plugins:[
        docsearchPlugin({
            appId: ALGOLIA_APP_ID,
            apiKey: ALGOLIA_API_KEY,
            indexName: ALGOLIA_INDEX_NAME
        }),
    ],

    theme: defaultTheme({
        navbar: [
            ...links.navbar
        ],
        sidebar: links.sidebar,
        repo: 'upfrontjs/framework',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLink: true
    })
});
