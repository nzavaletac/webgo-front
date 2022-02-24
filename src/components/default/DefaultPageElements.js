import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 350px;
  margin: 20px 0px;
`;

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 15px;
`;

export const TextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
`;

export const Button = styled(Link)`
  border-radius: 5px;
  width: 180px;
  height: 52px;
  background-color: #00b6f0;
  color: #fff;
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
