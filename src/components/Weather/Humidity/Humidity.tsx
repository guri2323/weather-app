import "./Humidity.css";

const Humidity = ({ weatherData }: Record<any, any>) => {
  return (
    <div>
      <p className="humidity">{weatherData?.main?.humidity}%</p>
      <p>Humidity</p>
    </div>
  );
};

export default Humidity;
