import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />

        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Lodeme101"
              target="_blank"
              rel="noreferrer"
            >
              Lodemé Pendergraph{" "}
            </a>{" "}
            and is
            <a
              href="https://github.com/Lodeme101/first-weather-react-update"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://voluble-pudding-e83bbe.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
