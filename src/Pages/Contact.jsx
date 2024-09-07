import React from "react";
import "../Styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-inner-container">
          <div className="left-side">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              Reach out and let's connect.
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="contact-subheading"
            >
              Let us know how we can help.
            </motion.p>
          </div>

          <div className="right-side">
            <motion.input
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="name"
              type="text"
              placeholder="Full Name"
            />
            <motion.input
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
              className="email"
              type="text"
              placeholder="Email"
            />
            <motion.textarea
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
              className="message"
              name=""
              id=""
              placeholder="Message"
              cols="30"
              rows="10"
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.8 } }}
              className="contact-btn"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
