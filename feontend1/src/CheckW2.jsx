import { useState } from "react";
import WeatherUpdate from "./WeatherUpdate";
import "./CheckW.css";
import AdvancedFetch from "./AdvanceFach";

function CheckW2() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState(null);

  async function handl() {
    let result = await fetch("http://localhost:8000/wheader2", {
      method: "post",
      body: JSON.stringify({ city }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data1 = await result.json();
    setdata(data1);
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

        <AdvancedFetch  data={data} />

    </div>
  );
}

export default CheckW2;
