import React from 'react';
import './Schools.css';
import SchoolCourses from './SchoolCourses';
const Schools = (props) => (
    <React.Fragment>
        {
            props.schools.map((school)=>(
                <div className='row' key={school.id}>
                    <div className='col-md-9 col-lg-8'>
                        <div className='paper school-paper-container'>
                            <div className='school-logo'>
                                <img src={school.imageSource} alt={school.title} className='school-logo-img'/>
                            </div>
                            <div className='school-header'>
                                <h3 className='school-title'>{school.title}</h3>
                                <h4 className='school-degree'>{school.body}</h4>
                                <p className='school-years'>{school.timeStart} to {school.timeEnd}</p>
                            </div>
                            <SchoolCourses courses={school.courses}/>
                        </div>
                    </div>
                </div>
            ))
        }
    </React.Fragment>
);
export default Schools;