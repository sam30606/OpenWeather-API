let info1Data = {};
let info2Data = {};
let forecastData = [];

const setSingleWeatherData = (
  singleGeocoding,
  currentWeatherOri,
  singleWeatherOri
) => {
  console.log('singleGeocoding', singleGeocoding);
  console.log('currentWeatherOri', currentWeatherOri);
  console.log('singleWeatherOri', singleWeatherOri);

  const sunriseTime = formatTime(currentWeatherOri.sys.sunrise);
  const sunriseSet = formatTime(currentWeatherOri.sys.sunset);

  info1Data.cityNameZH = singleGeocoding.cityNameZH;
  info1Data.countryZH = singleGeocoding.countryZH;
  info1Data.countryEN = singleGeocoding.countryEN;
  info1Data.sunriseTime = sunriseTime;
  info1Data.sunriseSet = sunriseSet;

  info2Data.temp_min = Math.trunc(currentWeatherOri.main.temp_min);
  info2Data.temp_max = Math.trunc(currentWeatherOri.main.temp_max);
  info2Data.humi = currentWeatherOri.main.humidity;
  info2Data.icon = currentWeatherOri.weather[0].icon;

  for (let arLength = 0; arLength < singleWeatherOri.list.length; arLength++) {
    let tempForecastData = {};
    tempForecastData.date = singleWeatherOri.list[arLength].dt_txt;
    tempForecastData.icon = singleWeatherOri.list[arLength].weather[0].icon;
    tempForecastData.desc =
      singleWeatherOri.list[arLength].weather[0].description;
    tempForecastData.temp_min = Math.trunc(
      singleWeatherOri.list[arLength].main.temp_min
    );
    tempForecastData.temp_max = Math.trunc(
      singleWeatherOri.list[arLength].main.temp_max
    );
    tempForecastData.humi = singleWeatherOri.list[arLength].main.humidity;
    tempForecastData.rainPredit = Number(
      singleWeatherOri.list[arLength].pop * 100
    ).toFixed(0);
    tempForecastData.windSpeed = singleWeatherOri.list[arLength].wind.speed;

    forecastData[arLength] = tempForecastData;
  }

  const tempAllData = {};
  tempAllData.info1Data = info1Data;
  tempAllData.info2Data = info2Data;
  tempAllData.forecastData = forecastData;

  console.log('tempAllData', tempAllData);
  return tempAllData;
};

const formatTime = (oriTime) => {
  const date = new Date(oriTime * 1000);
  const hours = '0' + date.getHours();
  const minutes = '0' + date.getMinutes();
  const seconds = '0' + date.getSeconds();
  const formattedTime =
    hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);

  return formattedTime;
};

export default setSingleWeatherData;
