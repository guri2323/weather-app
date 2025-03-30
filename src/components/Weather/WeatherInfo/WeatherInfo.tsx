import Humidity from "../Humidity/Humidity";
import WindSpeed from "../WindSpeed/WindSpeed";
import "./WeatherInfo.css";

const WeatherInfo = ({ weatherData }: Record<any, any>) => {
  return (
    <div className="weather-info">
      <div className="column">
        <WindSpeed weatherData={weatherData} />
      </div>
      <div className="column">
        <Humidity weatherData={weatherData} />
      </div>
    </div>
  );
};

export default WeatherInfo;
