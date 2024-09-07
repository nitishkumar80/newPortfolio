import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import "./Styles/Main.css";
import Footer from "./Components/Footer/Footer";
import AllProjects from "./Components/All Projects/AllProjects";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
