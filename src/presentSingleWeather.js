import fetchData from './fetchData.js';
import getSingleWeatherURL from './getSingleWeatherURL.js';
import setSingleWeatherData from './setSingleWeatherData.js';
import { setCurrentURL, setForecastURL } from './setAPIURL.js';

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
};

export default presentSingleWeather;
