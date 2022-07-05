const setSingleWeatherData = (
  singleGeocoding,
  currentWeatherOri,
  singleWeatherOri
) => {
  console.log('singleGeocoding', singleGeocoding);
  console.log('currentWeatherOri', currentWeatherOri);
  console.log('singleWeatherOri', singleWeatherOri);

  let info1 = {};
  info1.cityNameZH = singleGeocoding.cityNameZH;
  info1.countryZH = singleGeocoding.countryZH;
  info1.countryEN = singleGeocoding.countryEN;

  let date = new Date(currentWeatherOri.sys.sunrise * 1000);

  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = '0' + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  console.log(formattedTime);

  currentWeatherOri.sys.sunset;
  console.log(info1);
};

export default setSingleWeatherData;
