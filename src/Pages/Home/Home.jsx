import React from "react";
import Hero from "./Hero";
import OurServiceAbout from "./OurServiceAbout";
import Footer from "../Shared/Footer";
import Features from "./Features";
const Home = () => {
  return (
    <div>
      <Hero />
      <OurServiceAbout />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
