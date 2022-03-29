import React, { useRef, useEffect } from "react"
import {
  Button,
  Column,
  Container,
  ContainerForm,
  Form,
  Input,
  Label,
  Title,
  SubTitle,
  TextArea,
  DivMap,
  Upload,
  DateTime,
} from "./CreateEventPageElements"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import TextField from "@mui/material/TextField"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

const CreateEventPage = () => {
  const [valueDate, setValueDate] = React.useState(new Date())
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
    })
  })

  return (
    <Container>
      <Title>New Event</Title>
      <ContainerForm>
        <Form>
          <Column>
            <Label>Title</Label>
            <Input type="text" placeholder="Enter events's title " />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Label>DateTime</Label>
              <DateTime
                renderInput={(props) => (
                  <TextField variant="standard" {...props} />
                )}
                value={valueDate}
                onChange={(newValue) => {
                  setValueDate(newValue)
                }}
              />
            </LocalizationProvider>
            <Label>Description</Label>
            <TextArea type="text" placeholder="Enter event's description" />
            <Label>Whatsapp</Label>
            <Input
              type="text"
              placeholder="Enter the group link in whatsapp "
            />
            <Button>Create Event</Button>
          </Column>
          <Column>
            <SubTitle>Select your location</SubTitle>
            <DivMap ref={mapContainer}></DivMap>
            <SubTitle>Upload Image</SubTitle>
            {/*Aqui estara el elemento para cargar imagenes*/}
            <Upload></Upload>
          </Column>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default CreateEventPage
