import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h1>Reach Out To Me</h1>
            <p>Say Hi before you go</p>

            <div className='contact-box'>
                <p>
                    <span class="material-symbols-outlined"> phone_in_talk </span>
                    <span> <Link to="tel: 9832795894">Make a Call:</Link>+91 9832795894 </span>
                </p>
                <p>
                    <span class="material-symbols-outlined"> dynamic_feed </span>
                    <span><Link to="mailto:sailendra9083@gmail.com">Email Instead:</Link>sailendra9083@gmail.com</span>
                </p>
            </div>
        </div>
    )
}

export default Contact