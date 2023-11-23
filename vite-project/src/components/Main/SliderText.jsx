import React from 'react';

const SliderText = ({ text, text2 }) => {
  return (
    <div className="slider-text-container">
      <div className="slider-text">{text}</div>
      {text2 && <div className="slider-text">{text2}</div>}
    </div>
  );
};

export default SliderText;
