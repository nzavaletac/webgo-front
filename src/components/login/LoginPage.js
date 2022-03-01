import React from 'react'
import { DivRow, DivColumn, Image, Div, Title, Text, Input, Button, Forget } from './LoginPageElements'
import MIR from "../../assets/images/MakeItReal.svg"
import CarouselImg from '../carousel/Carousel'
import "./login.css"


const clickHandler = (e) => {
    e.preventDefault();
    console.log("Hello Login")

}

export const LoginPage = () => {
  return (
    <>
        <DivRow>
            <DivColumn>
                <Image src = {MIR} alt="Make It Real" />
                <Div>
                    <Title>GO !</Title>
                    <form onSubmit={clickHandler}>
                        <Text>Usuario</Text>
                        <Input placeholder='Ingrese Usuario'></Input>
                        <Text>Contraseña</Text>
                        <Input placeholder='Ingrese Contraseña'></Input>                        
                        <Button onClick={() => console.log("hey!")}>LOG IN</Button>

                        <Forget>¿Olvidaste la Contraseña?</Forget>
                    </form>
                </Div>
            </DivColumn>
            <DivColumn >
                <CarouselImg/>
            </DivColumn>
        </DivRow>
    </>
  )
}
