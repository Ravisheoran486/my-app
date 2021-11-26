import logo from "./logo.svg";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Audio from "./audio";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WaveformContainer from "./waveformcontainer";

function App() {
  const [link, setLink] = useState("");
  useEffect(() => {
    console.log("link", link);
  }, [link]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={<Home link={link} setLink={setLink} />}
        />
        <Route path="/audio" element={<WaveformContainer link={link} />} />
      </Routes>
    </div>
  );
}

export default App;
