import { useState } from "react";
import WeatherUpdate from "./WeatherUpdate";
import "./CheckW.css";

function CheckW() {
  const [city, setcity] = useState("");
  const [weather, setweather] = useState(null);

  async function handl() {
    let result = await fetch("http://localhost:8000/wheader", {
      method: "post",
      body: JSON.stringify({ city }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    setweather(data);
  }

  return (
    <div className="weather-page">

      <div className="weather-header">
        <p className="weather-label">WEATHER DASHBOARD</p>

        <h1>Check Current Weather</h1>

        <p className="weather-subtitle">
          Get real-time weather information for any city
        </p>
      </div>

      <div className="weather-search">

        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            value={city}
            onChange={(e) => {
              setcity(e.target.value);
            }}
            placeholder="Enter your city name..."
          />
        </div>

        <button
          type="button"
          onClick={handl}
          className="weather-button"
        >
          Check Weather
          <span>→</span>
        </button>

      </div>

      <WeatherUpdate weather={weather} />

    </div>
  );
}

export default CheckW;
