import React, { useState, useEffect } from 'react';

// Import all images
import img1 from '../../assets/carousel/img1.jpg';
import img2 from '../../assets/carousel/img2.jpg';
import img3 from '../../assets/carousel/img3.jpg';
import img4 from '../../assets/carousel/img4.jpg';
import img5 from '../../assets/carousel/img5.jpg';
import img6 from '../../assets/carousel/img6.jpg';
import img7 from '../../assets/carousel/img7.jpg';
import img12 from '../../assets/carousel/img12.jpg';
import img13 from '../../assets/carousel/img13.jpg';
import img14 from '../../assets/carousel/img14.jpg';
import img15 from '../../assets/carousel/img15.jpg';
import img16 from '../../assets/carousel/img16.jpg';
import img17 from '../../assets/carousel/img17.jpg';
import img18 from '../../assets/carousel/img18.jpeg';

// CODE IS WRITTEN USING CHATGPT 3.5 ..HEHE

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img18, img1,img2,img3,img4,img15, img5,img6, img16, img7,img12,img13,img14, img17];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]); // Added images.length to the dependency array

  return (
    <div className='carousel'>
        <h1>Snapshots of Life's Journey</h1>
        <p className='para'> An unpredictable adventure, embraced wholeheartedly</p>
      <div className="carousel-container">
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
    </div>
  );
};

export default Carousel;
