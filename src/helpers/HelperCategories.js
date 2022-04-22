import { getCategories } from "../../src/services/Category.services"
export default function HelperCategories() {
  var arrCategories = []
  getCategories().then((data) => {
    arrCategories = data.categories
    return arrCategories
  })
}
