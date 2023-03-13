import React, { useState } from "react";

export default function WeatherTemperature (props){
const [unit,setUnit] = useState("celsius");

function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}

if (unit==="celsius"){
    return(

        <div>
         <strong className="temperature">{props.celsius}</strong>
        <small>
          <a href="/" id="celsius-link" className="active celsius">
            ˚C
          </a>{" "}
          |
          <a href="/" id="fahrenheit-link" className="fahrenheit" onClick={showFahrenheit}>
            ˚F
          </a>
        </small>
        </div>
    )
}else{
    let fahrenheit = (props.celsius * 9/5) +32;
   return (
     <div>
       <strong className="temperature">{Math.round(fahrenheit)}</strong>
       <small>
         <a
           href="/"
           id="celsius-link"
           className="celsius"
           onClick={showCelsius}
         >
           ˚C
         </a>{" "}
         |
         <a href="/" id="fahrenheit-link" className="active fahrenheit">
           ˚F
         </a>
       </small>
     </div>
   ); 
}
}