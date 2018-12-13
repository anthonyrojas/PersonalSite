import React, {Component} from 'react';
class SchoolCourses extends Component{
    state = {
        showCourses: false,
        courses: this.props.courses
    }
    toggleCoursesVisibility(){
    }
    render(){
        return(
            <div className='courses-list-container'>
                <button className='courses-btn' onClick={this.toggleCoursesVisibility.bind(this)}>Show Courses</button>
                <ul className={this.state.showCourses ? 'courses-list' : 'no-display'}>
                    {
                        this.state.courses.map((course)=>(
                            <li className='courses-list-item' key={course.id}>
                                <span className='course-number'>{course.title}</span> : {course.body}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default SchoolCourses;