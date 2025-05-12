import React from "react";
import Hero from "../Components/Hero";
import Project from "../Components/Projects"
import AboutMe from "../Components/About";
import Contact from "../Components/Contact";
import Navbar from"../Components/navbar"
const Home = () => {
  return (
  
     <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <Contact />
      </div>
    
  );
};

export default Home;
