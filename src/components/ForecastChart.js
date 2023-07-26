import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { weatherContext } from "../App";

export default function ForecastChart() {
  const { forecastData } = useContext(weatherContext);

  return (
    <LineChart width={950} height={400} data={forecastData} className="chart">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis dataKey="temperature" />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
