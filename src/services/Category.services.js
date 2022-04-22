import axios from "axios"
import { URL_BACKEND } from "../environments/environments"

export const getCategories = async () => {
  const result = await axios.get(`${URL_BACKEND}/categories/`, {
    headers: {
      "Content-type": "application/json",
    },
  })
  return result.data
}
