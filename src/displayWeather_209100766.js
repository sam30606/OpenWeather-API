import getElement from './getElement.js';
import fetchData from './fetchData.js';
const sectionCenter = getElement('.section-center');
const searchItem = getElement('.search-item');
const displayWeathers = (weathersDB) => {
  console.log('weathersDB', weathersDB);
  const fixWeathers = weathersDB
    .map((items) => {
      const { list: listArr, city: cityArr, cityZHName } = items;
      let { main, weather } = listArr[0];
      const { icon } = weather[0];
      let { temp_max, temp_min, humidity: humi } = main;
      let { name: cityName, country } = cityArr;
      console.log(listArr);
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
    <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="" />
  </div>
</li>`;
    })
    .join('');
  // sectionCenter.innerHTML = fixWeathers;
  searchItem.innerHTML = fixWeathers;
};

export default displayWeathers;
