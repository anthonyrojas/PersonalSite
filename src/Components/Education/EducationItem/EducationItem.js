import React, {Component} from 'react';
import './EducationItem.css';
import Reveal from 'react-reveal/Reveal';
class EducationItem extends Component{
  render(){
    return(
      <div className="education-item">
        <Reveal effect="fadeInLeft">
          <img src={require('../' + this.props.logo)} alt="education logo" className="icon-img circle education-item-logo"/>
        </Reveal>
        <Reveal effect="fadeInRight">
          <div className="education-item-info">
            <h1>{this.props.location}</h1>
            <p>{this.props.degree} in {this.props.major}</p>
            <p>{this.props.startDate} - {this.props.endDate}</p>
            <p>{this.props.city}, {this.props.usstate}</p>
          </div>
        </Reveal>
      </div>
    );
  }
}
export default EducationItem;
