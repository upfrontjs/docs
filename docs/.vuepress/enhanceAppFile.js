export default ({
                    Vue, // the version of Vue being used in the VuePress app
                    options, // the options for the root Vue instance
                    router, // the router instance for the app
                    siteData, // site metadata
                    isServer // is this enhancement applied in server-rendering or client
                }) => {
    if (!isServer) {
        document.addEventListener('keydown', ev => {
            if ((ev.key === 'k' || ev.key === 'K') && ev.metaKey) {
                ev.preventDefault();
                document.querySelector('div.search-box>input')?.focus();
            }
        })
    }
}
