import React from 'react';
import './projects.css';
import Project from './Project';
export default function Projects(props){
    const projects = props.data;
    return(
        <div className='row projects-row paper-dark'>
            {
                projects.map((project)=>(
                    <Project key={project.id} project={project} />
                ))
            }
        </div>
    )
}