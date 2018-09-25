import React, { Fragment } from "react";

const Parallax = props => {
  const { scrollEvent } = props;
  return (
    <Fragment>
      <div className="menu">
        <h1>OUR MENU</h1>
        <hr />
        <div>
          <button>KNOW MORE</button>
        </div>
      </div>
      <div className="parallaxFlex">
        <div className={scrollEvent === 4 ? "starters animate" : "starters"}>
          <h1>STARTERS</h1>
          <div className="content">
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
          </div>
        </div>
        <div
          className={
            scrollEvent === 4 ? "mainCourses animateReverse" : "mainCourses"
          }
        >
          <h1>MAIN COURSES</h1>
          <div className="content">
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
          </div>
        </div>
        <div className={scrollEvent === 4 ? "sides animate" : "sides"}>
          <h1>SIDES</h1>
          <div className="content">
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
          </div>
        </div>
        <div
          className={scrollEvent === 4 ? "starters animateReverse" : "starters"}
        >
          <h1>DESSERTS</h1>
          <div className="content">
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
            <h5>QUINOA CROQUETIAS</h5>
            <p>
              Quinoa and cheddar croquettas with aji rocotto & pineapple salsa
              (v)
            </p>
            <button className="btn-parallax">$4.95</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Parallax;
