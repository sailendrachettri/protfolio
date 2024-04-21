import React from 'react'
import Navbar from './Navbar'
import Landingpage from './pages/Landingpage'
import Intro from './pages/Intro'
import Techstack from './pages/Techstack'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Design from './pages/Design'
import Footer from './pages/Footer'

const Homepage = () => {
    return (
        <>
            <div className='bg-color'>
                <Navbar />
                <Landingpage />
                <Intro />
                <Techstack />
                <Projects />
                <Services />
                <Design />
                <Footer />
            </div>
        </>
    )
}

export default Homepage