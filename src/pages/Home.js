import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Feature />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
