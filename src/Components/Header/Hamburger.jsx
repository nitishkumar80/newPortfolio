import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div
        className="hamburger-container"
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-200%)",
        }}
      >
        <div className="hamburger-inner-container">
          <ul>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#about">Skill</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#contact">Testimonial</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link to={"/profile"}>
              Profile
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hamburger-btn">
            <Link onClick={() => setIsMenuOpen(false)} className="login-button-2" to={"/login"}>
              Login
            </Link>

            <Link onClick={() => setIsMenuOpen(false)} className="contact-button-2" to={"/contact"}>
              <p className="link-text">Contact</p>
            </Link>
          </div>
        </div>
        <IoMdClose
          className="close-icon"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default Hamburger;
