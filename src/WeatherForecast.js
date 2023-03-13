import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null)
    function handleResponse(response){
console.log(response.data)
setLoaded(true);
setForecast(response.data.daily);

}


if(loaded){
    return (
  <div className="weather-forecast forecast">
    <div className="row">
      <div className="col-2">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    </div>
  </div>
);

}else{
let apiKey = "524437caf2bf7e4a9413b557e3t8od0a";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse);

return null;
}
}