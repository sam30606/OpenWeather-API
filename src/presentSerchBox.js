import fetchData from './fetchData.js';
import displayWeathers from './displaySerchBox.js';
import getWeathers from './getCurrentWeather.js';

const presentSerchBox = async (URL) => {
  const locations = await fetchData(URL);
  console.log('locations', locations);
  const weathersDB = await getWeathers(locations);
  displayWeathers(weathersDB);
};

export default presentSerchBox;
