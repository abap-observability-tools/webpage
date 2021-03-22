import React from "react";
import underConstruction from "./../../static/images/under-construction.png";

export default class UnderConstruction extends React.Component {
  render() {
    return (
      <div className="container container--md align-center">
        <img src={underConstruction} alt="under construction" />
        <br />
      </div>
    );
  }
}
