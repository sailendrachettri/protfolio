import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/"> <img src={logo} alt='Logo' className='text-logo' />ILENDRA </Link>
                </div>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="mailto:sailendra9083@gmail.com" className="active">Email</Link></li>
                        <li><Link to="#projects">Projects</Link></li>
                        <li><Link to="https://www.linkedin.com/in/sailendrachettri/">LinkedIn</Link></li>
                        <li><Link to="https://twitter.com/sailendrz">Twitter</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar