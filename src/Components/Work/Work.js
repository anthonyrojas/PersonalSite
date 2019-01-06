import React,{Component} from 'react';
import {WorkConsumer} from './WorkContext';
import Loading from '../Loading/Loading';
import './Work.css';
import Jobs from '../Jobs/Jobs';
class Work extends Component{
    render(){
        return(
        <WorkConsumer>
            {(context)=>{
                if(context.loading){
                    return(<Loading />);
                }else if(context.err){
                    return(
                        <div className='error-page-display'>
                            <p>Error loading data...</p>
                        </div>
                    );
                }else{
                    return(
                        <div className='Work'>
                            <div className='row'>
                                <h2 className='section-header'>Work</h2>
                            </div>
                            <div className='row'>
                                <div className='col-10 col-md-8 col-lg-7'>
                                    <div className='paper'>
                                        <div className='section-description' dangerouslySetInnerHTML={{__html: context.workContent.body}}></div>
                                    </div>
                                </div>
                            </div>
                            <Jobs jobs={context.workContent.jobs}/>
                        </div>
                    );
                }
            }}
        </WorkConsumer>
        );
    }
}
export default Work;