import React from "react";
import { motion } from "framer-motion";
import "../../Styles/Hero.css";

import heroVector from "../../assets/Hero Vector.png";
import heroSvg from "../../assets/Hero Bg.svg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-container" id="home">
        <div className="hero-inner-container">
          {/* Left Side */}
          <motion.div className="hero-left-side">
            {/* Headings */}
            <div className="hero-heading-container">
              <motion.h2
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="hero-sub-heading"
              >
                _Introducing
              </motion.h2>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
                className="hero-heading1"
              >
                Hello
              </motion.h1>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
                className="hero-heading2"
              >
                I'm Nitish <span>Mehta</span>
              </motion.h1>

              <motion.p
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8,
                }}
                className="hero-description"
              >
                With over 2 years of experience as a full-stack developer, I've
                had the opportunity to work with a range of clients, from
                startups to established agencies, to build robust, scalable, and
                user-friendly digital solutions. My expertise spans both
                front-end and back-end development, ensuring seamless
                integration and performance across all platforms. Whether it's
                creating dynamic web applications, mobile solutions, or managing
                cloud-based systems, I bring a strong focus on efficiency,
                security, and user experience. I thrive in collaborative
                environments and am passionate about transforming ideas into
                fully functional products that meet business objectives and
                exceed client expectations.
              </motion.p>

              <Link to="/contact">
                <motion.button
                  initial={{ x: -150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    // type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1,
                  }}
                  className="hero-button"
                >
                  Contact me
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div className="hero-right-side">
            <div className="hero-img-container">
              <motion.img
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 20,
                  delay: 0.9,
                }}
                className="bgImg"
                src={heroSvg}
                alt=""
              />

              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1.2,
                }}
                className="vectorImg"
                src={heroVector}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
