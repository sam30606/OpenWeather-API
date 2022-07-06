import getElement from './getElement.js';

const info1 = getElement('.info-1');
const info2 = getElement('.info-2');
const forecast = getElement('.forecast');

const displatSingleWeather = (singleWeatherData) => {
  const { info1Data, info2Data, forecastData } = singleWeatherData;

  info1.innerHTML = `<h1>${info1Data.cityNameZH}</h1>
    <h2>${info1Data.countryZH}-${info1Data.countryEN}</h2>
    <p><i class="fa-solid fa-sun"></i></i>${info1Data.sunriseTime}</p>
    <p><i class="fa-regular fa-sun"></i></i>${info1Data.sunriseSet}</p>`;

  info2.innerHTML = `          
  <p>${info2Data.temp_min}°C / ${info2Data.temp_max}°C</p>
  <p><i class="fa-solid fa-droplet"></i></i>${info2Data.humi}%</p>
  <img src="https://openweathermap.org/img/wn/${info2Data.icon}@4x.png" alt="" />`;

  const newForcast = forecastData
    .map((items) => {
      return `
      <div class="forecast-data">
     <h6>${items.date}</h6>
     <img src="https://openweathermap.org/img/wn/${items.icon}@2x.png" alt="" />
     <p>${items.desc}</p>
     <p>${items.temp_min}°C / ${items.temp_max}°C</p>
     <p><i class="fa-solid fa-droplet"></i></i>${items.humi}%</p>
     <p><i class="fa-solid fa-umbrella"></i>${items.rainPredit}%</p>
     <p><i class="fa-solid fa-wind"></i>${items.windSpeed}</p>
     </div>`;
    })
    .join('');
  forecast.innerHTML = newForcast;
};

export default displatSingleWeather;
