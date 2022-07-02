import fetchData from './fetchData.js';
import displaySearchBox from './displaySerchBox.js';
import getWeathers from './getCurrentWeather.js';

const presentSerchBox = async (URL) => {
  const locations = await fetchData(URL);
  console.log('locations', locations);
  const weathersDB = await getWeathers(locations);
  displaySearchBox(weathersDB);
  await import('./searchItems.js');
};

export default presentSerchBox;
