import React, {Component} from 'react';
import Aux from '../../HOC/AuxHOC';
import EducationData from './Education.json';
import './Education.css';
import EducationItem from './EducationItem/EducationItem';
class Education extends Component{
  render(){
    const educations = EducationData.education;
    return(
      <div className="education">
        {educations.map(eduItem =>(
          <EducationItem key={eduItem.title + 'akajba'} location={eduItem.location} city={eduItem.city} ustate={eduItem.state} startDate={eduItem.startDate} endDate={eduItem.endDate} />
        ))}
      </div>
    );
  }
}
export default Education;
