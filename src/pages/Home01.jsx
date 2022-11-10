import React from "react";
import Header from "../components/header/Header";
import Slider01 from "../components/slider/Slider01";
import dataSlider from "../assets/fake-data/dataSlider";
import Footer from "../components/footer/Footer";

const Home01 = () => {
  return (
    <div className="home-1">
      <Header />
      <Slider01 data={dataSlider} /> 
      <Footer />
    </div>
  );
};

export default Home01;
