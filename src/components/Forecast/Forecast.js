import React from "react";

import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";
import Cards from "../UI/Cards";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Forecast = ({ chartData }) => {
   return (
      <Cards>
         <div>
            <Line data={chartData}></Line>
         </div>
      </Cards>
   );
};

export default Forecast;
