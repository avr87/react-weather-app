import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="Moshi" />
        <footer>
          This project was created by Anna van Ruiten and is{" "}
          <a
            href="https://luminous-mousse-9fab79.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://luminous-mousse-9fab79.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
