import "./WeatherUpdate.css";




function WeatherUpdate({ weather }) {
  if (!weather) {
    return (
      <div className="weather-empty">
        <div className="empty-icon">🌤️</div>
        <h2>Enter a city to check weather</h2>
        <p>Discover the current weather of your city</p>
      </div>
    );
  }

  return (
    <div className="weather-container">

      <div className="weather-card">


            <div className="weather-icon">
          ☀️
            </div>

    
                      <p className="location">
          📍 {weather.city}, {weather.country}
        </p>

        <h1>{weather.city}</h1>
          
                  <p className="weather-status">
          Current Weather
        </p>

                            <div className="temperature">
                     {weather.temperature}°
          <span>C</span>
        </div>

        <div className="weather-info">

                          <div className="info-box">
            <div className="info-icon">💧</div>
            <div>
              <p>Humidity</p>
              <h3>{weather.humidity}%</h3>
            </div>
          </div>

                           <div className="info-box">
            <div className="info-icon">💨</div>
            <div>
              <p>Wind Speed</p>
              <h3>{weather.windSpeed} km/h</h3>
                  </div>
          </div>

                    </div>

          </div>

    </div>
  );
}

export default WeatherUpdate;
