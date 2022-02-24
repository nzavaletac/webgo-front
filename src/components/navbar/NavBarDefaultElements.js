import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  align-items: center;
  background: #fff;
  color: black;
  display: flex;
  height: 100px;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  border-bottom: 1px solid gray;
`;

export const Logo = styled.img`
  margin-left: 30px;
  width: 200px;
`;

export const Button = styled(Link)`
  border-radius: 5px;
  width: 180px;
  height: 52px;
  background-color: #fff;
  color: #00b6f0;
  border: 2px solid #00b6f0;
  margin-right: 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
