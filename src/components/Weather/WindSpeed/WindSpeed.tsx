import "./WindSpeed.css";

const WindSpeed = ({ weatherData }: Record<any, any>) => {
  return (
    <div>
      <p className="wind">{weatherData?.wind?.speed}</p>
      <p>Wind Speed</p>
    </div>
  );
};

export default WindSpeed;
