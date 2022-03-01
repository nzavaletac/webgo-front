import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Default from "./pages/Default"
import Home from "./pages/Home"
import { Login } from "./pages/Login"
import { Events } from "./pages/Events"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App
