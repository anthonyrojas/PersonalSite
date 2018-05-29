import React,{Component} from 'react';
import './Courses.css';
const Courses = ({courses}) =>(
  <ul className="courses-list">
    {courses.map(course =>(
      <li key={course.num} className="courses-list-item">{course.num} : {course.name}</li>
    ))}
  </ul>
);
export default Courses;
