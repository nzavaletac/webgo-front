import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Default from "./pages/Default";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Events } from "./pages/Events";
import Register from "./pages/Register";
import Create from "./pages/Create.js";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return !token ? <Navigate to="/login" /> : children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
