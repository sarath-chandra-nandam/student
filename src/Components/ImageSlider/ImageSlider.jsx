import React, { useState } from 'react';
import './ImageSlider.css'; // Import your CSS file
import classroom from '../ImageSlider/Images/classroom.jpg';
import exam from '../ImageSlider/Images/exam.jpg';
import lab from '../ImageSlider/Images/lab.jpeg';
import ground from '../ImageSlider/Images/ground.jpg';
import placements from '../ImageSlider/Images/placements.jpg';
import library from '../ImageSlider/Images/library.jpg';
import webinar from '../ImageSlider/Images/webinar.jpg';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Set the initial active slide (index starts from 0)

  const slides = [
    { id: 1, name: 'ClassRoom', role: 'Infrastructure', image: classroom },
    { id: 3, name: 'Examination', role: 'Conduct Strictly', image: library },
    { id: 4, name: 'Ground', role: 'Play A Lot', image: ground },
    { id: 5, name: 'Placements', role: 'Get What You Want', image: placements },
    { id: 6, name: 'Labs', role: 'Improves Talents', image: lab },
    { id: 7, name: 'Webinar', role: 'A Place Of Opportunities', image: webinar }
  ];

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="slider-container">
      <div className="slider-images">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-img ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleSlideClick(index)}
          >
            <img src={slide.image} alt={slide.name} />
            <h1>{slide.name}</h1>
            <div className="details">
              <h2>{slide.name}</h2>
              <p>{slide.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
