import React from 'react';
import {ProjectsProvider} from './ProjectsContext';
import Projects from './Projects';
const ProjectsContainer = (props) =>(
    <ProjectsProvider>
        <Projects />
    </ProjectsProvider>
);
export default ProjectsContainer;