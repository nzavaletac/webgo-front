import React from "react";
import { Button, Header, Logo } from "./NavBarDefaultElements";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const NavBarDefault = () => {
  return (
    <Header>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Button to="/login">Sign In</Button>
    </Header>
  );
};

export default NavBarDefault;
