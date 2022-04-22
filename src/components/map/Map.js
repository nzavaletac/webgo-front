import React, { useState, useRef, useEffect } from "react"
import { Container, Loading } from "./MapElements"
import "mapbox-gl/dist/mapbox-gl.css"
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"
import { getListAll } from "../../services/Event.services"

const Map = () => {
  mapboxgl.workerClass = MapboxWorker
  mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN
  const mapDivHome = useRef(null)
  const map = useRef(null)
  const [loading, setLoading] = useState(true)
  const [events, setEvents] = useState([])

  useEffect(() => {
    getListAll()
      .then((data) => {
        if (data.events) {
          setEvents(data.events)
        }
      })
      .finally(() => {
        if (loading && events.length !== 0) {
          events.map((event) => {
            const dateEvent = new Date(event.date)
            const marker = new mapboxgl.Marker()
              .setLngLat(event.location)
              .setPopup(
                new mapboxgl.Popup({ offset: [0, -15] }) // add popups
                  .setHTML(
                    "<div>" +
                      "<h5>" +
                      event.title +
                      "</h5><p>" +
                      event.description +
                      "<br/>Date: " +
                      dateEvent.toLocaleDateString() +
                      "</p></div>"
                  )
              )
              .addTo(map.current)
            return marker
          })
        }
        setLoading(false)
      })

    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapDivHome.current,
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
  })

  return (
    <Container ref={mapDivHome}>{loading && <Loading></Loading>}</Container>
  )
}

export default Map
