import presentData from './src/presentData.js';
import './src/searchForm.js';

const URL =
  'https://api.openweathermap.org/geo/1.0/direct?q=Taipei&limit=5&appid=9d6dfc926f81e26a8339901dbb287995'; //Geocoding API
//   'https://api.openweathermap.org/data/2.5/weather?lat=25.0375198&lon=121.5636796&appid=9d6dfc926f81e26a8339901dbb287995&units=metric'; //Current weather data
//   'https://api.openweathermap.org/data/2.5/forecast?lat=25.0375198&lon=121.5636796&exclude=daily&appid=9d6dfc926f81e26a8339901dbb287995&units=metric'; //Call 5 day / 3 hour forecast data

window.addEventListener('DOMContentLoaded', () => {
  presentData(URL);
});
