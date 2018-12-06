import React, {Component} from 'react';
import './Skills.css';
// const SkillsItem = (props) => (
//     <li className='skill-list-item'>
//         <div className='skill-item-container'>
//             <div className='skill-item'>
//                 <img className='skill-image' src={props.skill.imageSource} alt={props.skill.title}/>
//                 <p className='skill-item-name'>{props.skill.title}</p>
//             </div>
//         </div>
//     </li>
// );
class SkillsItem extends Component{
    render(){
        return(
            <li className={`skill-list-item ${this.props.currentSlide === this.props.index ? 'active' : null}`}>
                <img className='skill-image' 
                    src={this.props.skill.imageSource} 
                    alt={this.props.skill.title} 
                />
                <p className='skill-item-name'>{this.props.skill.title}</p>
            </li>            
        );
    }
}
export default SkillsItem;