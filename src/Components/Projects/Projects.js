import React, {Component} from 'react';
import './Projects.css';
import Project from './Project/Project';
import Data from './Projects.json';
import Reveal from 'react-reveal/Reveal';
class Projects extends Component{
  render(){
    const projectsData = Data.projects;
    return(
      <div className="projects-row">
        <div className="projects-row-header">
          Projects
        </div>
        <div className="projects-about">
          <Reveal effect="fadeInLeft">
            <p>Over the course of my time at CSULB, I have worked on numerous lab assignments and projects, some by myself and some in a group. Below are some of the better projects I have done or worked on, some of which are done in my free time. I hope to be able to expand this list as I find time to complete more projects and learn new languages, techniques, and overall skills.</p>
          </Reveal>
          <Reveal effect="fadeInRight">
            <p className="well-text">Completed projects have a green bar. Projects still in development or that I go back to improve or debug have an orange bar. </p>
          </Reveal>
        </div>
        {projectsData.map(projectItem=>(
          <Project key={projectItem.title}
            title={projectItem.title}
            projectStatus={projectItem.status}
            image={projectItem.image}
            description={projectItem.description}
            technologies={projectItem.technologies}
            link={projectItem.link}
          />
        ))}
      </div>
    );
  }
}
export default Projects;
