import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './Modals.css';



const Modals = ({ isOpen, closeModal, project }) => {
  if (!isOpen) return null;

  const [isClicked, setIsClicked] = useState(false)
  
  return (
    <div className="modal-container">
      <div className="modal-background">
        <div className="modal-content">
          <div className="modal-close">
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
          </div>

          <div className="modal-details">
            <img
              src={project.image}
              alt={project.title}
              className="modal-image"
            />

            <div className="modal-right">
              <h2 className="modal-title">{project.name}</h2>
              <p className="modal-description">{project.description}</p>
              <div className="like">
                <div onClick={() => setIsClicked(!isClicked)} className="like-container">
                  {
                    isClicked ? <FaHeart className="like-icon" /> : <FaRegHeart className="like-icon" />
                  }
                </div>
                <p className="like-text">Likes (0)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
