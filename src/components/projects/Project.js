import React, {useState, useRef} from 'react';
import './projects.css';
export default function Project(props){
    const [descriptionHeight, setDescriptionHeight] = useState(0);
    const [displayDescription, setDisplayDescription] = useState(false);
    const project = props.project;
    const descRef = useRef(null);
    const descContainerRef = useRef(null);
    const onToggleBtnClick = (e) => {
        console.log(descRef.current.clientHeight);
        let height = 0;
        if(displayDescription){
            height = 0;
        }
        else{
            height = descRef.current.clientHeight + 50;
        }
        setDisplayDescription(!displayDescription);
        setDescriptionHeight(height);
    }
    return(
        <div className='project-container'>
            <div className='project-image-container'>
                <img className='project-image' src={project.frontmatter.featuredImage.publicURL} alt={project.frontmatter.title} />
            </div>
            <div className='project-data-container'>
                <div className='project-header'>
                    <h4 className='project-title'>{project.frontmatter.title}</h4>
                </div>
                <div ref={descContainerRef}
                className='project-description-container'
                style={{height: descriptionHeight + 'px'}}>
                    <div 
                        ref={descRef}
                        className='project-description'
                        dangerouslySetInnerHTML={{__html: project.html}}>
                    </div>
                </div>
                <div className='project-action-container'>
                    <button className='project-btn' onClick={onToggleBtnClick.bind(this)}>
                        {
                            displayDescription ?
                            'Hide'
                            : 
                            'Show Description'
                        }
                    </button>
                </div>
            </div>
        </div>        
    )
}