import "./Temperature.css";

const Temperature = ({ weatherData }: Record<any, any>) => {
  return <div className="temperature">{weatherData?.main?.temp} F</div>;
};

export default Temperature;
