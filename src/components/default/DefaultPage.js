import React from "react";
import {
  Button,
  Container,
  MapImg,
  TextButton,
  Title,
} from "./DefaultPageElements";
import ImgMap from "../../assets/images/maps.jpeg";

const DefaultPage = () => {
  return (
    <Container>
      <MapImg src={ImgMap} />
      <TextButton>
        <Title>Find the best events closest you!</Title>
        <Button to="/register">Create Account</Button>
      </TextButton>
    </Container>
  );
};

export default DefaultPage;
