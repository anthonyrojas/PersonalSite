import React from 'react';
import './Jobs.css';
import JobDuties from './JobDuties';
const Jobs = (props) =>(
    <div className='jobs'>
        {
            props.jobs.map(job =>(
                <div className='row' key={job.id}>
                    <div className='col-10 col-md-9 col-lg-8'>
                        <div className='paper job-container'>
                            <img src={job.imageSource} alt={job.body} className='job-logo'/>
                            <div className='job-info'>
                                <h3 className='job-title'>{job.title}</h3>
                                <h4 className='job-company'>{job.body}</h4>
                                <p className='job-location'>{job.location}</p>
                                <p className='job-timeline'>{job.startDate} to {job.endDate !== '' ? job.endDate : 'Present'}</p>
                            </div>
                            <JobDuties duties={job.duties}/>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
);
export default Jobs;