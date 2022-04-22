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
  Select,
  OptionSelect,
} from "./EventsPageElements"
import CardEvent from "./components/cardEvent/CardEvent.js"
import HelperEvents from "../../helpers/HelperEvents"
import HelperSortEvents from "../../helpers/HelperSortEvents.js"

class Events extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedId: 0,
      arrEvents: HelperEvents(),
    }
  }

  dropdownChanged(e) {
    this.setState({
      selectedId: e.target.value,
      arrEvents: HelperSortEvents(e.target.value, this.state.arrEvents),
    })
  }
  Clickbutton() {
    console.log("Click")
  }

  render() {
    return (
      <div>
        <Container>
          <DivButtons>
            <Filter type="button" onClick={this.Clickbutton}>
              Filtro
            </Filter>
            <Select
              value={this.selectedId}
              onChange={this.dropdownChanged.bind(this)}
            >
              <OptionSelect value={0} defaultValue hidden>
                Ordenar
              </OptionSelect>
              <OptionSelect key={1} value={1}>
                Proximo
              </OptionSelect>
              <OptionSelect key={2} value={2}>
                A-Z
              </OptionSelect>
              <OptionSelect key={3} value={3}>
                Z-A
              </OptionSelect>
            </Select>
          </DivButtons>
          <DivEvents>
            {this.state.arrEvents.map((event) => {
              return (
                <CardEvent
                  src={event.src}
                  alt={event.title}
                  id={event.id}
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  categories={event.categories}
                ></CardEvent>
              )
            })}
          </DivEvents>
          <DivCreate>
            <Create to="/create">
              <TextCreate>Create</TextCreate>
            </Create>
            <CreateAdd to="/create"></CreateAdd>
          </DivCreate>
        </Container>
      </div>
    )
  }
}

export default Events
