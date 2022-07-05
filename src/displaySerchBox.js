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
          main: weatherData,
          weather: weatherDesc,
          coord: geocoding,
          address,
        } = items;
        const { icon, description } = weatherDesc[0];
        let { temp_max, temp_min, humidity: humi } = weatherData;
        let { lat, lon } = geocoding;

        for (let i = 0; i < address.length; i++) {
          let addressType = address[i].types[0];

          switch (addressType) {
            case 'country':
              var countryEN = address[i].short_name;
              var countryZH = address[i].long_name;
              break;
            case 'administrative_area_level_1':
              var cityNameZH = address[i].short_name;
              break;
          }
        }

        temp_max = Math.trunc(temp_max);
        temp_min = Math.trunc(temp_min);

        return `        
    <li id="search-list" data-lat=${lat} data-lng=${lon} data-countryen=${countryEN} data-countryzh=${countryZH} data-citynamezh=${cityNameZH}>
    <div class="search-data">
      <p>${countryZH}-${cityNameZH}</p>
      <p>${temp_min}°C / ${temp_max}°C</p>
      <p><i class="fa-solid fa-droplet"></i></i>${humi}%</p>
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
