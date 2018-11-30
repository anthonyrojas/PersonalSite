import React, {Component,PureComponent} from 'react';
import {db} from '../../firebaseInit';
import './Skills.css';
import SkillsItem from './SkillsItem';
class Skills extends Component{
    render(){
        return(
            <React.Fragment>
                {
                    this.props.skillsData.map((skillList) => {
                        return(
                            <div className='row' key={skillList.id}>
                                <div className='col-9 col-md-9 col-lg-8'>
                                    <div className='paper'>
                                        <h3>{skillList.id}</h3>
                                        {
                                            console.log(skillList.skillsList)
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