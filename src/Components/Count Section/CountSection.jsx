import React, { useRef } from "react";
import "../../Styles/CountSection.css";
import { animate, motion } from "framer-motion";

const CountSection = () => {
  const happyClients = useRef(null);
  const projects = useRef(null);
  const awards = useRef(null);
  const experience = useRef(null);

  const happyClientsCount = () => {
    animate(0, 30, {
      ease: "easeInOut",
      repeatType: "reverse",
      duration: 1,
      onUpdate: (v) => {
        happyClients.current.textContent = v.toFixed(0);
      },
    });
  };

  const projectsCount = () => {
    animate(0, 40, {
      ease: "easeInOut",
      repeatType: "reverse",
      duration: 1,
      onUpdate: (v) => {
        projects.current.textContent = v.toFixed(0);
      },
    });
  };

  const awardsCount = () => {
    animate(0, 6, {
      ease: "easeInOut",
      repeatType: "reverse",
      duration: 1,
      onUpdate: (v) => {
        awards.current.textContent = v.toFixed(0);
      },
    });
  };

  const experienceCount = () => {
    animate(0, 2, {
        ease: "easeInOut",
        repeatType: "reverse",
        duration: 1,
        onUpdate: (v) => {
          experience.current.textContent = v.toFixed(0);
        },
      });
  }

  return (
    <>
      <div className="count-section">
        <div className="count-section-inner-container">
          {/* Counters Card */}
          <div className="counters-card-container">
            {/* Card 1 */}
            <div className="card">
              <motion.h1
                whileInView={happyClientsCount}
                ref={happyClients}
                className="counter"
              >
           
              </motion.h1>
              <p className="card-title">Happy Clients</p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <motion.h1
                whileInView={projectsCount}
                ref={projects}
                className="counter"
              >
               
              </motion.h1>
              <p className="card-title">Projects Done</p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <motion.h1
                whileInView={awardsCount}
                ref={awards}
                className="counter"
              >
                
              </motion.h1>
              <p className="card-title">Awards Winning</p>
            </div>

            {/* Card 4 */}
            <div className="card">
              <motion.h1 
              whileInView={experienceCount} 
              ref={experience} className="counter">7
              </motion.h1>
              <p className="card-title"> Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountSection;
