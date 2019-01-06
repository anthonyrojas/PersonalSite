import React, {Component} from 'react';
import './Education.css';
import {EducationConsumer} from './EducationContext';
import Loading from '../Loading/Loading';
import Schools from '../Schools/Schools';
class Education extends Component{
    render(){
        return(
            <EducationConsumer>
                {(context)=>{
                    if(context.loading){
                        return(
                            <Loading />
                        );
                    }else if(context.err){
                        return (
                            <div className='error-page-display'>
                                <p>Error loading data...</p>
                            </div>
                        );
                    }else{
                        return(
                            <React.Fragment>
                                <div className='Education'>
                                    <div className='row'>
                                        <h2 className='section-header'>Education</h2>
                                    </div>
                                    <div className='row'>
                                        <div className='col-10 col-md-9 col-lg-7'>
                                            <div className='paper'>
                                                <div className='section-description' dangerouslySetInnerHTML={{__html: context.educationContent.body}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <h2 className='section-header'>Schools Attended</h2>
                                    </div>
                                    <Schools schools={context.educationContent.schools}/>
                                </div>
                            </React.Fragment>
                        );
                    }
                }}
            </EducationConsumer>
        );
    }
}
export default Education;