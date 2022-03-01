import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";
import Home from "./pages/Home";
import { Login } from "./pages/Login";


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
