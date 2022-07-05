const weatherAPIKey = '9d6dfc926f81e26a8339901dbb287995';
const googleAPIKEY = 'AIzaSyCBq0e5XOQjj4gkPMXjezKcR4-xYmtbkv0';

export const setForecastURL = (lat, lng) => {
  let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${weatherAPIKey}&units=metric&lang=zh_tw`;
  return forecastURL;
};
export const setCurrentURL = (lat, lng) => {
  let currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherAPIKey}&units=metric&lang=zh_tw`;
  return currentURL;
};

export const setGeocodingURL = (value) => {
  let geocodingURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&language=zh-TW&key=${googleAPIKEY}`;
  return geocodingURL;
};
