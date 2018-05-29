import React from 'react';
import './Skills.css';
const Skills = (props)=>(
  <div className="about-me-skills-row">
    {props.skills.map(skill=>(
      <div key={skill+props.skills.indexOf(skill)} className="about-me-skills-list-col zoomInDelay">
        <span className="skills-list-title">{skill.category}</span>
        <ul className="about-me-skills-list">
          {skill.names.map(name=>(
            <li key={name+skill.names.indexOf(name)} className="skills-list-item">{name}</li>
          ))}
        </ul>
      </div>
    ))}
    </div>
);
export default Skills;
