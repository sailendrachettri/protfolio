import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../environment'
import dateFormat from 'dateformat'
import { UserContext } from '../../UserContext';


const ProjectBox = ({ id, cover, title, alt, summary, link, updatedAt }) => {
    const { userInfo } = useContext(UserContext);
    const activeUser = userInfo?.username;

    
    return (
        <>
            <div key={id} className="project-box">
                <img src={`${SERVER_URL}/${cover}`} alt={alt} />
                <h4 className="project-title">{title}</h4>
                <p className="project-description">{(summary.length < 180) ? summary : summary.substring(0, 180) + "(...more)"}</p>
                <div className='last-updated'>Last upadted: {dateFormat(updatedAt, "DDDD, dd mmmm yyyy h:MM TT")}</div>
                <div className="viwe-project-btn">
                    <Link to={link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                        <button>See Demo</button>
                    </Link>
                </div>
                {
                    // If the user loggedIn the only show the updated today button
                    // click the button only if the project is updated today, so that it changes the last updated status of the project
                    activeUser &&
                    <div className='viwe-project-btn'>
                       <Link to={`/update/${id}`}> <button>Updated Today</button> </Link>
                    </div>
                }
            </div>
        </>
    )
}

export default ProjectBox