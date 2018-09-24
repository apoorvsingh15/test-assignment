import React, { Component, Fragment } from "react";
import "../style/app.css";
export default class Navbar extends Component {
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  scrollToCommunity = () => {
    window.scrollTo(0, 750);
  };
  scrollToMap = () => {
    window.scrollTo(0, 1852);
  };
  render() {
    const { scrollEvent } = this.props;
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
        <div className="sideLines">
          <p onClick={this.scrollToTop}>01</p>
          <hr className={scrollEvent === 0 ? "wideLine" : "simpleLine"} />
          <p onClick={this.scrollToCommunity}>02</p>
          <hr className={scrollEvent === 2 ? "wideLine" : "simpleLine"} />
          <p onClick={this.scrollToMap}>03</p>
          <hr className={scrollEvent === 3 ? "wideLine" : "simpleLine"} />
          <p>04</p>
          <hr />
          <p>05</p>
          <hr />
          <p>06</p>
          <hr />
        </div>
        <div className="rightFixed">REQUEST INFO</div>
      </Fragment>
    );
  }
}
