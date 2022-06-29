import getElement from './getElement.js';

const searchItem = getElement('.search-item');
const displayWeathers = (weathersDB) => {
  console.log('weathersDB', weathersDB);
  if (weathersDB.length === 0) {
    searchItem.innerHTML = `<p class="noResult">Sorry! No result found</p>`;
  } else {
    const fixWeathers = weathersDB
      .map((items) => {
        let {
          cityZHName,
          sys,
          main: weatherData,
          name: cityName,
          weather: weatherDesc,
        } = items;
        const { icon, description } = weatherDesc[0];
        let { temp_max, temp_min, humidity: humi } = weatherData;
        let { country } = sys;
        temp_max = Math.trunc(temp_max);
        temp_min = Math.trunc(temp_min);

        if (cityZHName) {
          cityName = cityZHName;
        }

        return `        
    <li class="search-item">
    <div class="search-list">
      <p>${country}-${cityName}</p>
      <p>${temp_min}°C / ${temp_max}°C</p>
      <p><i class="fas fa-tint"></i>${humi}%</p>
      <div class="weatherIcon"><img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="" /><p>${description}</p></div>
    </div>
  </li>`;
      })
      .join('');
    // sectionCenter.innerHTML = fixWeathers;
    searchItem.innerHTML = fixWeathers;
  }
};

export default displayWeathers;
