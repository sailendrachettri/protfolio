import React from 'react'
import { Link } from 'react-router-dom'
const SERVER_URL = 'http://localhost:5000'

const ProjectBox = ({id, cover, title, alt, summary, link}) => {
    console.log(`${SERVER_URL}/${cover}`)
    
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