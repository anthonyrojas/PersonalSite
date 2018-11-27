import React,{Component} from 'react';
import './About.css';
// import {db, storage} from '../../firebaseInit';
import {AboutConsumer} from './AboutContext';
import Image from '../Image/Image';
import Skills from '../Skills/Skills';
class About extends Component{
    render(){
        return(
            <AboutConsumer>
            {(state) =>{
                if(state.statusCode === 0){
                    return(
                        <p>Loading...</p>
                    );
                }else{
                    console.log(state);
                    return(
                        <React.Fragment>
                            <div className='About'>
                            <div className='row'>
                                <h2 className='section-header'>About Me</h2>
                            </div>
                            <div className='row'>
                                <img src={state.aboutContent.imageSource} className='profile-image'/>
                            </div>
                            <div className='row'>
                                <div className='col-lg-8 col-md-9'>
                                    <div className='paper'>
                                        <div className='section-description'>
                                        {
                                            state.statusCode === 200 ? <span dangerouslySetInnerHTML={{__html: state.aboutContent.body}}></span> : 'Nothing to show here.'
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <h2 className='section-header'>Skills</h2>
                            </div>
                            </div>
                        </React.Fragment>
                    );
                }
            }
        }
            </AboutConsumer>
        );
    }
}
export default About;