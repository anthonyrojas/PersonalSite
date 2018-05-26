import React, { Component } from 'react';
import Education from './Components/Education/Education';
import logo from './logo.svg';
import './App.css';
import MainBanner from './Components/MainBanner/MainBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBanner></MainBanner>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Education></Education>
      </div>
    );
  }
}

export default App;
