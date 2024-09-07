import React from "react";
import "../Styles/Login.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-inner-container">
          <div className="left-side">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              Welcome Back !
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="login-subheading"
            >
              Connecting You with Your Account Safely
            </motion.p>
          </div>

          <div className="right-side">
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
              className="login-heading"
            >
              Login to <span style={{ color: "#ffbe33" }}>Gigster</span>
            </motion.h1>
            {/* Third Party Login */}
            <div className="third-party-login">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                {" "}
                <FaGoogle className="login-icon" />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
              >
                {" "}
                <FaFacebookF className="login-icon" />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
              >
                <FaGithub className="login-icon" />
              </motion.div>
            </div>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
              className="or"
            >
              or use your email account
            </motion.p>

            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
              className="email"
              type="text"
              placeholder="Email"
            />
            <motion.input
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1 } }}
              className="password"
              type="text"
              placeholder="Password"
            />
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
              className="forgot"
            >
              Forgot Password ?
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 1.4 } }}
              className="login-btn"
            >
              Login
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1.6 } }}
              className="signup-link"
            >
              Don't have an account ?{" "}
              <Link to={"/signup"} className="signup">
                Signup
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
