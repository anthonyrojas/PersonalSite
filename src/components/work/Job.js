import React from 'react';

export default function Job(props) {
    const job = props.job;
    return(
        <div className='job-container'>
            <img className='job-img' alt={job.title} title={job.title} src={job.frontmatter.featuredImage.publicURL} />
            <div className='job-data-container'>
                <div className='job-data' dangerouslySetInnerHTML={{__html: job.html}}></div>
            </div>
        </div>
    )
}