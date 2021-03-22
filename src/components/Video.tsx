import React from "react";
import ReactPlayer from "react-player";
import _ from "lodash";

export default class Video extends React.Component {
  render() {
    const section = _.get(this.props, `section`, null);
    return (
      <div className="container container--md align-center">
        <ReactPlayer url={section.url} />
        <br />
      </div>
    );
  }
}
