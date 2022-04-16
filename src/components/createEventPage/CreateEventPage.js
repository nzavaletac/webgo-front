import React, { useRef, useEffect, useState } from "react"
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
  LabelImg,
  InputImg,
  Img,
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
  mapboxgl.workerClass = MapboxWorker
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const [valueDate, setValueDate] = useState(new Date())
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [valueCat, setValueCat] = useState(HelperCategories())
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [arrEventCat, setArrEventCat] = useState([valueCat[0].id])
  const [valueLngLat, setValueLngLat] = useState([
    -77.03996453142095, -12.059900202814433,
  ])

  useEffect(() => {
    var marker
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-77.03996453142095, -12.059900202814433],
      zoom: 14,
    })

    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        zoom: 14,
        marker: false,
      })
    )
    map.current.addControl(new mapboxgl.NavigationControl())
    map.current.addControl(new mapboxgl.FullscreenControl())
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        //showUserLocation:false,
      })
    )

    map.current.on("click", function (e) {
      setValueLngLat([
        (valueLngLat[0] = Object.values(e.lngLat)[0]),
        (valueLngLat[1] = Object.values(e.lngLat)[1]),
      ])
      if (marker == null) {
        marker = new mapboxgl.Marker().setLngLat(valueLngLat).addTo(map.current)
      } else {
        marker.setLngLat(valueLngLat)
      }
      console.log(valueLngLat)
    })
  })

  function handleImg(file) {
    const fileRider = new FileReader()
    fileRider.addEventListener("load", (e) => setPreview(e.target.result))
    fileRider.readAsDataURL(file)
    console.log(preview)
  }

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
              defaultValue={[valueCat[0]]}
              getOptionLabel={(option) => option.title}
              onChange={(event, newValues) => {
                //setArrEventCat(newValue)
                const arrAux = []
                newValues.map((newValue) => {
                  arrAux.push(newValue.id)
                })
                setArrEventCat(arrAux)
              }}
              renderInput={(params) => (
                <TextField2
                  {...params}
                  variant="standard"
                  placeholder="Categories"
                />
              )}
            />
            {console.log(arrEventCat)}
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
            <Button type="submit">Create Event</Button>
          </Column>
          <Column>
            <SubTitle>Select your location</SubTitle>
            <DivMap ref={mapContainer}></DivMap>
            <SubTitle>Upload Image</SubTitle>
            {/*Aqui estara el elemento para cargar imagenes*/}
            <Upload>
              <LabelImg htmlFor="input-img">
                {preview ? "Change" : "Select image"}
              </LabelImg>
              <InputImg
                name="input-img"
                type="file"
                id="input-img"
                accept="image/*"
                onChange={(e) => {
                  setFile(e.target.files[0])
                  handleImg(e.target.files[0])
                }}
              ></InputImg>
              {preview && <Img src={preview} alt="preview" />}
            </Upload>
          </Column>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default CreateEventPage
