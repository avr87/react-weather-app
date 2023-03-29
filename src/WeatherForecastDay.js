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
function icon(){
   let iconImg = props.data.condition.icon_url;
   let iconDescription = props.data.condition.icon;

   return(
    <img 
    src= {iconImg}
    alt={iconDescription}
    className = "icon-forecast"/>
   )



}

    return (
      <div className="forecast-day">
        <div className="weather-forecast-day">{day()}</div>
       <div>{icon()}</div>
        <span className="weather-forecast-temperature-min forecast-min">
          {minTemperature()}
        </span>
        <span className="weather-forecast-temperature-max forecast-max">
          {maxTemperature()}
        </span>
      </div>
    );

}