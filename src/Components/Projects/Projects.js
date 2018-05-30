import React, {Component} from 'react';
import './Projects.css';
import Project from './Project/Project';
import Data from './Projects.json';
class Projects extends Component{
  render(){
    const projectsData = Data.projects;
    return(
      <div className="projects-row">
        <div className="projects-row-header">
          Projects
        </div>
        {projectsData.map(projectItem=>(
          <Project key={projectItem.title}
            title={projectItem.title}
            projectStatus={projectItem.status}
            image={projectItem.image}
            description={projectItem.description}
          />
        ))}
      </div>
    );
  }
}
export default Projects;
