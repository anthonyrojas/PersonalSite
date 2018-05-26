import React, {Component} from 'react';
import './EducationItem.css';
class EducationItem extends Component{
  render(){
    return(
      <div className="education-item">
        <img src={require('../' + this.props.logo)} alt="education logo" className="icon-img circle education-item-logo fadeInLeft"/>
        <div className="education-item-info fadeInRight">
          <h1>{this.props.location}</h1>
          <p>{this.props.degree} in {this.props.major}</p>
          <p>{this.props.startDate} - {this.props.endDate}</p>
          <p>{this.props.city}, {this.props.usstate}</p>
        </div>
      </div>
    );
  }
}
export default EducationItem;
