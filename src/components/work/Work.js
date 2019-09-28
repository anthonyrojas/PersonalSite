import React from 'react';
import './work.css';
import Job from './Job';

export default function Work(props){
    const jobs = props.data;
    return(
        <div className='row work-row'>
            {
                jobs.map((job)=>(
                    <Job key={job.id} job={job} />
                ))
            }
        </div>
    );
}