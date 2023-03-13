import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props){
function maxTemperature(){
    let temperature = Math.round(props.data.temperature.maximum)
    return `${temperature}˚`;
}   
function minTemperature(){
    let temperature = Math.round(props.data.temperature.minimum)
    return `${temperature}˚`;
}
function day(){
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue","Wed","Thu", "Fri", "Sat"]
    return days[day];
}
    return (
      <div>
        <div className="weather-forecast-day">{day()}</div>
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
          alt="icon"
          className="icon-forecast"
        />
        <span className="weather-forecast-temperature-min forecast-min">
          {minTemperature()}
        </span>
        <span className="weather-forecast-temperature-max forecast-max">
          {maxTemperature()}
        </span>
      </div>
    );

}