import React from 'react';
import heroImage from '../../assets/hero.png';

const Landingpage = () => {
  return (
    <>
      <div className="landing-page">
            <h2><span className='heading-txt'>CODING WITH PASSION</span>, CREATING WITH PURPOSE</h2>
            <p>Fullstack Developer, Computer Programmer and Vector Designer</p>
            <img src={heroImage} alt="homepage" />
        </div>
    </>
  )
}

export default Landingpage