import getElement from './getElement.js';

const searchItems = getElement('.search-items');
const displaySearchBox = (weathersDB) => {
  console.log('weathersDB', weathersDB);
  if (weathersDB.length === 0) {
    searchItems.innerHTML = `<p class="noResult">Sorry! No result found</p>`;
  } else {
    const fixWeathers = weathersDB
      .map((items) => {
        let {
          cityZHName,
          main: weatherData,
          name: cityName,
          weather: weatherDesc,
          coord: geocoding,
        } = items;
        const { icon, description } = weatherDesc[0];
        let { temp_max, temp_min, humidity: humi } = weatherData;
        let { lat, lon } = geocoding;
        temp_max = Math.trunc(temp_max);
        temp_min = Math.trunc(temp_min);

        if (cityZHName) {
          cityName = cityZHName;
        }

        return `        
    <li id="search-list" data-lat=${lat} data-lng=${lon}>
    <div class="search-data">
      <p>${cityName}</p>
      <p>${temp_min}°C / ${temp_max}°C</p>
      <p><i class="fas fa-tint"></i>${humi}%</p>
      <div class="weatherIcon"><img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="" /><p>${description}</p></div>
    </div>
  </li>`;
      })
      .join('');
    // sectionCenter.innerHTML = fixWeathers;
    searchItems.innerHTML = fixWeathers;
  }
};

export default displaySearchBox;
