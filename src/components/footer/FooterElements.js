import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  background: #1e1e1e;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0px 0px 0px;
  padding: 25px;
  font-size: 15px;
`;

export const Links = styled(Link)`
  margin: 0px 25px;
  text-decoration: none;
  color: #fff;
  padding: 5px;
  &:hover {
    text-decoration: underline;
    color: #00adee;
  }
`;
