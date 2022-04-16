import React from "react"
import {
  Card,
  Edit,
  Title,
  Description,
  Delete,
  ImgEvent,
  Date,
  Tags,
  Tag,
} from "./CardEventElement"
import EditEvent from "../../../../helpers/EditEvent.js"
import DeleteEvent from "../../../../helpers/DeleteEvent.js"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap"

function CardEvent(props) {
  const [modal, setModal] = React.useState(false)
  const toggle = () => setModal(!modal)
  return (
    <Card>
      <Edit onClick={() => EditEvent(props.id)}></Edit>
      <Title>{props.title}</Title>
      <ImgEvent src={props.src} alt={props.alt} />
      <Description>
        When you add work to your Slate calendar we automatically calculate
        useful insights about the financial health
      </Description>
      <Date>{props.date.toLocaleDateString()}</Date>
      <Tags>
        {props.categories.map((category) => {
          return (
            <Tag
              size="small"
              color="info"
              key={category._id}
              label={category.title}
            ></Tag>
          )
        })}
      </Tags>
      <Delete onClick={toggle}></Delete>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Event</ModalHeader>
        <ModalBody>Are you sure you want to delete the event?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            No
          </Button>
          <Button
            color="danger"
            onClick={() => {
              DeleteEvent(props.id)
              const fn = toggle
              fn()
            }}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  )
}

export default CardEvent
