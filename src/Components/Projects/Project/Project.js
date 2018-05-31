import React from 'react';
import './Project.css';
const Project = (props)=>(
  <div className="project-col zoomIn">
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
          <span className="project-tech-item">{tech} </span>
        ))}
      </div>
    </div>
  </div>
);
export default Project;
