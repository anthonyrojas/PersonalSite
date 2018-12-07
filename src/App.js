import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Work from './Components/Work/Work';
import Projects from './Components/Projects/Projects';
import Navbar from './Components/Navbar/Navbar';
import {AboutProvider} from './Components/About/AboutContext';
import firebaseConn from './firebaseInit';
import Aux from './HOC/AuxHOC';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      navVisibility: false
    }
  }
  toggleNav(e){
    this.setState({
      ...this.state,
      navVisibility: !this.state.navVisibility
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
        <Aux>
          <Navbar toggleNav={this.toggleNav} visible={this.state.navVisibility} />
          <main>
            <Switch>
              <AboutProvider>
                <Route exact path='/' component={About}/>
              </AboutProvider>
              <Route path='/work' component={Work}/>
              <Route path='/education' component={Education}/>
              <Route path='/projects' component={Projects}/>
            </Switch>
            <button className='nav-btn ripple' onClick={this.toggleNav.bind(this)}><i className='fas fa-bars'></i></button>
          </main>
        </Aux>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;