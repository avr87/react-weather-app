import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";



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
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <div className="row information">
        <div className="col-6">
          <ul>
            <li>
              Last Updated:
              <FormattedDate date={props.data.date} />{" "}
            </li>
          </ul>
        </div>
        <div className="col-6 info">
          <ul>
            <li className="description">{props.data.description}</li>
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="windspeed">
              Wind: {props.data.wind}
              mph
            </li>
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
