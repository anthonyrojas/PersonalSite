import React, {Component} from 'react';
import {db} from '../../firebaseInit';
import './Skills.css';
import SkillsItem from './SkillsItem';
class Skills extends Component{
    render(){
        return(
            <React.Fragment>
                {
                    this.props.skillsContent.map((skillList) => {
                        return(
                            <div className='row' key={skillList.id}>
                                <div className='col-9 col-md-9 col-lg-8'>
                                    <div className='paper skill-list-container'>
                                        <h3 className='skill-list-title'>{skillList.title}</h3>
                                        {
                                            skillList.skillsList.map((skill)=>(
                                                <SkillsItem skill={skill} key={skill.id}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </React.Fragment>
        );
    }
}
export default Skills;