import React from 'react'

export default function School(props) {
    const school = props.school;
    return (
        <div className='school-container'>
            <img className='school-img' alt={school.title} title={school.title} src={school.frontmatter.featuredImage.publicURL} />
            <div className='school-data-container'>
                <div className='school-data' dangerouslySetInnerHTML={{__html: school.html}}></div>
            </div>
        </div>
    )
}
