import "./AdvanceFach.css";

function AdvancedFetch({ data }) {

  if (!data) {
    return (
      <div className="advanced-empty">
        <div className="empty-weather-icon">🌤️</div>

        <h2>Weather Information</h2>

        <p>
          Search for a city to see detailed weather
          and farming information.
        </p>
      </div>
    );
  }

  const {
    location,
    current,
    forecast
  } = data;


  // ==========================================
  // WEATHER HELPERS
  // ==========================================

  const todayRain =
    forecast?.rainProbability?.[0] ?? 0;

  const todayRainfall =
    forecast?.rainfall?.[0] ?? 0;

  const todayMax =
    forecast?.maxTemperature?.[0] ?? "--";

  const todayMin =
    forecast?.minTemperature?.[0] ?? "--";


  // ==========================================
  // FARMING STATUS
  // ==========================================

  let farmingStatus = "Good";

  if (todayRain >= 70) {
    farmingStatus = "Rain Expected";
  } else if (current.temperature >= 38) {
    farmingStatus = "Heat Alert";
  } else if (current.humidity >= 80) {
    farmingStatus = "High Humidity";
  }


  // ==========================================
  // WEATHER ICON
  // ==========================================

  let weatherIcon = "☀️";

  if (todayRain >= 70) {
    weatherIcon = "🌧️";
  } else if (todayRain >= 40) {
    weatherIcon = "🌦️";
  } else if (current.temperature <= 15) {
    weatherIcon = "🥶";
  }


  return (
    <section className="advanced-weather">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="advanced-header">

        <div>
          <span className="dashboard-label">
            FARM WEATHER DASHBOARD
          </span>

          <h1>
            {location.city}
          </h1>

          <p className="location-text">
            📍 {location.country}
          </p>
        </div>


        <div className="weather-status">
          <span className="status-dot"></span>

          Live Weather
        </div>

      </div>


      {/* =====================================
          CURRENT WEATHER HERO
      ===================================== */}

      <div className="current-weather-card">

        <div className="current-left">

          <div className="large-weather-icon">
            {weatherIcon}
          </div>

          <div>

            <p className="weather-label">
              CURRENT WEATHER
            </p>

            <div className="main-temperature">
              {current.temperature}
              <span>°C</span>
            </div>

            <p className="temperature-range">
              Today: {todayMin}°C — {todayMax}°C
            </p>

          </div>

        </div>


        <div className="farming-status">

          <span className="status-title">
            FARMING STATUS
          </span>

          <strong>
            {farmingStatus}
          </strong>

          <p>
            Based on current weather conditions
          </p>

        </div>

      </div>


      {/* =====================================
          CURRENT WEATHER STATS
      ===================================== */}

      <div className="weather-stats">

        <div className="stat-card">

          <div className="stat-icon blue">
            💧
          </div>

          <div>
            <span>Humidity</span>

            <strong>
              {current.humidity}%
            </strong>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon cyan">
            💨
          </div>

          <div>
            <span>Wind Speed</span>

            <strong>
              {current.windSpeed} km/h
            </strong>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon purple">
            🌧️
          </div>

          <div>
            <span>Rain Probability</span>

            <strong>
              {todayRain}%
            </strong>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon green">
            🌧️
          </div>

          <div>
            <span>Expected Rain</span>

            <strong>
              {todayRainfall} mm
            </strong>
          </div>

        </div>

      </div>


      {/* =====================================
          FARMER INSIGHT
      ===================================== */}

      <div className="farmer-insight">

        <div className="insight-icon">
          🌾
        </div>

        <div>

          <span className="insight-label">
            FARMER INSIGHT
          </span>

          <h3>
            {todayRain >= 70
              ? "Rain is likely today"
              : current.temperature >= 38
              ? "High temperature detected"
              : current.humidity >= 80
              ? "High humidity detected"
              : "Weather conditions look moderate"}
          </h3>

          <p>
            {todayRain >= 70
              ? "Consider checking your irrigation plan before applying additional water."
              : current.temperature >= 38
              ? "Monitor crop water demand and soil moisture carefully."
              : current.humidity >= 80
              ? "Monitor crops for moisture-related problems and disease symptoms."
              : "Continue monitoring soil moisture and the upcoming forecast."}
          </p>

        </div>

      </div>


      {/* =====================================
          7 DAY FORECAST
      ===================================== */}

      <div className="forecast-section">

        <div className="section-heading">

          <div>
            <span>
              WEATHER OUTLOOK
            </span>

            <h2>
              7 Day Forecast
            </h2>
          </div>

          <div className="forecast-location">
            📍 {location.city}
          </div>

        </div>


        <div className="forecast-grid">

          {forecast?.dates?.map((date, index) => {

            const rain =
              forecast.rainProbability?.[index] ?? 0;

            const rainfall =
              forecast.rainfall?.[index] ?? 0;

            const max =
              forecast.maxTemperature?.[index] ?? "--";

            const min =
              forecast.minTemperature?.[index] ?? "--";


            let icon = "☀️";

            if (rain >= 70) {
              icon = "🌧️";
            } else if (rain >= 40) {
              icon = "🌦️";
            }


            return (
              <div
                className={`forecast-card ${
                  index === 0 ? "today" : ""
                }`}
                key={date}
              >

                <span className="forecast-day">
                  {index === 0
                    ? "TODAY"
                    : new Date(date).toLocaleDateString(
                        "en-US",
                        { weekday: "short" }
                      )}
                </span>

                <span className="forecast-date">
                  {new Date(date).toLocaleDateString(
                    "en-US",
                    {
                      day: "numeric",
                      month: "short"
                    }
                  )}
                </span>

                <div className="forecast-icon">
                  {icon}
                </div>

                <div className="forecast-temp">
                  <strong>
                    {max}°
                  </strong>

                  <span>
                    {min}°
                  </span>
                </div>

                <div className="forecast-rain">
                  <span>💧 {rain}%</span>
                  <span>🌧️ {rainfall}mm</span>
                </div>

              </div>
            );

          })}

        </div>

      </div>


      {/* =====================================
          LOCATION INFORMATION
      ===================================== */}

      <div className="location-card">

        <div className="location-icon">
          📍
        </div>

        <div>

          <span>
            LOCATION
          </span>

          <h3>
            {location.city}, {location.country}
          </h3>

          <p>
            Coordinates: {location.latitude},{" "}
            {location.longitude}
          </p>

        </div>

      </div>

    </section>
  );
}

export default AdvancedFetch;
