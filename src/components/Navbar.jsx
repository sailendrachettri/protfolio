import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <header>
                <div class="logo">
                    <Link to="/"> <img src={logo} alt='Logo' class='text-logo' />ILENDRA </Link>
                </div>
                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <nav class="navbar">
                    <ul>
                        <li><Link to="mailto:sailendra9083@gmail.com" class="active">Email</Link></li>
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