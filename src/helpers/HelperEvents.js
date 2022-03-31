export default function HelperEvents() {
  let Carousel_1 = "https://cdn.joinnus.com/files/2022/01/drquhEGIghYW6LQ.jpg"
  let DateEvent = new Date()
  const arrEvents = [
    {
      title: "The Shawshank Redemption",
      id: 1,
      src: Carousel_1,
      date: DateEvent,
    },
    { title: "The Godfather", id: 2, src: Carousel_1, date: DateEvent },
    {
      title: "The Godfather: Part II",
      id: 3,
      src: Carousel_1,
      date: DateEvent,
    },
    { title: "The Dark Knight", id: 4, src: Carousel_1, date: DateEvent },
    { title: "12 Angry Men", id: 5, src: Carousel_1, date: DateEvent },
    { title: "Schindler's List", id: 6, src: Carousel_1, date: DateEvent },
  ]
  return arrEvents
}
