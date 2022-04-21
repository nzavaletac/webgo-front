import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border: 1px solid #009fc7;
  margin: 10px;
`

export const Column = styled.div`
  flex: 100%;
  margin: 30px;
  height: 100%;
  padding: 20px;
`

export const Image = styled.img`
  display: flex;
  width: 200px;
`

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  color: #009fc7;
  font-size: 35px;
  text-align: center;
`

export const Form = styled.form`
  height: 100%;
  padding: 40px;
`

export const Label = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #1e1e1e;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom-width: 1px;
  padding: 5px;
  text-decoration: none;
  outline: none;
  :focus {
    border-right: none;
    border-top: none;
    border-left: none;
    border-bottom: 1px solid #009fc7;
  }
  ::placeholder {
    color: #009fc7;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 42px;
  padding: 10px;
  background: #009fc7;
  color: #fff;
  border: none;
  margin-top: 30px;
`

export const Map = styled.div`
  margin-top: 50px;
  width: 42vw;
  height: 90vh;
  margin-bottom: 25px;
`
