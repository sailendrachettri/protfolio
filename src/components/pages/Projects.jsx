import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/projectImages/img1.jpg';
import img2 from '../../assets/projectImages/img2.jpg';
import img3 from '../../assets/projectImages/img3.jpg';
import img4 from '../../assets/projectImages/img4.jpg';
import img5 from '../../assets/projectImages/img5.jpg';
import img6 from '../../assets/projectImages/img6.jpg';
import img7 from '../../assets/projectImages/img7.jpg';
import img8 from '../../assets/projectImages/img8.jpg';
import img9 from '../../assets/projectImages/img9.jpg';
import img10 from '../../assets/projectImages/img10.jpg';

const projectData = [
    {
        id: 1,
        title: 'Learn LLMs',
        description: 'A platform for those who are seeking the resources to learn large language models. And read about the latest technologies emerging in the industry.',
        link: 'https://learnllm.onrender.com/',
        image: img10,
        alt: 'Learn LLMs',
    },
    {
        id: 2,
        title: 'Gangtok Travellers - A tours and travels website',
        description: 'The application is designed for individuals seeking a hassle-free travel experience in Sikkim. It\'s the perfect platform to book your destination in the beautiful region of Sikkim.',
        link: 'https://gtravellers.onrender.com/',
        image: img9,
        alt: 'General knowledge',
    },
    {
        id: 3,
        title: 'General Knowledge Site',
        description: 'The main objective of this application is to provide the user about recent current affairs, history and latest information.',
        link: 'https://gk-site.netlify.app/',
        image: img2,
        alt: 'General knowledge',
    },
    {
        id: 4,
        title: 'Text Analyzer',
        description: 'Text Analyzer helps the user to extract emails, convert to upper-lower cases, remove extra spaces, count the number of alphabets and words, etc.',
        link: 'https://tanalyzer-site.netlify.app/',
        image: img8,
        alt: 'Text-helper',
    },
    {
        id: 5,
        title: 'Checklist - For Productivity',
        description: 'By keeping checklist, you make sure that your tasks are written down all in one place so you don\'t forget anything important.',
        link: 'https://checklist-site.netlify.app/',
        image: img7,
        alt: 'checklist todo',
    },
    {
        id: 6,
        title: 'NBBGC Forcasting - Get Weather Info',
        description: 'The weather application will provide users with real-time weather information, forecasts, and other weather-related data, which can help them make better decisions about their day-to-day activities.',
        link: 'https://nbbgc-forcasting.netlify.app/',
        image: img6,
        alt: 'NBBGC FORCASTING',
    },
    {
        id: 7,
        title: 'Laugh dude - Make me laugh',
        description: 'A simple jokes telling website that tells a jokes in every 10 seconds. All the jokes you get is all from API. None of the hardcoded by the developer.',
        link: 'https://laughdude.netlify.app/',
        image: img5,
        alt: 'Laugh dude',
    },
    {
        id: 8,
        title: 'Encryasmi - Encryption & Decryption',
        description: 'The main objective of this application is to prevent unauthorized users from being able to access, view, and understand sensitive information.',
        link: 'https://encryasmi.netlify.app/',
        image: img4,
        alt: 'Encryasmi',
    },
    {
        id: 9,
        title: 'Alphanews - News WebApp',
        description: 'The main focus of this application is to connect news articles from all around the world and deliver them to users as fast as possible in the best visualize way.',
        link: 'https://alphanews.com/',
        image: img3,
        alt: 'Alphanews',
    },
    {
        id: 10,
        title: 'WinOverCrush - Valintine 2024',
        description: 'WinOverCrush a simple program that doesn\'t lets you say NO so that you win over your crush.',
        link: 'https://win-over-crush.netlify.app/',
        image: img1,
        alt: 'Toy Project',
    },
];

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h3>Recent Projects Collection</h3>
            <p className="para">Everything I build or worked on as of now</p>
            <div className="project-container">
                {projectData.map(project => (
                    <div key={project.id} className="project-box">
                        <img src={project.image} alt={project.alt} />
                        <h4 className="project-title">{project.title}</h4>
                        <p className="project-description">{(project.description).length < 150 ? (project.description) : project.description.substring(0, 150)+"(more)"}</p>
                        <div className="viwe-project-btn">
                            <Link to={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                                <button className=''>See Demo</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
