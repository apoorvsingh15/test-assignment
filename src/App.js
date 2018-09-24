import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import CommunitySection from "./components/CommunitySection";
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
    if (window.pageYOffset >= 405) {
      this.setState({
        section: 2
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <TopSection />
        <CommunitySection scrollEvent={this.state.section} />
      </Fragment>
    );
  }
}

export default App;
