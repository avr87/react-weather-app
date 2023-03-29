import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <strong>{props.celsius}</strong>
      <small>˚C</small>
    </div>
  );
}
