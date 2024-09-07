import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ cardImg, cardTitle, cardDescription }) => {
  return (
    <>
      <motion.div className="skills-card">
        <div className="skill-img-container">
          <img src={cardImg} alt="" />
        </div>
        {/* Card Title */}
        <h1 className="skill-title">{cardTitle}</h1>
        <p className="skill-description">{cardDescription}</p>
      </motion.div>
    </>
  );
};

export default SkillsCard;
