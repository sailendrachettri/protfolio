import React from 'react'

import { Link } from 'react-router-dom'

import img1 from '../../assets/projectImages/img1.jpg'
import img2 from '../../assets/projectImages/img2.jpg'
import img3 from '../../assets/projectImages/img3.jpg'
import img4 from '../../assets/projectImages/img4.jpg'
import img5 from '../../assets/projectImages/img5.jpg'
import img6 from '../../assets/projectImages/img6.jpg'
import img7 from '../../assets/projectImages/img7.jpg'
import img8 from '../../assets/projectImages/img8.jpg'
import img9 from '../../assets/projectImages/img9.jpg'
import img10 from '../../assets/projectImages/img10.jpg'

const Projects = () => {
    return (
        <>
            <div className="projects" id="projects">
                <h3>Recent Projects Collection</h3>
                <p className="para">Everything I build or worked on as of now</p>

                <div className="project-container">
                    <div className="project-box">
                        <img src={img10} alt="Learn LLms" />
                            <h4 className="project-title">Learn LLMs</h4>
                            <p className="project-description">A platform for those who is seeking the resources to learn large
                                language
                                models. And read about the latest technologies emerging in the industry.</p>

                            <div className="btn-and-update">
                                <Link to="https://learnllm.onrender.com/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>

                                <p>Last updated: <span id="project-learnllms"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img9} alt="General knowledge" />
                            <h4 className="project-title">Gangtok Travellers - A tourse and traverls website to book a tour across
                                sikkim</h4>
                            <p className="project-description">The application is designed for individuals seeking a hassle-free
                                travel experience in Sikkim. It's the perfect platform to book your destination in the beautiful
                                region of Sikkim.</p>

                            <div className="btn-and-update">
                                <Link to="https://gtravellers.onrender.com/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>
                                <p>Last updated: <span id="project-gangtok-travellers"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img2} alt="General knowledge" />
                            <h4 className="project-title">GK Site - Learn something new each day</h4>
                            <p className="project-description">The main objective of this application is to provide the user about
                                recent current affairs,
                                history and lastest information.</p>

                            <div className="btn-and-update">
                                <Link to="https://gk-site.netlify.app/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>

                                <p>Last updated: <span id="project-gk-site"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img8} alt="Text-helper" />
                            <h4 className="project-title">Text Analyzer - Analyze your text for free</h4>
                            <p className="project-description">Text Analyzer helps the user to extract emails, convert to
                                upper-lower cases, remove extra
                                spaces, count the number of alphabets and words, etc.</p>
                            <div className="btn-and-update">
                                <Link to="https://tanalyzer-site.netlify.app/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>

                                <p>Last updated: <span id="project-text-analyzer"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img7} alt="checklist todo" />
                            <h4 className="project-title">Checklist - Todo list for productivity</h4>
                            <p className="project-description">By keeping checklist, you make sure that your tasks are written down
                                all in one place so you
                                don't forget anything important.</p>

                            <div className="btn-and-update">
                                <Link to="https://checklist-site.netlify.app/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>


                                <p>Last updated: <span id="project-checklist"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img6} alt="NBBGC FORCASTING" />
                            <h4 className="project-title">NBBGC Forcasting - Get all wheater information</h4>
                            <p className="project-description">The weather application will provide users with real-time weather
                                information, forecasts, and
                                other weather-related data, which can help them make better decisions about their day-to-day
                                activities.</p>

                            <div className="btn-and-update">
                                <Link to="https://nbbgc-forcasting.netlify.app/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>


                                <p>Last updated: <span id="project-nbbgc-forcasting"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img5} alt="Laugh dude" />
                            <h4 className="project-title">Laugh dude - Make me laugh by telling a joke</h4>
                            <p className="project-description">A simple jokes telling website that tells a jokes in every 10
                                seconds. All the jokes you get is
                                all from api. None of the hardcoded by the developer.</p>

                            <div className="btn-and-update">
                                <Link to="https://laughdude.netlify.app/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>


                                <p>Last updated: <span id="project-laugh-dude"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img4} alt="Encryasmi" />
                            <h4 className="project-title">Encryasmi - A text encryption and Decryption</h4>
                            <p className="project-description">The main objective of this application is to prevent unauthorized
                                users from being able to
                                access, view, and understand sensitive information.</p>

                            <div className="btn-and-update">
                                <Link to="https://encryasmi.netlify.app/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>


                                <p>Last updated: <span id="project-encryasmi"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img3} alt="Aphna news" />
                            <h4 className="project-title">Alphanews - Get the latest news everyday</h4>
                            <p className="project-description">The main focus of this application is to connect news articles from
                                all around the world and
                                deliver them to users as fast as possible in the best visualize way</p>

                            <div className="btn-and-update">
                                <Link to={img2} target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>


                                <p>Last updated: <span id="project-alphanews"></span></p>
                            </div>
                    </div>

                    <div className="project-box">
                        <img src={img1} alt="Toy Project" />
                            <h4 className="project-title">WinOverCrush - A simple toy program for Feb 2024</h4>
                            <p className="project-description">WinOverCrush a simple program that doesn't lets u say NO so that you
                                win over your crush.</p>

                            <div className="btn-and-update">
                                <Link to="https://win-over-crush.netlify.app/" target="_blank" className="viwe-project-btn">
                                    <button>See Dome</button>
                                </Link>


                                <p>Last updated: <span id="project-win-over-crush"></span></p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects