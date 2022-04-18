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
}
