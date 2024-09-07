// TestimonialCard.jsx
import React from "react";
import quotation from "../../assets/quotation.svg";

const TestimonialCard = ({ img, name, designation, text }) => {
  return (
    <>
      <div className="testimonial-card-container">
        {/* Left Side */}
        <div className="left-side">
          <img src={img} alt="" />
        </div>

        {/* Right Side */}
        <div className="right-side">
          <img className="quote-icon" src={quotation} alt="" />

          <p className="testimonial-text">{text}</p>
          <h1 className="testimonial-name">{name}</h1>
          <p className="testimonial-designation">{designation}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
