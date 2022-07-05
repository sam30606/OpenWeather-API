import { setForecastURL } from './setAPIURL.js';

const getSingleWeatherURL = (singleGeocoding) => {
  const { lat, lng } = singleGeocoding;
  return setForecastURL(lat, lng);
};

export default getSingleWeatherURL;
