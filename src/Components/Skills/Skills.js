import React, {Component} from 'react';
import './Skills.css';
import SkillsItem from './SkillsItem';
import SkillsSlider from './SkillsSlider';
class Skills extends Component{
    render(){
        return(
            <React.Fragment>
                {
                    this.props.skillsContent.map((skillList) => {
                        return(
                            <div className='row' key={skillList.id}>
                                <div className='col-9 col-md-9 col-lg-7'>
                                    <div className='paper skill-list-paper'>
                                        <div className='skill-list-header'>
                                            <h3 className='skill-list-title'>{skillList.title}</h3>
                                        </div>

                                        <SkillsSlider skillsContent={skillList}/>
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