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
  Categories,
  TextField2,
} from "./CreateEventPageElements"
import HelperCategories from "../../helpers/HelperCategories.js"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import TextField from "@mui/material/TextField"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

const CreateEventPage = () => {
  const [valueDate, setValueDate] = React.useState(new Date())
  mapboxgl.workerClass = MapboxWorker
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [valueCat, setValueCat] = React.useState(HelperCategories())
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-77.03996453142095, -12.059900202814433],
      zoom: 14,
    })
    map.current.addControl(new mapboxgl.NavigationControl())
    map.current.addControl(new mapboxgl.FullscreenControl())
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )
    map.current.on("mousemove", function (e) {
      document.getElementById("coordenadas").innerHTML = JSON.stringify(
        e.lngLat
      )
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
            <Label>Category</Label>
            <Categories
              multiple
              limitTags={2}
              options={valueCat}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField2
                  {...params}
                  variant="standard"
                  placeholder="Categories"
                />
              )}
            />
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
