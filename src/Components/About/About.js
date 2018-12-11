import React,{Component} from 'react';
import './About.css';
import Image from '../Image/Image';
import {AboutConsumer} from './AboutContext';
import Skills from '../Skills/Skills';
import Loading from '../Loading/Loading';
class About extends Component{
    render(){
        return(
        <AboutConsumer>
            {(state) =>{
                if(state.aboutLoading || state.skillsLoading){
                    return(
                        <Loading />
                    );
                }else if(state.err){
                    return(
                        <div className='error-page-display'>
                            <p>Error loading data...</p>
                        </div>
                    );
                }else{
                    return(
                        <React.Fragment>
                            <div className='About'>
                                <div className='row'>
                                    <h2 className='section-header'>About Me</h2>
                                </div>
                                <div className='row'>
                                    <Image imageSource={state.aboutContent.imageSource} altText='profile image' imgClass='profile-image' loader='profile-loader'/>
                                </div>
                                <div className='row'>
                                    <div className='col-md-9 col-lg-8'>
                                        <div className='paper'>
                                            <div className='section-description'>
                                                <span dangerouslySetInnerHTML={{__html: state.aboutContent.body}}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <h2 className='section-header'>Skills</h2>
                                </div>
                                <Skills skillsContent={state.skillsContent} />
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
// <img src={state.aboutContent.imageSource} alt="profile image" className='profile-image'/>