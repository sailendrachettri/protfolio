import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../environment'
import dateFormat from 'dateformat'
import { UserContext } from '../../UserContext';


const ProjectBox = ({ _id, cover, title, alt, summary, link, updatedAt }) => {    
    return (
        <>
            <div key={_id} className="project-box">
                <img src={`${SERVER_URL}/${cover}`} alt={alt} />
                <h4 className="project-title">{title}</h4>
                <p className="project-description">{(summary.length < 180) ? summary : summary.substring(0, 180) + "(...more)"}</p>
                <div className='last-updated'>Last upadted: {dateFormat(updatedAt, "DDDD, dd mmmm yyyy h:MM TT")}</div>
                <div className="viwe-project-btn">
                    <Link to={link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                        <button>See Demo</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectBox