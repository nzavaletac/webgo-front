import React from "react";
import { Container } from "./MapElements";

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.963991595007!2d-77.0327344853853!3d-12.045998545165485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d5aa7eb1%3A0x16061e0b481e22aa!2sPlaza%20de%20Armas%20de%20Lima!5e0!3m2!1ses-419!2spe!4v1640667595198!5m2!1ses-419!2spe"
        width="2000"
        height="800"
        loading="lazy"
      ></iframe>
    </Container>
  );
};

export default Map;
