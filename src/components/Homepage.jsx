import React, { useState } from 'react'
import Navbar from './Navbar'
import Landingpage from './pages/Landingpage'
import Intro from './pages/Intro'
import Techstack from './pages/Techstack'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Design from './pages/Design'
import Footer from './pages/Footer'
import Carousel from './pages/Carousel'
import ExperienceEducation from './pages/ExperienceEducation'
import LoadingPage from '../Utils/LoadingPage'
import Contact from './pages/Contact'

const Homepage = () => {
    // HOOKS
    const [pageLoading, setPageLoading] = useState(true);

    setTimeout(() => {
        setPageLoading(false);
    }, 2000);

    if(pageLoading){
        return        (
            <div className='loading-page'>
                <LoadingPage />
            </div>
        );
    }

    return (
        <>
            <div className='bg-color'>
                <Navbar />
                <main>
                    <Landingpage />
                    <Intro />
                    <Techstack />
                    <ExperienceEducation />
                    <Projects />
                    <Contact />
                    <Services />
                    <Carousel />
                    <Design />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Homepage