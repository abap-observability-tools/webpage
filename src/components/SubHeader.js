import React from "react";
import _ from "lodash";

import { classNames } from "../utils";
import Action from "./Action";

export default class SubHeader extends React.Component {
  render() {
    const uri = _.get(this.props, "uri", null);
    const navs = _.get(
      this.props,
      "pageContext.site.siteMetadata.header.nav_links",
      null
    );
    const subHeader = _.find(navs, { url: uri });
    const navLinks = _.get(subHeader, "subHeader.nav_links", null);
    return (
      <div>
        {navLinks ? (
          <header className="site-header">
            <div className="container container--lg">
              <nav className="navbar" aria-label="Main Navigation">
                {_.get(
                  this.props,
                  "pageContext.site.siteMetadata.header.has_nav",
                  null
                ) && (
                  <React.Fragment>
                    <div className="navbar__menu">
                      <div className="navbar__scroller">
                        <div className="navbar__inner">
                          <ul className="navbar__list menu">
                            {_.map(
                              _.get(subHeader, "subHeader.nav_links", null),
                              (action, action_idx) => {
                                let pageUrl = _.trim(
                                  _.get(this.props, "pageContext.url", null),
                                  "/"
                                );
                                let actionUrl = _.trim(
                                  _.get(action, "url", null),
                                  "/"
                                );
                                return (
                                  <li
                                    key={action_idx}
                                    className={classNames("navbar__item", {
                                      "navbar__item--btn":
                                        _.get(action, "style", null) !== "link",
                                      "is-active": pageUrl === actionUrl,
                                    })}
                                  >
                                    <Action {...this.props} action={action} />
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </nav>
            </div>
          </header>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
