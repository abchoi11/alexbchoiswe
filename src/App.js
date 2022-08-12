import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects";
import Writing from "./pages/Writing"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/writing" element={<Writing/>} />
      </Routes>
    </div>
  );
}

export default App;
