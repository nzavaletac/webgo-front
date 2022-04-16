import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const getListAll = async () => {
  const result = await axios.get(`${URL_BACKEND}/events/`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data.events
}
//pass userId in form from CreateEventPage
export const postCreate = async (objEvent) => {
  const result = await axios.post(
    `${URL_BACKEND}/events/`,
    JSON.stringify(objEvent),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  )
  return result.data.events
}
export const getMyList = async (objEvent, userId) => {
  const result = await axios.get(
    `${URL_BACKEND}/events/mylist`,
    JSON.stringify(objEvent),
    {
      headers: {
        "Content-type": "application/json",
      },
      params: {
        userId: userId,
      },
    }
  )
  return result.data
}

export const getShowEvent = async (objEvent, eventId) => {
  const result = await axios.get(
    `${URL_BACKEND}/events/${eventId}`,
    JSON.stringify(objEvent),
    {
      headers: {
        "Content-type": "application/json",
      },
      params: {},
    }
  )
  return result.data
}