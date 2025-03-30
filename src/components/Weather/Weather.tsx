import { useCallback, useEffect, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import CityName from "./CityName/CityName";
import CurrentDate from "../CurrentDate/CurrentDate";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import { fetchWeatherData } from "../../utils";
import WeatherDescription from "./WeatherDescription/WeatherDescription";
import Temperature from "./Temperature/Temperature";
import "./Weather.css";

const Weather = () => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<Record<any, any>>();

  const handleSearch = useCallback(
    async () => fetchWeatherData(search, setWeatherData, setLoading),
    [search]
  );

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
          <Temperature weatherData={weatherData} />
          <WeatherDescription weatherData={weatherData} />
          <WeatherInfo weatherData={weatherData} />
        </div>
      )}
    </>
  );
};

export default Weather;
