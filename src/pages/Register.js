import React from "react";
import CarouselImg from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import NavBarDefault from "../components/navbar/NavBarDefault";
import RegisterPage from "../components/register/RegisterPage";

const Register = () => {
  return (
    <>
      <NavBarDefault />
      <CarouselImg />
      <RegisterPage />
      <Footer />
    </>
  );
};

export default Register;
