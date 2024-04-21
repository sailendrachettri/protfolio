import React from 'react';
import heroImage from '../../assets/hero.png';

const Landingpage = () => {
  return (
    <>
      <div class="landing-page">
            <h2>Fullstack Developer, Computer Programmer and Designer</h2>
            <p>Technology enthusiast, learning whatever interest me the most.</p>
            <img src={heroImage} alt="homepage" />
        </div>
    </>
  )
}

export default Landingpage