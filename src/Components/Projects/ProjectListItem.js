import React from 'react';
import './Projects.css'
const ProjectListItem = (props) =>(
    <div className='col-10 col-md-8 col-lg-4 project-col'>
        <div className='paper'>
            <div className='project-container'>
                <h3 className={`project-title ${props.project.completed ? 'project-complete': 'project-in-progress'}`}>{props.project.title}</h3>
                <div className='project-image-container' style={{backgroundImage: `url(${props.project.imageSource})`}}></div>
                <p className='project-description'>{props.project.body}</p>
            </div>
        </div>
    </div>
);
export default ProjectListItem;