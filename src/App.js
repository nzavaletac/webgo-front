import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/signin" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
