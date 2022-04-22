import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginPage } from "../components/login/LoginPage"
import { URL_BACKEND } from "../environments/environments"

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login(e) {
    e.preventDefault()
    const {
      data: { token, user },
    } = await axios({
      method: "POST",
      baseURL: URL_BACKEND,
      url: "/users/signin",
      data: {
        email,
        password,
      },
    })
    localStorage.setItem("token", token)
    navigate("/home")
  }

  return (
    <>
      <LoginPage login={login} setEmail={setEmail} setPassword={setPassword} />
    </>
  )
}
