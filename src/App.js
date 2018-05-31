import React, { Component } from 'react';
import Education from './Components/Education/Education';
import AboutMe from './Components/AboutMe/AboutMe';
import './App.css';
import MainBanner from './Components/MainBanner/MainBanner';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBanner></MainBanner>
        <AboutMe />
        <Education />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;