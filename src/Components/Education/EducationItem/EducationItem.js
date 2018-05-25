import React, {Component} from 'react';
class EducationItem extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.location}</h1>
      </div>
    );
  }
}
export default EducationItem;
