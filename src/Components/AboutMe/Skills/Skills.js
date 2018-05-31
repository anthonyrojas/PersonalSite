import React from 'react';
import Reveal from 'react-reveal/Reveal';
import Aux from '../../../HOC/AuxHOC';
import './Skills.css';
const Skills = (props)=>(
  <div className="about-me-skills-row">
    {props.skills.map(skill=>(
      <Aux key={skill+props.skills.indexOf(skill)} >
      <Reveal effect="zoomInDelay">
      <div className="about-me-skills-list-col" >
        <span className="skills-list-title">{skill.category}</span>
        <ul className="about-me-skills-list">
          {skill.names.map(name=>(
            <li key={name+skill.names.indexOf(name)} className="skills-list-item">{name}</li>
          ))}
        </ul>
      </div>
      </Reveal>
    </Aux>
    ))}
    </div>
);
export default Skills;
