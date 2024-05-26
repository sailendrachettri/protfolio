import React from 'react'

const ExperienceEducation = () => {
    return (
        <>
            <div className='exp-edu-section'>
                <h1>Experience & Education</h1>

                <div className='info-block'>
                    <div className='exp-edu'>
                        <h2>Education</h2>

                        <div className='info'>
                            <div className='dot-line'>
                                <p className='dot'>&#x2022;</p>
                                {/* <p className='line'>&#124;</p> */}
                            </div>

                            <div className='bio'>
                                <p className='year'>Oct 2023 - Present(July 2025)</p>
                                <h3>Sikkim University</h3>
                                <p className='summary'>Enrolled in Sikkim University's prestigious MCA program, I am acquiring advanced knowledge and skills in computer applications, programming, software development, and related areas.</p>
                            </div>

                        </div>
                        <div className='info'>
                            <div className='dot-line'>
                                <p className='dot'>&#x2022;</p>
                            </div>

                            <div className='bio'>
                                <p className='year'>Nov 2020 - Oct 2023</p>
                                <h3>NBBGC Tadong, Gangtok</h3>
                                <p className='summary'>Graduated with B.Voc in Software Development from NBBGC Tadong. The program built a strong foundation in computer programming, software design and development methodologies.</p>
                            </div>

                        </div>
                        <div className='info'>
                            <div className='dot-line'>
                                <p className='dot'>&#x2022;</p>
                            </div>

                            <div className='bio'>
                                <p className='year'>Feb 2018 - March 2020</p>
                                <h3>Namthang Sr Sec School</h3>
                                <p className='summary'>Completed 11th and 12th at Namthang Sr Sec School, majoring in Information Technology. IT specialization equipped me with computer fundamentals and programming skills for higher computing education.</p>
                            </div>

                        </div>

                    </div>

                    <div className='exp-edu'>
                        <h2>Experience</h2>

                        <div className='info'>
                            <div className='dot-line'>
                                <p className='dot'>&#x2022;</p>
                            </div>

                            <div className='bio'>
                                <p className='year'>May 2023 - Present(Aug 2023)</p>
                                <h3>Backend Dev Intern @Enfocar IT Solution</h3>
                                <p className='summary'>As a backend developer I am working with Node.js, Express, and other technologies to build the backend. I am gaining valuable experience in backend development, APIs, databases, and integrating the full stack.</p>
                            </div>

                        </div>
                        <div className='info'>
                            <div className='dot-line'>
                                <p className='dot'>&#x2022;</p>
                            </div>

                            <div className='bio'>
                                <p className='year'>Dec 2019 - Jan 2024</p>
                                <h3>OJT Training @ICFAI University</h3>
                                <p className='summary'>I underwent a 1-month on-the-job training at the University where I acquired skills in website designing, including front-end development and UI creation. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceEducation