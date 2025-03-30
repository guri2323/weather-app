export const fetchWeatherData = async (
  param: string,
  setWeatherData: React.Dispatch<
    React.SetStateAction<Record<any, any> | undefined>
  >,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
    );

    const data = await response.json();
    if (data) {
      setWeatherData(data);
      setLoading(false);
    }
  } catch (e) {
    setLoading(false);
    console.log(e);
  }
};
