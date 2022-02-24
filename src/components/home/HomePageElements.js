import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  border-radius: 0px 0px 40px 40px;
  margin-top: 20px;
`;

export const Title = styled.h2`
  color: #00adee;
  font-size: 35px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background-color: #f2f6f5;
  border: 2px solid #1a171b;
  border-radius: 25px;
  color: #1e1e1e;
  height: 50px;
  font-size: 20px;
  margin-bottom: 20px;
  outline: none;
  padding: 20px;
  width: 60%;
  &::placeholder {
    font-family: "poppins", sans-serif;
    font-size: 20px;
  }
`;
