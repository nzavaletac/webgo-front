import Swal from "sweetalert2"
import { deleteEvent } from "../services/Event.services"

export default function DeleteEvent(id) {
  deleteEvent(id).then((data) => {
    if (data.event._id) {
      Swal.fire({
        title: "Successful",
        text: "Event deleted successfully",
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
          timer: 1500,
        })
      }
    }
  })
  return console.log("Eliminando evento: " + id)
}
