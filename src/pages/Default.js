import React from "react";
import CarouselImg from "../components/carousel/Carousel";
import DefaultPage from "../components/default/DefaultPage";
import Footer from "../components/footer/Footer";
import NavBarDefault from "../components/navbar/NavBarDefault";

const Default = () => {
  return (
    <>
      <NavBarDefault />
      <DefaultPage />
      <CarouselImg />
    </>
  );
};

export default Default;
