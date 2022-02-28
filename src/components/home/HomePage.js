import React from "react";
import { Container, Input, Title } from "./HomePageElements";

const HomePage = () => {
  return (
    <Container>
      <Title>What do you want to do today?</Title>
      <Input placeholder="Search events, places, etc..." />
    </Container>
  );
};

export default HomePage;
