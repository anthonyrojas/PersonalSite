import React, {Component} from 'react';
import Data from './AboutMe.json';
import './AboutMe.css';
import Skills from './Skills/Skills';

class AboutMe extends Component{
  render(){
    const description = Data.description;
    return(
      <div className="about-me">
        <div className="about-me-header">
          About Me
        </div>
        <div className="about-me-profile">
          <img src={require('./Assets/profile.png')} className="about-me-profile-img icon-img fadeInLeft circle" alt="profile image"/>
        </div>
        <div className="about-me-description fadeInRight">
          {description.map(item => (
            <p key={item.num}>{item.content}</p>
          ))}
        </div>
        <Skills skills={Data.skills} />
      </div>
    );
  }
}
export default AboutMe;
