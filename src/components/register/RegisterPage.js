import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import MapImg from "../../assets/images/maps2.jpeg";
import Swal from "sweetalert2";
import { postUsers } from "../../services/User.services";

const emptyForm = {
  name: "",
  lastName: "",
  phoneNumber: "",
  city: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    const valor = e.target.value;
    setForm({
      ...form,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        postUsers(form).then((data) => {
          if (data.user._id) {
            setForm(emptyForm);
            Swal.fire({
              title: "Successful",
              text: "Account registered successfully",
              icon: "success",
              timer: 1500,
            });
          }
        });
      }
    });
  };

  return (
    <Container>
      <Column>
        <ContainerForm>
          <Title>Sign up</Title>
          <Form onSubmit={handleSubmit}>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              value={form.name}
            />
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              onChange={handleChange}
              value={form.lastName}
            />
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="Phone number Exampple: +51 993 364 977"
              name="phoneNumber"
              onChange={handleChange}
              value={form.phoneNumber}
            />
            <Label>City</Label>
            <Input
              type="text"
              placeholder="Enter your city"
              name="city"
              onChange={handleChange}
              value={form.city}
            />
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
            <Button type="submit">Create an Account</Button>
            <Label>
              Already have an account? <Link to="/login"> Sign in</Link>
            </Label>
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
