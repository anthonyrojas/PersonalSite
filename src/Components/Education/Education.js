import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import EducationData from './Education.json';
import './Education.css';
import EducationItem from './EducationItem/EducationItem';
import gradcap from './Assets/gradcap.png';
class Education extends Component{
  constructor(props){
    super(props);
    this.state = {
      educationHeaderImgClass: ['icon-img'],
      educationItemLogoClass: ['icon-img', 'circle', 'education-item-logo'],
      educationItemInfoClass: ['education-item-info']
    }
  }
  toggleEducationAnimations(e){
    const educationHeaderImg = this.state.educationHeaderImgClass;
    if(educationHeaderImg.includes('bounceUp')){
      educationHeaderImg.splice(educationHeaderImg.indexOf('bounceUp'));
    }else{
      educationHeaderImg.push('bounceUp');
    }
    this.setState({
      educationHeaderImgClass: educationHeaderImg
    });
  }
  render(){
    const educations = EducationData.education;
    return(
      <Waypoint
        onEnter={this.toggleEducationAnimations.bind(this)}
        onLeave={this.toggleEducationAnimations.bind(this)}
      >
        <div className="education" ref={this.educationRef} >
          <div className="education-header">
            <img src={require('./Assets/gradcap.png')} className={this.state.educationHeaderImgClass.join(' ')} alt="graduation cap"/>
          </div>
          {educations.map(eduItem =>(
            <EducationItem key={eduItem.location}
              location={eduItem.location}
              logo={eduItem.logo}
              city={eduItem.city}
              usstate={eduItem.state}
              startDate={eduItem.startDate}
              endDate={eduItem.endDate}
              major={eduItem.major}
              degree={eduItem.degree}
            />
          ))}
        </div>
      </Waypoint>
    );
  }
}
export default Education;
