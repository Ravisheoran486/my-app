import React, { useState } from "react";
import { Link } from "react-router-dom";
import Audio from "./audio";
import './home.css'
const Home = ({ link, setLink }) => {
  return (
    <div className="home">
      <div className="container">
      <h1>Audio Player</h1>
      <div className="uploadInput">
      <form>
      
        <input
          type="file"
          id="URL"
          onChange={(event) => {
            const file = event.target.files[0];
            console.log(event.target.files)
            const reader = new FileReader();

            reader.addEventListener(
              "load",
              () => {
                setLink(reader.result);
              },
              false
            );

            if (file) {
              reader.readAsDataURL(file);
            }
            // console.log(e.target.value);
            // setLink(e.target.value);
          }}
        />
      </form>
      </div>
      <Link to="audio">  
      <div className="uploadButton">
        
        <strong >Upload</strong>
        </div>   </Link>
        </div>
    </div>
  );
};

export default Home;
