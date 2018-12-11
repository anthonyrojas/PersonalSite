import React, {Component} from 'react';
class SchoolCourses extends Component{
    state = {
        showCourses: false,
        courses: this.props.courses
    }
    render(){
        return(
            <div className='courses-list-container'>
                <ul className='courses-list'>
                    {
                        this.state.courses.map((course)=>(
                            <li className='courses-list-item' key={course.id}>
                                <span className='course-number'>{course.title}</span> : {course.body}
                            </li>
                        ))
                    }
                </ul>
                <button className='courses-btn'>Show Courses</button>
            </div>
        );
    }
}
export default SchoolCourses;