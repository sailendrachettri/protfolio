import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="logo"> <img src="./imgs/Resources/logo2.svg" class='text-logo' />ILENDRA</div>
                <p>Living, learning, & leveling up one day at a time.</p>
                <div class="icons">
                    <a href="https://twitter.com/sailendrz" target="_blank"><img src="./imgs/social/twitter.png"
                        alt="Twitter" /></a>
                    <a href="https://www.instagram.com/01_sailendra" target="_blank"><img src="./imgs/social/insta.png"
                        alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/sailendrachettri/" target="_blank"><img
                        src="./imgs/social/linkedin.svg" alt="LinkedIn" /></a>
                    <a href="https://github.com/sailendrachettri/" target="_blank"><img src="./imgs/social/github.png"
                        alt="Github" /></a>
                    <a href=" https://wa.me/9832795894?text=Hi%20I%20Saw%20Your%20Portfolio!" target="_blank"><img
                        src="./imgs/social/whatsapp.png" alt="whatsapp" /></a>
                </div>
                <div class="copyright">
                    Copyright &copy; <span class="year">0000</span>. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer