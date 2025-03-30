import { useEffect, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import CityName from "./CityName/CityName";
import CurrentDate from "../CurrentDate/CurrentDate";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import { fetchWeatherData } from "../../utils";
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
          <CityName weatherData={weatherData} />
          <CurrentDate />
          <div className="temp">{weatherData?.main?.temp}</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <WeatherInfo weatherData={weatherData} />
        </div>
      )}
    </>
  );
};

export default Weather;
