export default function HelperSortEvents(id, events) {
  switch (parseInt(id)) {
    case 1:
      console.log("Ordenando max proximo")
      events = events.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })
      break
    case 2:
      console.log("Ordenando A-Z")
      events = events.sort((a, b) =>
        a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      )
      break
    case 3:
      console.log("Ordenando Z-A")
      events = events.sort((a, b) =>
        a.title < b.title ? 1 : a.title > b.title ? -1 : 0
      )
      break
    default:
      console.log("Default")
  }

  return events
}
