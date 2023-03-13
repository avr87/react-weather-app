import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>
      <div className="clearfix weather-temperature">
        <img
          src={props.data.imgUrl}
          alt={props.data.icon}
          className="float-left icon"
        />
        <strong className="temperature">{props.data.temperature}</strong>
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
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />{" "}
            </li>
            <li className="description">{props.data.description}</li>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="windspeed">
              Wind: {props.data.wind}
              mph
            </li>
          </ul>
        </div>
        <div className="col-6 info">
          <ul>
            <li className="updatedDate">Last Updated:</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast forecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-forecast-day">Wed</div>
            <img
              src={props.data.imgUrl}
              alt={props.data.icon}
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
  );
}
