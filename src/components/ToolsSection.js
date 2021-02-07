import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class ToolsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="section section--tools">
              {_.get(section, 'title', null) && (
              <div className="container container--md align-center">
                <h2 className="section__title">{_.get(section, 'title', null)}</h2>
              </div>
              )}
              <div className="container container--lg">
                {_.map(_.get(section, 'tools', null), (tool, tool_idx) => (
                <div key={tool_idx} className={classNames('flex', 'flex--middle', 'flex--center', 'flex--col-2', {'align-center': _.get(tool, 'align', null) === 'center', 'align-right': _.get(tool, 'align', null) === 'right'})}>
                  {_.get(tool, 'image', null) && (
                  <div className={classNames('cell', 'section__media', {'section__media--right': _.get(tool, 'image_position', null) === 'right'})}>
                    <img src={withPrefix(_.get(tool, 'image', null))} alt={_.get(tool, 'image_alt', null)} />
                  </div>
                  )}
                  <div className="section__body cell">
                    {_.get(tool, 'title', null) && (
                      _.get(section, 'title', null) ? (
                      <h3 className="section__title">{_.get(tool, 'title', null)}</h3>
                      ) : 
                      <h2 className="section__title">{_.get(tool, 'title', null)}</h2>
                    )}
                    {_.get(tool, 'content', null) && (
                    <div className="section__copy">
                      {markdownify(_.get(tool, 'content', null))}
                    </div>
                    )}
                    {_.get(tool, 'actions', null) && (
                    <div className="section__actions btn-group">
                      <SectionActions {...this.props} actions={_.get(tool, 'actions', null)} />
                    </div>
                    )}
                  </div>
                </div>
                ))}
              </div>
            </section>
        );
    }
}
