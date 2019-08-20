import React from 'react';
import './projects.css';
export default function Projects(props){
    const projects = props.data;
    return(
        <div className='row'>
            {
                projects.map((project)=>(
                    <div key={project.id} className='project-container'>
                        <div className='project-header'>
                            <h4 className='project-title'>{project.frontmatter.title}</h4>
                        </div>
                        <div className='project-image-container'>
                            <img className='project-image' src={project.frontmatter.featuredImage.publicURL} alt={project.frontmatter.title} />
                        </div>
                        <div className='project-description-container' dangerouslySetInnerHTML={{__html: project.html}}></div>
                    </div>
                ))
            }
        </div>
    )
}