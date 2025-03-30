import { useEffect, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import { fetchWeatherData, getCurrentDate } from "../../utils";
import "./Weather.css";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<Record<any, any>>();

  async function handleSearch() {
    fetchWeatherData(search, setWeatherData, setLoading);
  }

  useEffect(() => {
    fetchWeatherData("Toronto", setWeatherData, setLoading);
  }, []);

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
