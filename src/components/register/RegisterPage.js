import React from "react";
import {
  Button,
  Column,
  Container,
  ContainerForm,
  Form,
  Input,
  Label,
  Map,
  Title,
} from "./RegisterPageElements";
import MapImg from "../../assets/images/maps2.jpeg";

const RegisterPage = () => {
  return (
    <Container>
      <Column>
        <ContainerForm>
          <Title>Sign up</Title>
          <Form>
            <Label>Name</Label>
            <Input type="text" placeholder="Enter your name" />
            <Label>Last Name</Label>
            <Input type="text" placeholder="Enter your last name" />
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="Phone number Exampple: +51 993 364 977"
            />
            <Label>Country</Label>
            <Input type="text" placeholder="Enter your country" />
            <Label>City</Label>
            <Input type="text" placeholder="Enter your city" />
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" />
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password" />
            <Button>Create an Account</Button>
          </Form>
        </ContainerForm>
      </Column>
      <Column>
        <Title>Select your location</Title>
        <Map src={MapImg} />
      </Column>
    </Container>
  );
};

export default RegisterPage;
