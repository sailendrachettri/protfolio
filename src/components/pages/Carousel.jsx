import React, { useState, useEffect } from 'react';

// Import all images
import img1 from '../../assets/carousel/img1.jpg';
import img2 from '../../assets/carousel/img2.jpg';
import img3 from '../../assets/carousel/img3.jpg';
import img4 from '../../assets/carousel/img4.jpg';
import img5 from '../../assets/carousel/img5.jpg';
import img6 from '../../assets/carousel/img6.jpg';
import img7 from '../../assets/carousel/img7.jpg';
import img8 from '../../assets/carousel/img8.jpg';
import img9 from '../../assets/carousel/img9.jpg';
import img10 from '../../assets/carousel/img10.jpg';
import img11 from '../../assets/carousel/img11.jpg';
import img12 from '../../assets/carousel/img12.jpg';
import img13 from '../../assets/carousel/img13.jpg';
import img14 from '../../assets/carousel/img14.jpg';

// CODE IS WRITTEN USING CHATGPT 3.5 ..HEHE

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]); // Added images.length to the dependency array

  return (
    <>
      <div className="carousel-container">
        <h1>Snapshots of Life's Journey</h1>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentImageIndex ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
