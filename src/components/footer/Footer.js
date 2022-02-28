import React from "react";
import { Container, Links } from "./FooterElements";

const Footer = () => {
  return (
    <Container>
      <Links to="/">Terms of use</Links>
      <Links to="/">Privacy statements</Links>
      <Links to="/">Help</Links>
    </Container>
  );
};

export default Footer;
