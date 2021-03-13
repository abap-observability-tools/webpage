const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        {
            resolve: `gatsby-plugin-csp`,
            options: {
                disableOnDev: false,
                reportOnly: true, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
                mergeScriptHashes: true, // you can disable scripts sha256 hashes
                mergeStyleHashes: true, // you can disable styles sha256 hashes
                mergeDefaultDirectives: true,
                directives: {
                    "script-src": "'self' https://opencollective.com/",
                    "style-src": "'self' data: https://opencollective.com/",
                    "img-src": "'self' data: https://opencollective.com/"
                }
            }
        }
    ]
};
