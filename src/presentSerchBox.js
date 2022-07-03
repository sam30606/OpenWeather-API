import fetchData from './fetchData.js';
import displaySearchBox from './displaySerchBox.js';
import getWeathers from './getCurrentWeather.js';
import { showSearchBox } from './searchBoxToggle.js';

const presentSerchBox = async (URL) => {
  const locations = await fetchData(URL);
  console.log('locations', locations);
  const weathersDB = await getWeathers(locations);
  displaySearchBox(weathersDB);
  showSearchBox();
};

export default presentSerchBox;
