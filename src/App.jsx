import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import About from "./pages/About";
import All from "./pages/All";

function App() {
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/all" element={<All />} />
      </Routes>
    </div>
  );
}

export default App;
