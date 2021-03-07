import React, { Component } from "react";
import "./App.css";
import DisplayRecentNews from "./components/DisplayRecentNews";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import RecentNewsHeader from "./components/RecentNewsHeader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-app-container">
          <RecentNewsHeader recentNewsHeader={"Recent news"} />
          <DisplayRecentNews />
        </div>
        <div className="right-app-container">
          <Header appName={"Story Factory"} />
          <MainSection />
        </div>
        <aside></aside>
      </div>
    );
  }
}
export default App;
