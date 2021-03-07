import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MainSection from './components/mainSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left-app-container"></div>
        <div className="right-app-container">
          <Header/>
          <MainSection/>
          
        </div>
        <aside></aside>

       
      </div>
    );
  }
}
export default App;
