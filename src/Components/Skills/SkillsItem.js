import React from 'react';
import './Skills.css';
const SkillsItem = (props) => (
    <div className='skill-item'>
        <img src={props.skill.imageSource} />
    </div>
);
export default SkillsItem;