import React from 'react';
import './education.css';
import School from './School';

export default function Education(props) {
    const schools = props.data;
    return (
        <div className='schools-section'>
            {
                schools.map((school) => (
                    <School key={school.id} school={school} />
                ))
            }
        </div>
    )
}
