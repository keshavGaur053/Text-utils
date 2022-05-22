import React from "react";
import { useState } from "react";
import "./Textform.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
 
  const handleUpClick = () => {
    // console.log("upper case clicked")

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCleClick = () => {
    let newText ="";
    setText(newText);
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  return (
    <>
      <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black' }}
          ></textarea>
        </div>
        <div className="changeButton ">
          <button className="btn btn-primary " onClick={handleUpClick}>
            Convert to UPPERCASE
          </button>
          <button className="btn btn-primary mx-3" onClick={handleLoClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-danger " style={{width:'120px'}} onClick={handleCleClick}>
           Clear
          </button>
          {/* <button className="btn btn-primary " onClick={handlePaClick}>
          Convert to Paragraph Style
        </button> */}
        </div>
        <div className="container my-3" >
          <h2>Preview</h2>
          <p>{text.length > 0 ? text:"Enter the text to preview"}</p>
          <h3>Your Text Summary</h3>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <h3>Read Time</h3>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
      </div>
    </>
  );
}
