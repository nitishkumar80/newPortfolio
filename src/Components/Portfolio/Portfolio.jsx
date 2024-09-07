import React, { useState } from "react";
import "../../Styles/Portfolio.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import projectData from "../../assets/Project Data";
import bgSvg from "../../assets/Hero Bg.svg";
import { Link } from "react-router-dom";
import Modals from "../All Projects/Modals";

const Portfolio = () => {
  const slicedProjects = projectData.slice(0, 3); // Slice the first three elements

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
      <div className="portfolio-container" id="portfolio">
        <div className="portfolio-inner-container">
          {/* Projects */}
          {slicedProjects.map((project) => (
            <div key={project.id} className="project-container">
              <div className="project-details">
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="project-no"
                >
                  {project.project}
                </motion.h2>

                <motion.h1
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="project-heading"
                >
                  {project.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="project-description"
                >
                  {project.description}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="project-btn"
                  onClick={() => openModal(project)}

                >
                  <FaArrowRightLong /> View Project
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="project-img"
              >
                <img src={project.image} alt="" />
              </motion.div>
            </div>
          ))}

          <Link to={"/allprojects"}>
            <button className="view-more-btn">View More</button>
          </Link>
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

export default Portfolio;
