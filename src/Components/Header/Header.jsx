import React, { useEffect, useState } from "react";
import "../../Styles/Header.css";
import { motion } from "framer-motion";

import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ transform: "translateY(-100%)" }}
        animate={{ transform: "translateY(0)", transition: { duration: 0.5 } }}
        className="header-container"
        style={{
          backgroundColor: scrolled ? "#25262A" : "",
          // boxShadow: scrolled ? "0 10px 15px 0 rgba(255, 175, 41, 0.25)" : "none"
        }}
      >
        <div className="header-inner-container">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            className="header-left-side"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className="logo-container"
            >
              <Link to={"/"}>
                <h1 className="logo-heading">Nitish</h1>
              </Link>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              className="nav-links"
            >
              <ul>
                <li>
                  <a
                    href="#home"
                    className={activeLink === "Home" ? "active" : ""}
                    onClick={() => handleLinkClick("Home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className={activeLink === "Skills" ? "active" : ""}
                    onClick={() => handleLinkClick("Skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className={activeLink === "Portfolio" ? "active" : ""}
                    onClick={() => handleLinkClick("Portfolio")}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className={activeLink === "Testimonial" ? "active" : ""}
                    onClick={() => handleLinkClick("Testimonial")}
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            className="header-right-side"
          >
            {isAuthenticated ? (
              <FaUser className="user-icon" />
            ) : (
              <Link to="/login">
                {" "}
                <button className="login-button">Login</button>
              </Link>
            )}
            <IoMenu className="menu-icon" onClick={() => setIsMenuOpen(true)} />

            <Link to={"/contact"}>
              <button className="contact-button">Contact me</button>
            </Link>
          </motion.div>
        </div>

        {/* Hamburger */}
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </motion.div>
    </>
  );
};

export default Header;
