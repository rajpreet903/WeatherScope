import React, { useEffect } from "react";
import { useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
//import Forecast from "../Forecast/Forecast.js";
import Weather from "./Weather.js";

const WeatherInput = () => {
   const [lat, setlat] = useState([]);
   const [long, setlong] = useState([]);
   const [mapped, setmapped] = useState([]);
   //const [chart, setchart] = useState({});

   useEffect(() => {
      const findLocation = async () => {
         await navigator.geolocation.getCurrentPosition(
            (position) => {
               setlat(position.coords.latitude);
               setlong(position.coords.longitude);
            },
            (err) => {
               alert("Allow Permssion for location");
            }
         );
      };
      findLocation();
      getWeather(lat, long)
         .then((weather) => {
            setmapped(weather);
         })
         .catch((err) => {
            console.log(err.message);
         });
      // getForecast(lat, long)
      //    .then((Forecast) => {
      //       setchart(Forecast);
      //       seterror(null);
      //    })
      //    .catch((err) => {
      //       seterror(err.message);
      //    });
   }, [lat, long]);
   const getWeather = (lat, long) => {
      return fetch(
         `https://api.weatherapi.com/v1/current.json?key=ae0796d2268e44bc99f184449222105&q=${lat},${long}&aqi=no`
      )
         .then((res) => {
            if (res.ok) return res.json();
            throw new Error("Something went wrong");
         })
         .then((weather) => {
            if (Object.entries(weather).length) {
               const mappedData = mapDatatoWeatherInterface(weather);
               return mappedData;
            }
         });
   };
   // const getForecast = () => {
   //    return fetch(
   //       `https://api.weatherapi.com/v1/forecast.json?key=ae0796d2268e44bc99f184449222105&q=${lat},${long}&days=7&aqi=no&alerts=no`
   //    )
   //       .then((res) => {
   //          return res.json();
   //       })
   //       .then((ForecastData) => {
   //          if (Object.entries(ForecastData).length > 1) {
   //             const mappedData = mapDatatoForecastInterface(ForecastData);
   //             return mappedData;
   //          }
   //       });
   // };

   const mapDatatoWeatherInterface = (data) => {
      const mappeddata = {
         main: {
            name: data.location.name,
            date: data.location.localtime,
            description: data.current.condition.text,
            temperature: Math.round(data.current.temp_c),
            country: data.location.country,
            icon: data.current.condition.icon,
         },
      };
      return mappeddata;
   };

   // const mapDatatoForecastInterface = (charts) => {
   //    const mapped = {
   //       labels: [],
   //       datasets: [
   //          {
   //             label: "Celcius",
   //             data: [],
   //          },
   //       ],
   //    };
   //    let samplename = [],
   //       sampledata = [];
   //    for (let i in charts.forecast.forecastday) {
   //       samplename[i] = charts.forecast.forecastday[i].date;
   //       sampledata[i] = charts.forecast.forecastday[i].day.avgtemp_c;
   //    }
   //    mapped.labels = samplename;
   //    mapped.datasets.data = sampledata;
   //    return mapped;
   // };
   return (
      <div>
         {typeof mapped.main != "undefined" ? (
            <div>
               <Weather weatherData={mapped} />
               <br></br>
               {/* <Forecast chartData={chart} /> */}
            </div>
         ) : (
            <div>
               <Dimmer active>
                  <Loader>Loading..</Loader>
               </Dimmer>
            </div>
         )}
      </div>
   );
};

export default WeatherInput;
