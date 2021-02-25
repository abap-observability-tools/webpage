import React from 'react';
import _ from 'lodash';

import { classNames } from '../utils';

export default class SponsoringSection extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.type = 'text/javascript';
        script.async = true;
        script.src = "https://opencollective.com/abap-observability-tools/banner.js";
        document.getElementById("banner").appendChild(script);

    }

    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--sponsoring">
                <div className="container container--lg">
                    <div className={classNames('section__body', 'align-center', { 'inverse bg-blue': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'gray') })}>
                        <div className="container container--md">
                            {_.get(section, 'title', null) && (
                                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                            )}
                            <div className="align-center">
                                <a href="https://opencollective.com/abap-observability-tools/donate" target="_blank" rel="noreferrer">
                                    <img src="https://opencollective.com/abap-observability-tools/donate/button@2x.png?color=blue" width="300" alt="donate to out collective" />
                                </a>
                            </div>
                            <div id="banner" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}