import React from 'react';
import ProjectListItem from './ProjectListItem';
import './Projects.css';
const ProjectsList = (props)=>(
    <React.Fragment>
        <div className='row project-row'>
            {props.projects.map(project=>(
                <ProjectListItem key={project.id} project={project}/>
            ))}
        </div>
    </React.Fragment>
);
export default ProjectsList;