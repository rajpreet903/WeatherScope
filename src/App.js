import React from "react";
import MainNavigation from "./components/layout/MainNavigation";
import WeatherInput from "./components/weather/WeatherInput";
import css from "./components/layout/Layout.module.css";

const App = () => {
   return (
      <div>
         <MainNavigation />
         <div className={css.layout}>
            <WeatherInput />
         </div>
      </div>
   );
};

export default App;
