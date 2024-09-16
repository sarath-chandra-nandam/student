import React from 'react';
import './Banner.css';
import Lottie from 'react-lottie';
import Banner2Lottie from '../../Assets/Banner2Lottie.json'
import image1 from '../../Assets/clg1.png';
import image2 from '../../Assets/clg2.jpeg';
import image3 from '../../Assets/clg3.jpeg';
import Bannerpic from '../../Assets/Bannerpic.png'

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="content">
        <h1>Welcome to Siddhartha College</h1>
        <p>Providing quality education since 19XX</p>
        <button>Explore More</button>
      </div>
      <div className="images">
      
   
        <img src={Bannerpic } alt="Image 1" className='image1' />
        {/* <div className="image-group">
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </div> */}
      </div>

      
    </div>
  );
};

export default Banner;
