import { getListAll } from "../../src/services/Event.services.js"
export default function HelperEvents() {
  var arrEvents
  getListAll().then((data) => {
    arrEvents = data.events
    return arrEvents
  })
}
