import React from 'react';
import './Skills.css';
const SkillsItem = (props) => (
    <div className='skill-item'>
        <p>{props.skill.title}</p>
        {console.log(props.skill)}
    </div>
);
export default SkillsItem;