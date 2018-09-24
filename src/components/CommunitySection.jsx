import React, { Fragment } from "react";

const CommunitySection = props => {
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
            props.scrollEvent === 2
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
            <img src={require("../assets/instagram-btn.png")} alt="instaBtn" />
          </div>
          <div className="cardTwo">
            <h3>@buzzfeedfood</h3>
            <p>
              It's taco Tuesday! These tacos from @jessezewczyk have no added
              sugars and are SO good. Find the recipe from the link in out bio!
              : @taylormillerphoto
            </p>
          </div>
        </div>
      </div>
      <div className="communityFlexWrapper bottomWrapperCom">
        <div
          className={
            props.scrollEvent === 2
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
            <img src={require("../assets/instagram-btn.png")} alt="instaBtn" />
          </div>
          <div className="cardTwo">
            <h3>@buzzfeedfood</h3>
            <p>
              It's taco Tuesday! These tacos from @jessezewczyk have no added
              sugars and are SO good. Find the recipe from the link in out bio!
              : @taylormillerphoto
            </p>
          </div>
        </div>
        <div
          className={
            props.scrollEvent === 2
              ? "paragraphBlock animate"
              : "paragraphBlock"
          }
        >
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less
          </p>
        </div>
      </div>
      <div className="communityFlexWrapper bottomWrapperCom">
        <div
          className={
            props.scrollEvent === 2
              ? "paragraphBlock animate"
              : "paragraphBlock"
          }
        >
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less
          </p>
        </div>
        <div
          className={
            props.scrollEvent === 2
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
            <img src={require("../assets/instagram-btn.png")} alt="instaBtn" />
          </div>
          <div className="cardTwo">
            <h3>@buzzfeedfood</h3>
            <p>
              It's taco Tuesday! These tacos from @jessezewczyk have no added
              sugars and are SO good. Find the recipe from the link in out bio!
              : @taylormillerphoto
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CommunitySection;
