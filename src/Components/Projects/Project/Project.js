import React from 'react';
import './Project.css';
import Reveal from 'react-reveal/Reveal';
const Project = (props)=>(
  <Reveal effect="zoomIn">
    <div className="project-col">
      <div className="project-item">
        <div className="project-header">
          <span className="project-title">{props.title}</span>
        </div>
        <div className="project-image-section" style={{backgroundImage:`url(${require('../Assets/' + props.image)})`}}>
        </div>
        <div className="project-description">
          <p>{props.description} {props.link ? <a href={props.link} target="_blank" className="project-link">Live Site</a> : null}</p>
        </div>
        <hr/>
        <div className="project-technologies" style={{borderBottom:props.projectStatus==='completed' ? '8px solid #01FF01' : '8px solid #FF9A03'}}>
          {props.technologies.map(tech=>(
            <span className="project-tech-item" key={props.title + tech.toString()}>{tech} </span>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);
export default Project;
