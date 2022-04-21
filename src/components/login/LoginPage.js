import React from "react";
import {
  CenterCarousel,
  DivRow,
  DivColumn,
  Image,
  Div,
  Title,
  Text,
  Input,
  Button,
  Forget,
  ImageGo,
} from "./LoginPageElements";
import MIR from "../../assets/images/MakeItReal.svg";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import ImgLogin from "../../assets/images/ImgLogin.jpg";

export const LoginPage = ({ login, setEmail, setPassword }) => {
  return (
    <>
      <DivRow>
        <DivColumn>
          <Link to="/">
            <Image src={MIR} alt="Make It Real" />
          </Link>
          <Div>
            <Title>
              <Link to="/">
                <ImageGo src={logo} alt="go" />
              </Link>
            </Title>
            <form onSubmit={login}>
              <Text htmlFor="email">Email</Text>
              <Input
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Text htmlFor="password">Password</Text>
              <Input
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit">Sign In</Button>
              <Link to="#">
                <Forget>Forgot user or password?</Forget>
              </Link>
              <Link to="">
                <Link to="/register">
                  <Forget>Don't have an account?</Forget>
                </Link>
              </Link>
            </form>
          </Div>
        </DivColumn>
        <DivColumn>
          <CenterCarousel>
            <img src={ImgLogin} alt="" />
          </CenterCarousel>
        </DivColumn>
      </DivRow>
    </>
  );
};
