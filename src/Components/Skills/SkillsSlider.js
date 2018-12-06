import React, {Component} from 'react';
import './Skills.css'
import SkillsItem from './SkillsItem';
class SkillsSlider extends Component{
    state={
        currentIndex: 0,
        skills: this.props.skillsContent.skillsList
    }
    nextSlide(){
        const skillsLength = this.state.skills.length;
        if(this.state.currentIndex === (skillsLength - 1)){
            this.setState({
                ...this.state,
                currentIndex: 0
            });
        }else{
            this.setState({
                ...this.state,
                currentIndex: this.state.currentIndex + 1
            });
        }
    }
    previousSlide(){
        const skillsLength = this.state.skills.length;
        if(this.state.currentIndex === 0){
            this.setState({
                ...this.state,
                currentIndex: skillsLength - 1
            });
        }else{
            this.setState({
                ...this.state,
                currentIndex: this.state.currentIndex - 1
            });
        }
    }
    render(){
        return(
            <div className='skill-list-container'>
                <i className='material-icons slider-icon' onClick={this.previousSlide.bind(this)}>chevron_left</i>                                            
                <ul className='skill-list'>
                {
                    this.state.skills.map((skill, index)=>(
                        <SkillsItem currentSlide={this.state.currentIndex} skill={skill} key={skill.id} index={index}/>
                    ))
                }
                </ul>                                            
                <i className='material-icons slider-icon' onClick={this.nextSlide.bind(this)}>chevron_right</i>                                            
            </div>            
        );
    }
}
export default SkillsSlider;