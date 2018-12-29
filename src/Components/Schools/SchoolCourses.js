import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
class SchoolCourses extends Component{
    state = {
        showCourses: false,
        courses: this.props.courses
    }
    toggleCoursesVisibility(){
        this.setState({
            ...this.state,
            showCourses: !this.state.showCourses
        });
    }
    render(){
        return(
            <div className='courses-list-container'>
                <button className='courses-btn ripple-courses-btn' onClick={this.toggleCoursesVisibility.bind(this)}>{this.state.showCourses ? 'Hide' : 'Show'} Courses</button>
                <CSSTransition in={this.state.showCourses} timeout={1000} classNames='toggle-courses' unmountOnExit>
                    <TransitionGroup component='ul' className='courses-list'>
                        {
                            this.state.courses.map((course)=>(
                                <CSSTransition key={course.id} in={this.state.showCourses} timeout={500} classNames='fade-class'>
                                    <li className='courses-list-item' key={course.id}>
                                        <span className='course-number'>{course.title}</span> : {course.body}
                                    </li>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </CSSTransition>
            </div>
        );
    }
}
export default SchoolCourses;