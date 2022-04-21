import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Column,
  Container,
  ContainerForm,
  Form,
  Input,
  Label,
  Map,
  Title,
} from "./RegisterPageElements";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { postUsers } from "../../services/User.services";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const emptyForm = {
  name: "",
  lastName: "",
  phoneNumber: "",
  location: [],
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(emptyForm);
  mapboxgl.workerClass = MapboxWorker;
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;
  const mapDiv = useRef(null);
  const map = useRef(null);
  const [valueLngLat, setValueLngLat] = useState([
    -77.03996453142095, -12.059900202814433,
  ]);

  const handleChange = (e) => {
    const valor = e.target.value;
    setForm({
      ...form,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.location = valueLngLat;
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        postUsers(form).then((data) => {
          if (data.token) {
            setForm(emptyForm);
            Swal.fire({
              title: "Successful",
              text: "Account registered successfully",
              icon: "success",
              timer: 1500,
            });
          }
        });
      }
    });
  };

  useEffect(() => {
    var marker;
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-77.03996453142095, -12.059900202814433],
      zoom: 14,
    });

    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        zoom: 14,
        marker: false,
      })
    );
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.FullscreenControl());
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserLocation: false,
      })
    );

    map.current.on("click", function (e) {
      setValueLngLat([
        (valueLngLat[0] = Object.values(e.lngLat)[0]),
        (valueLngLat[1] = Object.values(e.lngLat)[1]),
      ]);
      if (marker == null) {
        marker = new mapboxgl.Marker()
          .setLngLat(valueLngLat)
          .addTo(map.current);
      } else {
        marker.setLngLat(valueLngLat);
      }
    });
  });

  return (
    <Container>
      <Column>
        <ContainerForm>
          <Title>Sign up</Title>
          <Form onSubmit={handleSubmit}>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              value={form.name}
            />
            <Label>Last Name</Label>
            <Input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              onChange={handleChange}
              value={form.lastName}
            />
            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="Phone number Exampple: +51 993 364 977"
              name="phoneNumber"
              onChange={handleChange}
              value={form.phoneNumber}
            />
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
            <Button type="submit">Create an Account</Button>
            <Label>
              Already have an account? <Link to="/login"> Sign in</Link>
            </Label>
          </Form>
        </ContainerForm>
      </Column>
      <Column>
        <Title>Select your location</Title>
        <Map ref={mapDiv}></Map>
      </Column>
    </Container>
  );
};

export default RegisterPage;
