import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h1>Reach Out To Me</h1>
            <p className='para'>Say Hi before you go - I'm just a call away</p>

            <div className='contact-box'>
                <p>
                    <span class="material-symbols-outlined"> phone_in_talk </span>
                    <span> Make a Call: <Link to="tel: 9832795894"> +91 9832795894</Link>  </span>
                </p>
                <p>
                    <span class="material-symbols-outlined"> dynamic_feed </span>
                    <span>Email Instead: <Link to="mailto:sailendra9083@gmail.com"> sailendra9083@gmail.com</Link></span>
                </p>
            </div>
        </div>
    )
}

export default Contact