import React, { Component, Fragment } from "react";

export default class TopSection extends Component {
  render() {
    return (
      <Fragment>
        <div className="topSection">
          <img
            className="logoPlacement"
            src={require("../assets/stamp.png")}
            alt="stampLogo"
          />
          <h1>THE BEST FOODIE</h1>
          <h1>EXPERIENCE</h1>
          <h4>NOW IN LONDON</h4>
        </div>
      </Fragment>
    );
  }
}
