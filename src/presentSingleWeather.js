import fetchData from './fetchData.js';
import setSingleWeatherData from './setSingleWeatherData.js';
import { setCurrentURL, setForecastURL } from './setAPIURL.js';
import displatSingleWeather from './displatSingleWeather.js';

const presentSingleWeather = async (singleGeocoding) => {
  const { lat, lng } = singleGeocoding;

  const CurrentWeatherURL = setCurrentURL(lat, lng);
  const singleWeatherURL = setForecastURL(lat, lng);
  const currentWeatherOri = await fetchData(CurrentWeatherURL);
  const singleWeatherOri = await fetchData(singleWeatherURL);
  const singleWeatherData = setSingleWeatherData(
    singleGeocoding,
    currentWeatherOri,
    singleWeatherOri
  );
  displatSingleWeather(singleWeatherData);
};

export default presentSingleWeather;
