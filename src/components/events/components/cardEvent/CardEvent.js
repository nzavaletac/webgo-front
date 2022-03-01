import React from "react"
import {
  Card,
  Edit,
  Title,
  Description,
  Delete,
  ImgEvent,
} from "./CardEventElement"
import EditEvent from "../../../../helpers/EditEvent.js"
import DeleteEvent from "../../../../helpers/DeleteEvent.js"

function CardEvent(props) {
  return (
    <Card>
      <Edit onClick={() => EditEvent(props.id)}></Edit>
      <Title>Event 1</Title>
      <ImgEvent src={props.src} alt={props.alt} />
      <Description>
        When you add work to your Slate calendar we automatically calculate
        useful insights about the financial health
      </Description>
      <Delete onClick={() => DeleteEvent(props.id)}></Delete>
    </Card>
  )
}

export default CardEvent
