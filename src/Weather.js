import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity)
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates
    });
  }

  function handleSubmit(event){
    event.preventDefault();
     search();

  }
  function handleChangeCity(event){
    setCity(event.target.value);
   
  }

 function search() {
      const apiKey = "524437caf2bf7e4a9413b557e3t8od0a";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

  if (weatherData.ready) {
    return (
      <div className="weather-app-wrapper">
        <div className="card">
          <div className="card-body">
            <form className="mb-4 search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search city...."
                    className="form-control city-input"
                    onChange={handleChangeCity}
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
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
search();
  }
}
