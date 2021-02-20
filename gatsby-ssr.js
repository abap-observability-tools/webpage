/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        <meta name="monetization" content="$ilp.uphold.com/7YxeW4A4NqQA"></meta>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={withPrefix('assets/js/init.js')} />
            <script src={withPrefix('assets/js/page-load.js')} />
            <script src={withPrefix('assets/js/page-unload.js')} />

        </React.Fragment>
    ]);

};
