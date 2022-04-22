import styled from "styled-components"
import { styled as MuiStyled } from "@mui/material/styles"
import DateTimePicker from "@mui/lab/DateTimePicker"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
export const Container = styled.div`
  border: 1px solid #009fc7;
  margin: 10px;
`

export const Column = styled.section`
  flex: 100%;
  margin: 15px;
  height: 100%;
  padding: 15px;
`

export const Image = styled.img`
  display: flex;
  width: 200px;
`

export const ContainerForm = styled.div``

export const Title = styled.h1`
  color: #009fc7;
  font-size: 35px;
  text-align: center;
`
export const SubTitle = styled.h1`
  color: #009fc7;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`
export const Form = styled.form`
  height: 100%;
  padding: 0 40px;
  display: flex;
`

export const Label = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 0;
  color: #1e1e1e;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-left: none;
  border-top: none;
  border-right: none;
  border-bottom-width: 1px;
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
export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;

  :focus {
    outline: none;
    border: 1px solid #009fc7;
  }
  ::placeholder {
    color: #009fc7;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 15px;
  background: #009fc7;
  color: #fff;
  border: none;
  margin-top: 30px;
`

export const DivMap = styled.div`
  width: 45vw;
  height: 35vh;
  margin-bottom: 25px;
`
export const Upload = styled.div`
  width: 45vw;
  height: 35vh;
  border: 1px solid #009fc7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const DateTime = MuiStyled(DateTimePicker)`
background-color:black;
:focus {
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom: 1px solid #009fc7;
} 
`
export const Categories = styled(Autocomplete)`
  border-bottom: 1px solid #009fc7;
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
export const TextField2 = styled(TextField)`
  outline: none;
  ::placeholder {
    color: #009fc7;
  }
`
export const Img = styled.img`
  width: 200px;
  height: 200px; ;
`
export const LabelImg = styled.label`
  color: #fff;
  border-radius: 4px;
  background-color: #009fc7;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  padding: 6px 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`
export const InputImg = styled.input`
  display: none;
`
