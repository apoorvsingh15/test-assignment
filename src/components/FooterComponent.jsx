import React, { Fragment } from "react";

const FooterComponent = () => {
  return (
    <Fragment>
      <div className="footerWrapper">
        <div className="formWrapper">
          <div className="leftText">
            <h2>COLLABORATE</h2>
            <h1>WITH US</h1>
            <hr />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="realForm">
            <div className="formImage">
              <img
                src={require("../assets/detail02.png")}
                alt="abstractImage"
              />
            </div>
            <div className="formElement">
              <div className="leftForm">
                <label>NAME</label>
                <br />
                <input className="formInput" type="name" placeholder="Name" />
                <br />
                <br />
                <label>PHONE</label>
                <br />
                <input
                  className="formInput"
                  type="number"
                  placeholder="Phone"
                />
                <br />
                <br />
                <label>EXPERIENCE</label>
                <br />
                <select className="dropDown" name="experience" id="experience">
                  <option value="0">Select</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="rightForm">
                <label>SURNAME</label>
                <br />
                <input
                  className="formInput"
                  type="name"
                  placeholder="Surname"
                />
                <br />
                <br />
                <label>EMAIL ADDRESS</label>
                <br />
                <input className="formInput" type="email" placeholder="Email" />
                <br />
                <br />
                <label>WHERE DO YOU HEAR ABOUT US?</label>
                <br />
                <select className="dropDown" name="know" id="know">
                  <option value="volvo">Select</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <button className="sendButton">SEND</button>
          </div>
        </div>
        <div className="bottomWrapper">
          <div className="linksDiv">
            <div className="links">
              <div className="linkSubSection">
                <div>Section 1</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
              </div>
              <div className="linkSubSection">
                <div>Section 2</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
              </div>
              <div className="linkSubSection">
                <div>Section 3</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
              </div>
              <div className="linkSubSection">
                <div>Section 4</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
              </div>
              <div className="linkSubSection">
                <div>Section 5</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
                <div>Subsection</div>
              </div>
            </div>
            <div className="logo">
              <h2>THIS IS THE</h2>
              <h1>LOGO</h1>
            </div>
          </div>
          <div className="copy">
            <div className="leftCopy">
              2017.Company. Lorem Ipsum dolor sit amet, adasd adasdasdad adasd.
            </div>
            <div className="socialIcons">
              <img src={require("../assets/social.png")} alt="socialIcons" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterComponent;
