import React from "react"
import { Container, Icon } from "./TagsElements"
import categories from "../../../assets/images/categories.svg"
import date from "../../../assets/images/date.svg"

const Tags = () => {
  return (
    <Container>
      <Icon to="/">
        <img src={categories} alt="categories" />
      </Icon>
      <p>Categories</p>
      <Icon to="/">
        <img src={date} alt="date" />
      </Icon>
      <p>Date</p>
    </Container>
  )
}

export default Tags
