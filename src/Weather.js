import React from "react";
import "./Weather.css";

export default function Weather() {
      let weatherData = {
        city: "Moshi",
        temperature: 26,
        date: "Friday 17th of February 16:27",
        description: "cloudy",
        humidity: 70,
        wind: 30,
        imgUrl: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
      };
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
              alt="weather-icon"
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
                  alt="weather-icon"
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
                  alt="weather-icon"
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
                  alt="weather-icon"
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
                  alt="weather-icon"
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
                  alt="weather-icon"
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
                  alt="weather-icon"
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
}
