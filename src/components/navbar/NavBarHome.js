import React from "react";
import "../navbar/NavBarHomeStyles.css";
import {
  Header,
  HeaderMenu,
  HeaderMenuProfile,
  HeaderMenuProfileImg,
  Logo,
} from "./NavBarHomeElements";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profileImg from "../../assets/images/user-icon.svg";

const userName = localStorage.getItem("name");

const NavBarHome = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Header>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <HeaderMenu className="header__menu">
        <HeaderMenuProfile>
          <HeaderMenuProfileImg src={profileImg} />
          <p>Hi! {userName}</p>
        </HeaderMenuProfile>
        <ul>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link onClick={handleLogout} to="/">
              Log out
            </Link>
          </li>
        </ul>
      </HeaderMenu>
    </Header>
  );
};

export default NavBarHome;
