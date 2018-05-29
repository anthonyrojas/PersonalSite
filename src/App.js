import React, { Component } from 'react';
import Education from './Components/Education/Education';
import AboutMe from './Components/AboutMe/AboutMe';
import logo from './logo.svg';
import './App.css';
import MainBanner from './Components/MainBanner/MainBanner';
import Projects from './Components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBanner></MainBanner>
        <AboutMe />
        <Education></Education>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
