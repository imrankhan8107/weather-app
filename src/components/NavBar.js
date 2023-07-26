import React, { useEffect, useState, useContext } from "react";
import { weatherContext } from "../App";
import { BiCurrentLocation } from "react-icons/bi";
import "../styles/NavBar.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default function NavBar() {
  const { setCityName, getCityData, locateMe } = useContext(weatherContext);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <div className="navbar">
      <span className="navbar-content">
        <div className="navbar-dates">
          <h2>
            {months[time.getMonth()]} {time.getFullYear()}
          </h2>
          <h4>
            {days[time.getDay()]}, {months[time.getMonth()].substring(0, 3)}{" "}
            {time.getDate()}, {time.getFullYear()}
          </h4>
        </div>
        <input
          placeholder="🔍 Search Location Here.."
          className="city-input"
          onChange={(e) => {
            setCityName(e.target.value);
          }}
          onKeyDown={(e) => {
            getCityData(e);
          }}
        />

        <button onClick={locateMe} className="locate">
          <BiCurrentLocation className="locate-icon" />
        </button>
      </span>
    </div>
  );
}
