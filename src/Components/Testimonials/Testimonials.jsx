import React from "react";
import "../../Styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import testimonialsData from "../../assets/Testimonials data";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-container" id="testimonial">
        <div className="testimonial-inner-container">
          <Carousel
            className="carausel"
            infiniteLoop={true}
            autoPlay={true}
            emulateTouch={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            interval={2000}
          >
            {testimonialsData.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
