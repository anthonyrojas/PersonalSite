import React from 'react';
import './Skills.css';
const SkillsItem = (props) => (
    <div className='skill-item-container'>
        <div className='skill-item'>
            <img className='skill-image' src={props.skill.imageSource} alt={props.skill.title}/>
            <p className='skill-item-name'>{props.skill.title}</p>
        </div>
    </div>
);
export default SkillsItem;