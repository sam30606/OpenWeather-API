import fetchData from './fetchData.js';
import displayWeathers from './displaySerchBox.js';
import getWeathers from './getCurrentWeather.js';

const presentData = async (URL) => {
  const locations = await fetchData(URL);
  console.log('locations', locations);
  const weathersDB = await getWeathers(locations);
  displayWeathers(weathersDB);
};

export default presentData;
