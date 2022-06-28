import fetchData from './fetchData.js';

const getWeathers = async (locations) => {
  const newWeathers = await Promise.all(
    locations.map(async (items) => {
      let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${items.lat}&lon=${items.lon}&appid=9d6dfc926f81e26a8339901dbb287995&units=metric&lang=zh_tw`; //Current weather data
      let weathers = await fetchData(weatherURL);
      console.log('oneWeather', weathers);

      if (items.local_names) {
        var cityZHName = items.local_names.zh;
      }

      weathers.cityZHName = cityZHName;
      return weathers;
    })
  );

  console.log('newWeathers', newWeathers);
  return newWeathers;
};

export default getWeathers;
