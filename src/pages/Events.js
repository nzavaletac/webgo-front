import React from "react"
import Footer from "../components/footer/Footer"
import EventsPage from "../components/events/EventsPage"
import NavBarHome from "../components/navbar/NavBarHome"

export const Events = () => {
  return (
    <>
      <NavBarHome />
      <EventsPage />
      <Footer />
    </>
  )
}
