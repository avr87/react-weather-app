import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
      
      const [ready, setReady] = useState(false)
      const [weatherData, setWeatherData] = useState({ready: false})
    function handleResponse(response){
    setReady(true);
    setWeatherData({
        temperature: Math.round(response.data.temperature.current),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        imgUrl: response.data.condition.icon_url,
        icon: response.data.condition.icon,
        city: response.data.city
    })
    }
     if (ready){
  return (
    <div className="weather-app-wrapper">
      <div className="card">
        <div className="card-body">
          <form className="mb-4 search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search city...."
                  className="form-control city-input"
                />
              </div>
              <div className="col-3">
                <input
                  className="btn btn-primary search-button"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
          <h1> {weatherData.city}</h1>
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.icon}
              className="float-left icon"
            />
            <strong className="temperature">{weatherData.temperature}</strong>
            <small>
              <a href="/" id="celsius-link" className="active celsius">
                ˚C
              </a>{" "}
              |
              <a href="/" id="fahrenheit-link" className="fahrenheit">
                ˚F
              </a>
            </small>
          </div>
          <div className="row information">
            <div class="col-6">
              <ul>
                <li className="description">{weatherData.description}</li>
                <li>
                  Humidity:
                  <span className="humidity"> {weatherData.humidity}</span>%
                </li>
                <li>
                  Wind:
                  <span className="windspeed"> {weatherData.wind}</span>
                  mph
                </li>
              </ul>
            </div>
            <div className="col-6 info">
              <ul>
                <li>
                  Last Updated:
                  <span className="date"> {weatherData.date}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-day">Wed</div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.icon}
                  className="icon-forecast"
                />
                <span className="weather-forecast-temperature-min forecast-min">
                  11˚
                </span>
                <span className="weather-forecast-temperature-max forecast-max">
                  13˚
                </span>
              </div>
              <div className="col-2">
                <div className="weather-forecast-day">Wed</div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.icon}
                  className="icon-forecast"
                />
                <span className="weather-forecast-temperature-min forecast-min">
                  11˚
                </span>
                <span className="weather-forecast-temperature-max forecast-max">
                  13˚
                </span>
              </div>
              <div className="col-2">
                <div className="weather-forecast-day">Wed</div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.icon}
                  className="icon-forecast"
                />
                <span className="weather-forecast-temperature-min forecast-min">
                  11˚
                </span>
                <span className="weather-forecast-temperature-max forecast-max">
                  13˚
                </span>
              </div>
              <div className="col-2">
                <div className="weather-forecast-day">Wed</div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.icon}
                  className="icon-forecast"
                />
                <span className="weather-forecast-temperature-min forecast-min">
                  11˚
                </span>
                <span className="weather-forecast-temperature-max forecast-max">
                  13˚
                </span>
              </div>
              <div className="col-2">
                <div className="weather-forecast-day">Wed</div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.icon}
                  className="icon-forecast"
                />
                <span className="weather-forecast-temperature-min forecast-min">
                  11˚
                </span>
                <span className="weather-forecast-temperature-max forecast-max">
                  13˚
                </span>
              </div>
              <div className="col-2">
                <div className="weather-forecast-day">Wed</div>
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.icon}
                  className="icon-forecast"
                />
                <span className="weather-forecast-temperature-min forecast-min">
                  11˚
                </span>
                <span className="weather-forecast-temperature-max forecast-max">
                  13˚
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}else{
     const apiKey = "524437caf2bf7e4a9413b557e3t8od0a";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
}
}
