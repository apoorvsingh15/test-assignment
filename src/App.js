import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import CommunitySection from "./components/CommunitySection";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <TopSection />
        <CommunitySection />
      </Fragment>
    );
  }
}

export default App;
