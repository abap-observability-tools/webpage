import React from 'react';
import _ from 'lodash';

import { classNames, withPrefix } from '../utils';

export default class ImageSection extends React.Component {
  render() {
    let section = _.get(this.props, 'section', null);
    let actions = _.get(section, 'actions', null);
    let url = _.map(actions, 'url', null);
    return (
      <section className="section section--image">
        <div className="container container--lg">
          <div className={classNames('section__body', 'align-center', { 'inverse bg-blue': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'blue'), 'bg-gray': _.get(section, 'has_background', null) && (_.get(section, 'background_color', null) === 'gray') })}>
            <div className="container container--md">
              {_.get(section, 'title', null) && (
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              )}
              {_.get(section, 'subtitle', null) && (
                <div className="section__copy">
                  <p>{_.get(section, 'subtitle', null)}</p>
                </div>
              )}
              <div className={classNames('cell', 'section__media', { 'section__media--right': _.get(section, 'image_position', null) === 'right' })}>
              <a href={url} target="_blank" rel="noreferrer"><img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
