/* export default function HelperEvents() {
  let Carousel_1 = "https://cdn.joinnus.com/files/2022/01/drquhEGIghYW6LQ.jpg"
  const arrCategories = [
    { title: "concert", id: 1 },
    { title: "marathon", id: 2 },
    { title: "sport", id: 3 },
  ]
  let DateEvent = new Date()
  const arrEvents = [
    {
      title: "The Shawshank Redemption",
      id: 1,
      src: Carousel_1,
      date: DateEvent,
      categories: arrCategories,
    },
    {
      title: "The Godfather",
      id: 2,
      src: Carousel_1,
      date: new Date("2022-10-02"),
      categories: arrCategories,
    },
    {
      title: "The Godfather: Part II",
      id: 3,
      src: Carousel_1,
      date: new Date("2022-05-01"),
      categories: arrCategories,
    },
    {
      title: "The Dark Knight",
      id: 4,
      src: Carousel_1,
      date: DateEvent,
      categories: arrCategories,
    },
    {
      title: "12 Angry Men",
      id: 5,
      src: Carousel_1,
      date: DateEvent,
      categories: arrCategories,
    },
    {
      title: "Schindler's List",
      id: 6,
      src: Carousel_1,
      date: DateEvent,
      categories: arrCategories,
    },
  ]
  return arrEvents
}
*/
import { getListAll } from "../../src/services/Event.services.js"
export default function HelperEvents() {
  let Carousel_1 = "https://cdn.joinnus.com/files/2022/01/drquhEGIghYW6LQ.jpg"
  const arrCategories = [
    { title: "concert", _id: 1 },
    { title: "marathon", _id: 2 },
    { title: "sport", _id: 3 },
  ]
  var arrEvents
  getListAll().then((data) => {
    console.log("Data Enviada")
    console.log(data)

    data.map((dato) => {
      dato.date = new Date(dato.date)
      dato.src = Carousel_1
      dato.categories = arrCategories
    })
    arrEvents = data
    return arrEvents
  })
  console.log("Data")
  console.log(arrEvents)
}
