import React from 'react'
import Navbar from './Navbar'
import Landingpage from './pages/Landingpage'
import Intro from './pages/Intro'
import Techstack from './pages/Techstack'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Design from './pages/Design'
import Footer from './pages/Footer'
import Carousel from './pages/Carousel'

const Homepage = () => {
    return (
        <>
            <div className='bg-color'>
                <Navbar />
                <main>
                    <Landingpage />
                    <Intro />
                    <Techstack />
                    <Projects />
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