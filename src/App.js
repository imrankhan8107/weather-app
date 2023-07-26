import { createContext, useEffect, useState } from "react";
import { LeftPane } from "./components";
import { Home, Maps, Calender, SavedLocations } from "./pages";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "4631ef4177fb13d78b2dc0b0c1650420";

export const weatherContext = createContext({
  weatherData: {},
  forecastData: {},
  currentTab: "Home",
  setcurrentTab: (obj) => obj,
  setweatherData: (obj) => obj,
  getCityData: (obj) => obj,
  setCityName: (obj) => obj,
  locateMe: (obj) => obj,
  savedLocations: [],
});

function App() {
  const [latitude, setlatitude] = useState(51.509865);
  const [longitude, setlongitude] = useState(-0.118092);
  const [weatherData, setweatherData] = useState({});
  const [cityName, setCityName] = useState("Mumbai");
  const [forecastData, setforecastData] = useState(null);

  const getWeatherData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setweatherData(data);
  };

  const locateMe = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setlatitude(position.coords.latitude);
        setlongitude(position.coords.longitude);
      },
      function (error) {
        console.log("Error getting location: " + error.message);
      }
    );
    console.log("Located");
    getWeatherData(
      API_BASE_URL +
        `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
  };

  navigator.geolocation.getCurrentPosition(
    function (position) {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    },
    function (error) {
      // Handle any errors that occur during the location retrieval
      console.log("Error getting location: " + error.message);
    }
  );

  const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    const weatherData = json.list;

    var tempData = [];

    weatherData.map((item) => {
      tempData.push({
        date: item.dt_txt,
        temperature: item.main.temp,
      });

      return tempData;
    });

    setforecastData(tempData);
  };

  useEffect(() => {
    getWeatherData(
      API_BASE_URL +
        `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    fetchData(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
  }, [latitude, longitude]);

  const getCityData = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(
        API_BASE_URL + `q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setweatherData(data);
    }
  };

  const [currentTab, setcurrentTab] = useState("Home");

  return (
    <div className="App">
      <weatherContext.Provider
        value={{
          weatherData: weatherData,
          currentTab: currentTab,
          setcurrentTab: setcurrentTab,
          setweatherData: setweatherData,
          setCityName: setCityName,
          getCityData: getCityData,
          locateMe: locateMe,
          forecastData:forecastData,
        }}
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LeftPane />
                  <Home />
                </>
              }
            />
            <Route
              path="/maps"
              element={
                <>
                  <LeftPane />
                  <Maps />
                </>
              }
            />
            <Route
              path="/saved-locations"
              element={
                <>
                  <LeftPane />
                  <SavedLocations />
                </>
              }
            />
            <Route
              path="/calender"
              element={
                <>
                  <LeftPane />
                  <Calender />
                </>
              }
            />
          </Routes>
        </Router>
      </weatherContext.Provider>
    </div>
  );
}

export default App;
