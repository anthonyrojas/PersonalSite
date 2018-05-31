import React, {Component} from 'react';
import Data from './AboutMe.json';
import './AboutMe.css';
import Skills from './Skills/Skills';
import Reveal from 'react-reveal/Reveal';

class AboutMe extends Component{
  render(){
    const description = Data.description;
    return(
      <div className="about-me">
        <div className="about-me-header">
          About Me
        </div>
        <div className="about-me-profile">
          <Reveal effect="fadeInLeft">
            <img src={require('./Assets/profile.png')} className="about-me-profile-img icon-img circle" alt="profile image"/>
          </Reveal>
        </div>
        <Reveal effect="fadeInRight">
          <div className="about-me-description">
            {description.map(item => (
              <p key={item.num}>{item.content}</p>
            ))}
          </div>
          <Skills skills={Data.skills} />
        </Reveal>
      </div>
    );
  }
}
export default AboutMe;
