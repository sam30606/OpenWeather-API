import fetchData from './fetchData.js';
import displayWeathers from './displayWeather_209100766.js';
import getWeathers from './getWeather.js';

const presentData = async (URL) => {
  const locations = await fetchData(URL);
  console.log('locations', locations);
  const weathersDB = await getWeathers(locations);
  await displayWeathers(weathersDB);
};

export default presentData;
