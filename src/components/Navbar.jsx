import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import {UserContext} from '../UserContext'
import { SERVER_URL } from '../environment'

const Navbar = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);

    // variables
    const navigate = useNavigate();

    // ----------------------------METHODS----------------------------
    // get the looged in user information
    useEffect(() => {
        fetch(`${SERVER_URL}/api/auth/profile`, {
            credentials: 'include',

        }).then(response => {
            response.json().then(userDoc => {
                setUserInfo(userDoc)

            }).catch(() => {
                console.log("Failed to fetch profile information");
            })
        }).finally(() => {
            console.log("Server error - Failed to fetch profile information");
        })
    }, [setUserInfo]);

    const handleLogout = () => {

        fetch(`${SERVER_URL}/api/auth/logout`, {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null);

        navigate("/login");
    }

    // sometimes username can be null so for that questino mark
    let username = userInfo?.username;

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
                        {!username && <span style={{display: 'flex'}}>
                            <li><Link to="/login">Login</Link></li>
                            {/* <li><Link to="/register">Register</Link></li> */}
                        </span>}
                       {username && <span style={{display: 'flex'}}>
                            <li><Link to="/addprojects">Add Projects</Link></li>
                            <li><Link onClick={handleLogout}>Logout</Link></li>
                        </span>}
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