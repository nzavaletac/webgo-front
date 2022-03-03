import React from "react"
import {
  Container,
  DivButtons,
  Filter,
  Sort,
  DivEvents,
  Create,
  TextCreate,
  DivCreate,
  CreateAdd,
} from "./EventsPageElements"
import CardEvent from "./components/cardEvent/CardEvent.js"

class Events extends React.Component {
  Clickbutton() {
    console.log("Click")
  }

  render() {
    let Carousel_1 = "https://cdn.joinnus.com/files/2022/01/drquhEGIghYW6LQ.jpg"
    return (
      <div>
        <Container>
          <DivButtons>
            <Filter type="button" onClick={this.Clickbutton}>
              Filtro
            </Filter>
            <Sort type="button" onClick={this.Clickbutton}>
              Ordenar
            </Sort>
          </DivButtons>
          <DivEvents>
            <CardEvent src={Carousel_1} alt="ImgCardEven1" id={1}></CardEvent>
            <CardEvent src={Carousel_1} alt="ImgCardEven2" id={2}></CardEvent>
            <CardEvent src={Carousel_1} alt="ImgCardEven3" id={3}></CardEvent>
            <CardEvent src={Carousel_1} alt="ImgCardEven4" id={4}></CardEvent>
            <CardEvent src={Carousel_1} alt="ImgCardEven5" id={5}></CardEvent>
            <CardEvent src={Carousel_1} alt="ImgCardEven6" id={6}></CardEvent>
            <CardEvent src={Carousel_1} alt="ImgCardEven6" id={7}></CardEvent>
          </DivEvents>
          <DivCreate>
            <Create onClick={this.Clickbutton}>
              <TextCreate>Create</TextCreate>
            </Create>
            <CreateAdd onClick={this.Clickbutton}></CreateAdd>
          </DivCreate>
        </Container>
      </div>
    )
  }
}

export default Events
