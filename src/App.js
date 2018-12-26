import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Work from './Components/Work/Work';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import {AboutProvider} from './Components/About/AboutContext';
import {EducationProvider} from './Components/Education/EducationContext';
import {ProjectsProvider} from './Components/Projects/ProjectsContext';
import firebaseConn from './firebaseInit';
import Aux from './HOC/AuxHOC';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
        <Aux>
          <Navbar/>
          <main>
              <AboutProvider>
                <Route exact path='/' component={About}/>
              </AboutProvider>
              <EducationProvider>
                <Route path='/education' component={Education} />
              </EducationProvider>
              <Route path='/work' component={Work}/>
              <ProjectsProvider>
                <Route path='/projects' component={Projects} />
              </ProjectsProvider>
          </main>
        </Aux>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;