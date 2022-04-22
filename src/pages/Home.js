import React from "react"
import CarouselImg from "../components/carousel/Carousel"
import Footer from "../components/footer/Footer"
import Tags from "../components/home/components/Tags"
import HomePage from "../components/home/HomePage"
import Map from "../components/map/Map"
import NavBarHome from "../components/navbar/NavBarHome"

const Home = () => {
  return (
    <>
      <NavBarHome />
      <CarouselImg />
      <HomePage />
      <Tags />
      <Map></Map>
      <Footer />
    </>
  )
}

export default Home
