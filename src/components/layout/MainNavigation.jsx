import React from "react";
import css from "./MainNavigation.module.css";

const MainNavigation = () => {
   return (
      <header>
         <div className={css.header}>
            WEATHER
            <span>SCOPE</span>
         </div>
      </header>
   );
};

export default MainNavigation;
