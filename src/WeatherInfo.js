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
      
    </div>
  );
}
