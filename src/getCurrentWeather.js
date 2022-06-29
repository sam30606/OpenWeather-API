import fetchData from './fetchData.js';
const weatherAPIKey = '9d6dfc926f81e26a8339901dbb287995';
const getWeathers = async (locations) => {
  const locationsResults = locations.results;
  const newWeathers = await Promise.all(
    locationsResults.map(async (items) => {
      const { geometry, address_components } = items;
      const { long_name: cityZHName } = address_components[0];
      const { location } = geometry;

      let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${weatherAPIKey}&units=metric&lang=zh_tw`; //Current weather data
      const weathers = await fetchData(weatherURL);
      console.log('oneWeather', weathers);
      weathers.cityZHName = cityZHName;
      return weathers;
    })
  );
  return newWeathers;
};

export default getWeathers;
