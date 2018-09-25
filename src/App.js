import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import CommunitySection from "./components/CommunitySection";
import FooterComponent from "./components/FooterComponent";
import Parallax from "./components/Parallax";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (window.pageYOffset >= 0 && window.pageYOffset < 750) {
      this.setState({
        section: 0
      });
    }
    if (window.pageYOffset >= 750 && window.pageYOffset < 1852) {
      this.setState({
        section: 2
      });
    }
    if (window.pageYOffset >= 1852 && window.pageYOffset < 2533) {
      this.setState({
        section: 3
      });
    }
    if (window.pageYOffset >= 2533) {
      this.setState({
        section: 4
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar scrollEvent={this.state.section} />
        <TopSection />
        <CommunitySection scrollEvent={this.state.section} />
        <img
          className="mapImage"
          src={require("./assets/snazzy-image.png")}
          alt="map"
        />
        <Parallax scrollEvent={this.state.section} />
        <FooterComponent />
      </Fragment>
    );
  }
}

export default App;
