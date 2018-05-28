import React, {Component} from 'react';
import Data from './AboutMe.json';
import './AboutMe.css';

class AboutMe extends Component{
  render(){
    const description = Data.description;
    return(
      <div className="about-me">
        <div className="about-me-profile">
          <img src={require('./Assets/temp-profile.png')} className="about-me-profile-img icon-img fadeInLeft" />
        </div>
        <div className="about-me-description fadeInRight">
          {description.map(item => (
            <p>{item.content}</p>
          ))}
        </div>
      </div>
    );
  }
}
export default AboutMe;
