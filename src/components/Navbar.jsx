import React, { Component, Fragment } from "react";
import "../style/app.css";
export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="outerNav">
          <div className="leftNavItems">
            <div>LOGO</div>
            <div>ABOUT</div>
            <div>COMMUNITY</div>
            <div>OUR MENU</div>
            <div>RECIPES</div>
          </div>
          <div className="rightNavItems">
            <div>CONTACT</div>
            <div>LOGIN</div>
          </div>
        </div>
      </Fragment>
    );
  }
}
