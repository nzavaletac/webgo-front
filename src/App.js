import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from "./pages/Default";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;
