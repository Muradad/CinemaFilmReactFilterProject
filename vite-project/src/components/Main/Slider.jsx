import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import SliderText from "./SliderText";
import { RxDotFilled } from "react-icons/rx";

import "./Slider.scss";

export default function Slider() {
  const slides = [
    {
      url: "https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/03/hero.jpg",
      text: "bir",
      text2: "ACTION, ADVENTURE, FANTASY Up in smoke: The remake"
    },
    {
      url: "https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/hero-2-1.jpg",
      text: "iki",
    },
    {
      url: "https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/03/hero-2.jpg",
      text: "uc",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <div className="slider-container">
        <div className="Slider" style={{ backgroundImage: `url(${slides[currentSlide].url})` }}>
          <SliderText text={slides[currentSlide].text} />
        </div>
      </div>
      <div className='dashedIcons'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </>
  );
}
