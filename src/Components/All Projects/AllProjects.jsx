// AllProjects.js

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import "../../Styles/AllProjects.css";

import projectData from "../../assets/Project Data"; 
import bgSvg from "../../assets/Hero Bg.svg";
import Modals from "./Modals";

const AllProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="all-portfolio-container" id="portfolio">
        <div className="all-portfolio-inner-container">
          {/* all-projects */}
          {projectData.map((project) => (
            <div key={project.id} className="all-project-container">
              <div className="all-project-details">
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="all-project-no"
                >
                  {project.project}
                </motion.h2>
                <motion.h1
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="all-project-heading"
                >
                  {project.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="all-project-description"
                >
                  {project.description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="all-project-btn"
                  onClick={() => openModal(project)}
                >
                  <FaArrowRightLong /> View project
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="all-project-img"
              >
                <img src={project.image} alt="" />
              </motion.div>
            </div>
          ))}
          <Modals
            isOpen={isOpen}
            closeModal={closeModal}
            project={selectedProject}
          />
        </div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-svg"
          src={bgSvg}
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-svg2"
          src={bgSvg}
          alt=""
        />
      </div>
    </>
  );
};

export default AllProjects;
