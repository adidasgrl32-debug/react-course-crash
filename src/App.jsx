import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Nav from "./components/Nav";
import Users from "./components/pages/Users";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users:id" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
