import React from "react";
import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
function App() {
  //DARK MODE------------------
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor='#0d3f6b'
    } else {
      setMode("light");
      document.body.style.backgroundColor='white'

    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* props  passing ---*/}
        <TextForm heading="Enter the text to see the magic"   mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
