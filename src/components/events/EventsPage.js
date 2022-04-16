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
import HelperSortEvents from "../../helpers/HelperSortEvents.js"
import { getListAll } from "../../services/Event.services"

class Events extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedId: 0,
      //arrEvents: HelperEvents(),
      arrEvents: [
        /*{
          categories: [{}, {}],
          date: new Date(),
          description: "Concierto aniversario Agua Marina",
          src: "https://cdn.joinnus.com/files/2022/01/drquhEGIghYW6LQ.jpg",
          title: "Concierto Agua Marina",
          _id: "6232de2ce4c2c2cbd4b722e3",
        },*/
      ],
    }
  }

  componentDidMount() {
    let Carousel_1 = "https://cdn.joinnus.com/files/2022/01/drquhEGIghYW6LQ.jpg"
    const arrCategories = [
      { title: "concert", _id: 1 },
      { title: "marathon", _id: 2 },
      { title: "sport", _id: 3 },
    ]
    getListAll().then((data) => {
      console.log("Data")
      console.log(data)
      data.map((dato) => {
        dato.date = new Date(dato.date)
        dato.src = Carousel_1
        dato.categories = arrCategories
      })
      this.setState({ arrEvents: data })
    })
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
            {this.state.arrEvents?.map((event) => {
              return (
                <CardEvent
                  src={event.src}
                  alt={event.title}
                  id={event._id}
                  key={event._id}
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
