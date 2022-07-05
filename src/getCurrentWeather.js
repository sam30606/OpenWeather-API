import fetchData from './fetchData.js';
import { setCurrentURL } from './setAPIURL.js';

const getWeathers = (locations) => {
  const locationsResults = locations.results;
  const newWeathers = Promise.all(
    locationsResults.map(async (items) => {
      const {
        geometry,
        formatted_address: cityZHName,
        address_components: address,
      } = items;
      const { location } = geometry;

      let weatherURL = setCurrentURL(location.lat, location.lng);
      const weathers = await fetchData(weatherURL);
      console.log('searchWeather', weathers);

      weathers.address = address;
      return weathers;
    })
  );
  return newWeathers;
};

export default getWeathers;
