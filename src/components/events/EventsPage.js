import React from "react";
import {
  Container,
  DivButtons,
  Filter,
  DivEvents,
  Create,
  Create1,
  TextCreate,
  DivCreate,
  CreateAdd,
  Select,
  OptionSelect,
  Loading,
} from "./EventsPageElements";
import CardEvent from "./components/cardEvent/CardEvent.js";
import HelperSortEvents from "../../helpers/HelperSortEvents.js";
import { getListAll } from "../../services/Event.services";
import Swal from "sweetalert2";

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedId: 0,
      arrEvents: [],
      loading: true,
    };
  }

  componentDidMount() {
    getListAll()
      .then((data) => {
        if (data.events) {
          this.setState({ arrEvents: data.events });
        } else {
          if (data.error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              timer: 1500,
            });
          }
        }
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  dropdownChanged(e) {
    this.setState({
      selectedId: e.target.value,
      arrEvents: HelperSortEvents(e.target.value, this.state.arrEvents),
    });
  }
  Clickbutton() {
    console.log("Click");
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
          <Create1 to="/home">
            <TextCreate>Back go</TextCreate>
          </Create1>
          <DivEvents>
            {this.state.loading && <Loading></Loading>}
            {this.state.arrEvents?.map((event) => {
              return (
                <CardEvent
                  src={event.image}
                  alt={event.title}
                  id={event._id}
                  key={event._id}
                  title={event.title}
                  date={event.date}
                  categories={event.categories}
                  description={event.description}
                ></CardEvent>
              );
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
    );
  }
}

export default Events;
