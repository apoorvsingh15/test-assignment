import React, { Component, Fragment } from "react";

export default class CommunitySection extends Component {
  render() {
    return (
      <Fragment>
        <div className="communityFlexWrapper">
          <div className="communityBlock">
            <h1>MEET OUR</h1>
            <h1>COMMUNITY</h1>
            <hr />
            <button>KNOW MORE</button>
            <p>
              LOREM IPSUM DOLOR SIT AMET ARNUT TEMPARTERO SERTU PER NABORE EN
              TORNA ENTALTO
            </p>
          </div>
          <div className="communityBlockRight">
            <div className="cardOne">
              <img src={require("../assets/bg-pic.png")} alt="foodImage" />
              <img
                src={require("../assets/instagram-btn.png")}
                alt="instaImage"
              />
            </div>
            <div className="cardOne">
              <img src={require("../assets/bg-pic.png")} alt="foodImage" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
