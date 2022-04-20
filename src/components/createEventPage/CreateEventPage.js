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
import { postCreate } from "../../services/Event.services"
import Swal from "sweetalert2"
import { getCategories } from "../../services/Category.services"

const emptyForm = {
  title: "",
  location: [],
  image: "",
  date: new Date(),
  description: "",
  userId: "",
  categories: [],
}

const CreateEventPage = () => {
  mapboxgl.workerClass = MapboxWorker
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const [valueDate, setValueDate] = useState(new Date())
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [valueCat, setValueCat] = useState([{ title: "undifine", _id: "0" }])
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [arrEventCat, setArrEventCat] = useState([valueCat[0].id])
  const [valueLngLat, setValueLngLat] = useState([
    -77.03996453142095, -12.059900202814433,
  ])
  const [form, setForm] = useState(emptyForm)
  if (valueCat[0]._id == "0") {
    getCategories().then((data) => {
      setValueCat(data.categories)
    })
  }
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
        showUserLocation: false,
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
    })
  })

  function handleImg(file) {
    const fileRider = new FileReader()
    fileRider.addEventListener("load", (e) => setPreview(e.target.result))
    fileRider.readAsDataURL(file)
  }

  function handleChange(e) {
    const valor = e.target.value
    setForm({
      ...form,
      [e.target.name]: valor,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    form.categories = arrEventCat
    form.image = preview
    form.date = valueDate
    form.userId = "6232df4de4c2c2cbd4b722e6"
    form.location = valueLngLat
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        postCreate(form).then((data) => {
          if (data.event._id) {
            setForm(emptyForm)
            Swal.fire({
              title: "Successful",
              text: "Event created successfully",
              icon: "success",
              timer: 3500,
            })
            window.location.href = "/events"
          } else {
            if (data.error) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                timer: 3500,
              })
            }
          }
        })
      }
    })
  }

  return (
    <Container>
      <Title>New Event</Title>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <Column>
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Enter events's title "
              name="title"
              onChange={handleChange}
            />
            <Label>Category</Label>
            {valueCat[0]._id !== "0" && (
              <Categories
                multiple
                limitTags={1}
                options={valueCat}
                isOptionEqualToValue={(option, value) =>
                  option._id === value._id
                }
                getOptionLabel={(option) => option.title}
                onChange={(event, newValues) => {
                  const arrAux = []
                  newValues.map((newValue) => {
                    arrAux.push(newValue._id)
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
            )}
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
            <TextArea
              type="text"
              placeholder="Enter event's description"
              name="description"
              onChange={handleChange}
            />
            <Button type="submit">Create Event</Button>
          </Column>
          <Column>
            <SubTitle>Select your location</SubTitle>
            <DivMap ref={mapContainer}></DivMap>
            <SubTitle>Upload Image</SubTitle>
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
