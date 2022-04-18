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
    arrEvents = data.events
    return arrEvents
  })
}
