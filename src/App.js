import React, { Component, lazy } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import NoMatch from './Components/NoMatch/NoMatch';
// import AboutContainer from './Components/About/AboutContainer';
// import ProjectsContainer from './Components/Projects/ProjectsContainer';
// import WorkContainer from './Components/Work/WorkContainer';
// import EducationContainer from './Components/Education/EducationContainer';
import Loading from './Components/Loading/Loading';
const AboutContainer = lazy(()=>import('./Components/About/AboutContainer'));
const EducationContainer = lazy(()=>import('./Components/Education/EducationContainer'));
const WorkContainer = lazy(()=>import('./Components/Work/WorkContainer'));
const ProjectsContainer = lazy(()=>import('./Components/Projects/ProjectsContainer'));
class App extends Component {
  constructor(props){
    super(props);
    this.mainRef = React.createRef();
    this.state={
      mainTopPosition: 0
    }
  }
  componentDidMount(){
    this.setState({
      mainTopPosition: this.mainRef.current.offsetTop,
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
            <React.Fragment>
              <Navbar mainPosition={this.state.mainTopPosition}/>
              <main ref={this.mainRef}>
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/'><AboutContainer /></Route>
                  <Route path='/education'><EducationContainer/></Route>
                  <Route path='/work'><WorkContainer/></Route>
                  <Route path='/projects'><ProjectsContainer /></Route>
                  <Route component={NoMatch} />
                </Switch>
              </React.Suspense>
              </main>
            </React.Fragment>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;