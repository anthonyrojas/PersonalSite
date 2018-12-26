import React,{Component} from 'react';
import './Projects.css';
import {ProjectsConsumer} from './ProjectsContext';
import Loading from '../Loading/Loading';
import ProjectsList from './ProjectsList';
class Projects extends Component{
    render(){
        return(
            <ProjectsConsumer>
                {(context)=>{
                    if(context.loading){
                        return(
                            <Loading />
                        );
                    }else if(context.err){
                        return(
                            <div className='error-page-display'>
                                <p>Error loading data...</p>
                            </div>
                        );
                    }else{
                        return(
                            <div className='Projects'>
                                <div className='row'>
                                    <h2 className='section-header'>Projects</h2>
                                </div>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <div className='paper'>
                                            <div className='section-description' dangerouslySetInnerHTML={{__html: context.projectsContent.body}}></div>
                                        </div>
                                    </div>
                                </div>
                                <ProjectsList projects={context.projectsContent.projects}/>
                            </div>
                        );
                    }
                }}
            </ProjectsConsumer>
        );
    }
}
export default Projects;