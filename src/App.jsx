import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/buildTest/home" />} />
      <Route path="/buildTest/home" element={<Home />} />
      <Route path="/buildTest/about" element={<About />} />
      <Route path="/buildTest/contact" element={<Contact />} />
    </Routes>
  );
};

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/buildTest/home")}>Home</button>
      <button onClick={() => navigate("/buildTest/about")}>About</button>
      <button onClick={() => navigate("/buildTest/contact")}>Contact</button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <NavigationButtons />
      <RouterComp />
    </Router>
  );
}
