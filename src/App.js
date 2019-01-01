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
import {WorkProvider} from './Components/Work/WorkContext';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
        <Switch>
          <React.Fragment>
            <Navbar/>
            <main>
              <AboutProvider>
                <Route exact path='/' component={About}/>
              </AboutProvider>
              <EducationProvider>
                <Route path='/education' component={Education} />
              </EducationProvider>
              <WorkProvider>
                <Route path='/work' component={Work}/>
              </WorkProvider>
              <ProjectsProvider>
                <Route path='/projects' component={Projects} />
              </ProjectsProvider>
            </main>
          </React.Fragment>
        </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;