import presentSerchBox from './src/presentSerchBox.js';
import presentSingleWeather from './src/presentSingleWeather.js';
import './src/searchForm.js';
import './src/searchItems.js';

const tempgeo = {
  cityNameZH: '台北市',
  countryEN: 'TW',
  countryZH: '台灣',
  lat: '25.066',
  lng: '121.2654',
};
window.addEventListener('DOMContentLoaded', () => {
  presentSingleWeather(tempgeo);
});
