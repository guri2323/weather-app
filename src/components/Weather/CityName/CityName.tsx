import "./CityName.css";

const CityName = ({ weatherData }: Record<any, any>) => {
  return (
    <div className="city-name">
      <h2>
        {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
      </h2>
    </div>
  );
};

export default CityName;
