import React from "react"
import {
  Container,
  DivButtons,
  Filter,
  DivEvents,
  Create,
  TextCreate,
  DivCreate,
  CreateAdd,
  Selec,
  OptionSelec,
} from "./EventsPageElements"
import CardEvent from "./components/cardEvent/CardEvent.js"

class Events extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedId: 0,
    }
  }

  dropdownChanged(e) {
    this.setState({ selectedId: e.target.value })
  }
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

            <Selec
              value={this.selectedId}
              onChange={this.dropdownChanged.bind(this)}
            >
              <OptionSelec value="" disabled selected hidden>
                Ordenar
              </OptionSelec>
              <OptionSelec key={1} value={1}>
                Mas proximo
              </OptionSelec>
              <OptionSelec key={2} value={2}>
                A-Z
              </OptionSelec>
              <OptionSelec key={3} value={3}>
                Z-A
              </OptionSelec>
            </Selec>
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
