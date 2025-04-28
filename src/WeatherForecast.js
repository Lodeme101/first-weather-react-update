import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <div className="WeatherForecast-icon">
              {" "}
              {forecast[0].weather.icon}
              <WeatherIcon code={props.data.icon} size={40} />{" "}
            </div>
            <div className="WeatherForecast-temp">
              <span className="WeatrForecast-temp-max">
                {" "}
                {forecast[0].temp.max}{" "}
              </span>
              <span className="WeatherForecast-temp-min">
                {" "}
                {forecast[0].temp.max}{" "}
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      let apiKey = "5201594abea9f3e38b70e65b11a80c24";
      let longitude = 40;
      let latitude = 74;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return null;
    }
  }
}
