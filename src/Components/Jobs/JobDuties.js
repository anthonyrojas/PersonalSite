import React from 'react';
import './Jobs.css';
const JobDuties = (props) => (
    <div className='duties-list-container'>
        <h4 className='duties-list-header'>Job Duties</h4>
        <ul className='duties-list'>
            {props.duties.map((duty)=>(
                <li key={duty.id} className='duties-list-item'>{duty.body}</li>
            ))}
        </ul>
    </div>
);
export default JobDuties;