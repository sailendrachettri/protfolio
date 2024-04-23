import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import React, { useEffect, useState } from 'react';
import ProjectBox from './ProjectBox';
import { SERVER_URL } from '../../environment';
const URL = SERVER_URL

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${URL}/api/project/fetch`).then(response => {
            response.json().then(posts => {
                setProjects(posts);
                setLoading(false);
            });
        }).catch((err) => {
            console.log("Failed to fetch posts");
            setLoading(false);
        })
    }, []);

    return (
        <div className="projects" id="projects">
            <h3>Recent Projects Collection</h3>
            <p className="para">Everything I build or worked on as of now</p>
            <div className="project-container">
                { !loading ?
                    projects.length > 0 && projects.map((project, i)=>(
                        <ProjectBox {...project} key={i} />
                    ))

                    : <span style={{width: '70%', textAlign: 'center'}}>
                        <p>Loading the projects from database...</p>
                        <Skeleton baseColor='grey' count={10} />
                    </span>
                }
            </div>
        </div>
    );
};

export default Projects;
