import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function App() {
  return (
    <div className="App">
      <h1>Welcome to My World !</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
//http:localhost:3000/Home

//http:localhost:3000/About
