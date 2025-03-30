import "./WeatherDescription.css";

const WeatherDescription = ({ weatherData }: Record<any, any>) => {
  return (
    <div className="description">
      {weatherData?.weather?.[0]?.description?.toUpperCase() ?? ""}
    </div>
  );
};

export default WeatherDescription;
