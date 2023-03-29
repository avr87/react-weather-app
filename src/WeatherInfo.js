import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1> {props.data.city}</h1>
          <div className="clearfix weather-temperature">
            <img
              src={props.data.imgUrl}
              alt={props.data.icon}
              className="float-left icon"
            />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-4 information info">
          
          <ul className="info-time">
            <li >
              Last Updated:
              <div className="last-updated-time">
                <FormattedDate date={props.data.date} />{" "}
              </div>
            </li>
          </ul>
          <br />
          
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
    </div>
  );
}
