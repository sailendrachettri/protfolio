import React from 'react'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../environment'
const URL = SERVER_URL

const ProjectBox = ({id, cover, title, alt, summary, link}) => {    
    return (
        <>
            <div key={id} className="project-box">
                <img src={`${SERVER_URL}/${cover}`} alt={alt} />
                <h4 className="project-title">{title}</h4>
                <p className="project-description">{summary}</p>
                <div className="viwe-project-btn">
                    <Link to={link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                        <button className=''>See Demo</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectBox