import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import EducationData from './Education.json';
import './Education.css';
import EducationItem from './EducationItem/EducationItem';
import Courses from './Courses/Courses';
import Aux from '../../HOC/AuxHOC';
import Reveal from 'react-reveal/Reveal';
class Education extends Component{
  constructor(props){
    super(props);
    this.state = {
      educationHeaderImgClass: ['icon-img', 'bounceUp'],
      educationItemLogoClass: ['icon-img', 'circle', 'education-item-logo'],
      educationItemInfoClass: ['education-item-info'],
      courseClassList: ['courses-section'],
      showCourses: false,
      coursesDisplay: 'none',
      courseButtonText: 'Show Courses'
    }
  }
  toggleCourses(){
    const showCoursesVal = this.state.showCourses;
    let coursesDisplayVal = this.state.coursesDisplay;
    let coursesBtnTextVal = this.state.courseButtonText;
    let courseClassListVal = [];
    if(showCoursesVal){
      coursesDisplayVal = 'none';
      coursesBtnTextVal = 'Show Courses';
      courseClassListVal = ['courses-section', 'fadeOutUpZoom'];
    }else{
      coursesDisplayVal='flex';
      coursesBtnTextVal='Hide Courses';
      courseClassListVal = ['courses-section', 'fadeInDownZoom']
    }
    this.setState({
      showCourses: !showCoursesVal,
      coursesDisplay: coursesDisplayVal,
      courseButtonText: coursesBtnTextVal,
      courseClassList: courseClassListVal
    });
  }
  render(){
    const educations = EducationData.education;
    return(
        <div className="education" ref={this.educationRef} >
          <div className="education-header">
            <div className="education-header-title">Education</div>
            <img src={require('./Assets/gradcap.png')} className={this.state.educationHeaderImgClass.join(' ')} alt="graduation cap"/>
          </div>
          {educations.map(eduItem =>(
            <Aux key={eduItem.location}>
              <EducationItem
                location={eduItem.location}
                logo={eduItem.logo}
                city={eduItem.city}
                usstate={eduItem.state}
                startDate={eduItem.startDate}
                endDate={eduItem.endDate}
                major={eduItem.major}
                degree={eduItem.degree}
              />
              <Reveal effect="fadeInDownZoom">
                <div className="courses-button-row">
                  <button className="courses-btn" onClick={this.toggleCourses.bind(this)}>{this.state.courseButtonText}</button>
                </div>
              </Reveal>
              <div key={'coursesTransition'+eduItem.location} className={this.state.courseClassList.join(' ')} style={{display: `${this.state.coursesDisplay}`}}>
                <Courses courses={eduItem.courses}/>
              </div>
            </Aux>
          ))}
        </div>
    );
  }
}
export default Education;
