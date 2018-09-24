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
          <div
            className={
              this.props.scrollEvent === 2
                ? "communityBlockRight animate"
                : "communityBlockRight"
            }
          >
            <div className="cardOne">
              <img
                src={
                  "https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr03/7/14/original-grid-image-5007-1386445066-4.jpg?crop=601:601;2,0&downsize=715:*&output-format=auto&output-quality=auto"
                }
                alt="foodImage"
              />
              <img
                src={require("../assets/instagram-btn.png")}
                alt="instaBtn"
              />
            </div>
            <div className="cardTwo">
              <h3>@buzzfeedfood</h3>
              <p>
                It's taco Tuesday! These tacos from @jessezewczyk have no added
                sugars and are SO good. Find the recipe from the link in out
                bio! : @taylormillerphoto
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
