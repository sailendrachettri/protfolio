import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { UserContext } from '../UserContext'
import { SERVER_URL } from '../environment'

const Navbar = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);

    // variables
    const navigate = useNavigate();
    const resumeURL = 'https://drive.google.com/file/d/10V7j5lAsDgffbvn6j9cSjWwGLQLbY-nz/view?usp=sharing';
    const merchantURL = 'https://codebinds.blinkstore.in';
    const linkedinURL = 'https://www.linkedin.com/in/sailendrachettri';
    const twitterURL = 'https://twitter.com/sailendrz';

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
                        {!username && <span style={{ display: 'flex' }}>
                            <li><Link to="/login">Login</Link></li>
                            {/* <li><Link to="/register">Register</Link></li> */}
                        </span>}
                        {username && <span style={{ display: 'flex' }}>
                            <li><Link to="/addprojects">Add Projects</Link></li>
                            <li><Link onClick={handleLogout}>Logout</Link></li>
                        </span>}
                        <li><Link to="#projects">Projects</Link></li>
                        <li><Link to={merchantURL}>Store</Link></li>
                        <li><Link to={resumeURL} className='active'>Resume</Link></li>
                        <li><Link to={linkedinURL}>LinkedIn</Link></li>
                        <li><Link to={twitterURL}>Twitter</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar