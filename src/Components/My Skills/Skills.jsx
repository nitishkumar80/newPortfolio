import React from "react";
import "../../Styles/Skills.css";
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";

import productDesign from "../../assets/Product Design.svg";
import logoDesign from "../../assets/Logo Design.svg";
import uiDesign from "../../assets/Ui Design.svg";
import iconDesign from "../../assets/Icon Design.svg";

const Skills = () => {
  return (
    <>
      <div className="skills-container" id="skills">
        <div className="skills-inner-container">
          {/* Left Side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="skills-left-side"
          >
            <SkillsCard
              cardImg={uiDesign}
              cardTitle={"UI Design"}
              cardDescription={
                "The technological revolution is changing aspect"
              }
            />
            <SkillsCard
              cardImg={productDesign}
              cardTitle={"Frontend Development"}
              cardDescription={
                " The technological revolution is changing aspect"
              }
            />
            <SkillsCard
              cardImg={logoDesign}
              cardTitle={"Backend Development"}
              cardDescription={
                " The technological revolution is changing aspect"
              }
            />

            <SkillsCard
              cardImg={iconDesign}
              cardTitle={"Database Management"}
              cardDescription={
                "The technological revolution is changing aspect"
              }
            />

            <SkillsCard
              cardImg={iconDesign}
              cardTitle={"DevOps and Cloud Services"}
              cardDescription={
                "The technological revolution is changing aspect"
              }
            />

            <SkillsCard
              cardImg={iconDesign}
              cardTitle={"Mobile App Development"}
              cardDescription={
                "The technological revolution is changing aspect"
              }
            />
          </motion.div>

          {/* Right Side */}
          <div className="skills-right-side">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { delay: 0.5 } }}
              className="skills-sub-heading"
            >
              _My Skills
            </motion.p>
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="skills-heading"
            >
              Why Hire Me For Next Project?
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="skills-description"
            >
              The digital revolution is transforming every aspect of our lives,
              reshaping industries and how we interact with the world. It's
              redefining the way we learn, work, and solve problems. In today's
              fast-paced environment, instant access to information means that
              expertise is no longer about knowing everything, but rather about
              how we use technology to create efficient, impactful solutions. As
              your partner, I focus on leveraging the latest advancements to
              build digital products that not only meet your needs but drive
              innovation and growth for your business.
            </motion.p>
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="skill-btn"
            >
              Download CV
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
