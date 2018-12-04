import React, {Component} from 'react';
import {db} from '../../firebaseInit';
import './Skills.css';
import SkillsItem from './SkillsItem';
import {AboutConsumer} from '../About/AboutContext';
class Skills extends Component{
    // render(){
    //     return(
    //         <React.Fragment>
    //             {
    //                 this.props.skillsData.map((skillList) => {
    //                     return(
    //                         <div className='row' key={skillList.id}>
    //                             <div className='col-9 col-md-9 col-lg-8'>
    //                                 <div className='paper'>
    //                                     <h3>{skillList.id}</h3>
    //                                     {
    //                                         skillList.skillsList.map((skill)=>(
    //                                             <SkillsItem skill={skill} key={skill.id}/>
    //                                         ))
    //                                     }
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     );
    //                 })
    //             }
    //         </React.Fragment>
    //     );
    // }
    render(){
        return(
            <AboutConsumer>
                {(context)=>{
                    return(
                        <React.Fragment>
                        {context.skillsContent.map((skillList) => {
                            return(
                                <div className='row' key={skillList.id}>
                                    <div className='col-9 col-md-9 col-lg-8'>
                                        <div className='paper'>
                                            <h3>{skillList.title}</h3>
                                            {
                                                skillList.skilllsList.forEach(skill => {
                                                    console.log(skill)  
                                                })
                                            }
                                            {
                                                skillList.skillsList.map((skill)=>(
                                                    <React.Fragment>
                                                        {console.log(skill)}
                                                        <SkillsItem skill={skill} key={skill.id}/>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        </React.Fragment>
                    );
                }}
            </AboutConsumer>
        );
    }
}
export default Skills;