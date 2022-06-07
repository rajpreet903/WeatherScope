import React, { useState } from "react";
import Cards from "../UI/Cards";
import css from "./Weather.module.css";

const Weather = ({ weatherData }) => {
   return (
      <div>
         <Cards>
            <li className={css.list}>
               <h2>CURRENT WEATHER</h2>
               <p className="css.place">
                  {weatherData.main.name}, <span>{weatherData.main.country}</span>
               </p>
               <p className={css.description}>{weatherData.main.description}</p>
               <p className={css.temp}>
                  {weatherData.main.temperature}&#176;<span className={css.celcius}>C</span>
               </p>

               <div className={css.weathericon}>
                  <img src={`${weatherData.main.icon}`} alt="Weather Icon"></img>
               </div>
            </li>
         </Cards>
      </div>
   );
};

export default Weather;
