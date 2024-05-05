import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../environment'
import Skeleton from 'react-loading-skeleton';


const Techstack = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        fetch(`${SERVER_URL}/api/project/fetchskills`).then(response => {
            response.json().then(data => {
                setLoading(false);
                setError(false);
                setSkills(data.skills);

            }).catch(err => {
                setLoading(false);
                setError(true);
                console.log("Failed to fetch skills data");
            })
            setLoading(false);
            setError(true);
            console.log("Failed to fetch skills data");
        })
    }, [])

    if (error) {
        return (
            <>
                <h3 className='error-heading'>Failed to Load skills information from database</h3>
                <a href="/">
                    <button className='error-btn'>Please Reload</button>
                </a>
            </>
        )
    }



    return (
        <>
            <div className="teck-stack">
                <h1>Technology Stacks</h1>
                <p className='para'>Curated capabilities, unleashing untapped potential</p>
                <ul>
                    {!loading ?
                        skills.length > 0 && skills.map((skill, index) =>
                            <li key={index} className={skill.highlight ? "active" : ""}>{skill.skillname}</li>
                        )

                        : <span style={{ width: '70%', textAlign: 'center' }}>
                            <p>Loading the Skills from database...</p>
                            <Skeleton baseColor='grey' count={5} />
                        </span>
                    }
                </ul>
            </div>
        </>
    )
}

export default Techstack