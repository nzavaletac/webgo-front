/*export default function HelperCategories() {
  const arrCategories = [
    { title: "Concierto", id: "625a47b6fb0d138637b523c1" },
    { title: "Maraton", id: "625a47befb0d138637b523c3" },
    { title: "Deporte", id: "625b989d01de673fd504f5ec" },
  ]
  return arrCategories
}
*/
import { getCategories } from "../../src/services/Category.services"
export default function HelperCategories() {
  var arrCategories = []
  getCategories().then((data) => {
    arrCategories = data.categories
    return arrCategories
  })
}
