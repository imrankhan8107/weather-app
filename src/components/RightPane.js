import React, { useContext, useEffect, useState } from "react";
import { weatherContext } from "../App";
import "../styles/RightPane.css";
import {
  BsFillCloudSunFill,
  BsFillSunFill,
  BsSunsetFill,
} from "react-icons/bs";

export default function RightPane() {
  const { weatherData } = useContext(weatherContext);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);
  const sunrise = new Date(weatherData.sys?.sunrise * 1000);
  const sunset = new Date(weatherData.sys?.sunset * 1000);

  return (
    <div className="right-pane">
      <div className="rp-up">
        <div className="rp-up-1">
          <span>
            <p className="city-name">
              {weatherData.name},{weatherData.sys?.country}
            </p>
          </span>
          <span>
            <p className="time">{time.toLocaleTimeString()}</p>
          </span>
        </div>

        <div className="rp-up-lower">
          <span>
            <BsFillCloudSunFill className="rp-icon" />
            <p className="temp">{weatherData.main?.temp}&#176; C </p>
          </span>
          <span>
            {weatherData.weather?.map((e) => {
              return <p key={e.id}>{e.description.toUpperCase()}</p>;
            })}
          </span>
        </div>
      </div>
      <hr />
      <div className="rp-down">
        <p>Chance of Rain</p>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
        <p>Sunrise & Sunset</p>
        <div className="rp-cards">
          <BsFillSunFill className="rp-cards-icon" />
          <span>
            <p className="rp-cards-texts">Sunrise</p>
            <p className="rp-cards-time">{sunrise.toLocaleTimeString()}</p>
          </span>
          <p>
            {Math.round(Math.max(0, (time - sunrise) / (1000 * 60 * 60)))} Hours
            Ago
          </p>
        </div>
        <div className="rp-cards">
          <BsSunsetFill className="rp-cards-icon" />
          <span>
            <p className="rp-cards-texts">Sunset</p>
            <p className="rp-cards-time">{sunset.toLocaleTimeString()}</p>
          </span>
          In {Math.round(Math.max(0, (sunset - time) / (1000 * 60 * 60)))}{" "}
          {/* {sunset.getHours() - time.getHours() > 0
            ? sunset.getHours() - time.getHours()
            : 24 - time.getHours() + sunset.getHours()}{" "} */}
          hours
        </div>
      </div>
    </div>
  );
}
