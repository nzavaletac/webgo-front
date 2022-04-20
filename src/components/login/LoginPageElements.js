import styled from "styled-components";

export const DivRow = styled.div`
  display: flex;
`;

export const DivColumn = styled.div`
  flex: 100%;
  text-align: center;
`;

export const Image = styled.img`
  display: flex;
  width: 191px;
  height: 56px;
  margin: 41px;
`;

export const ImageGo = styled.img`
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 50px;
`;

export const Div = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  margin: 28px 123px 3.5px;
  text-align: left;
`;

export const Input = styled.input`
  width: 477px;
  height: 24px;
  color: #9badbf;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  margin: 2px 56px 2px;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #9badbf;
  }
  :focus {
    border-right: none;
    border-top: none;
    border-left: none;
    border-bottom: 1px solid #009fc7;
  }
  ::placeholder {
    color: #009fc7;
  }
`;

export const Button = styled.button`
  width: 477px;
  height: 42px;
  background: #009fc7;
  color: #ffffff;
  border: none;
  margin: 46px 56px 24px;
`;

export const Forget = styled.p`
  color: #009fc7;
  margin: 10px 56px;
`;
export const CenterCarousel = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: 100vh;
  }
`;
