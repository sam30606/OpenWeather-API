import getElement from './getElement.js';
import { hiddenSearchBox } from './searchBoxToggle.js';
import presentSingleWeather from './presentSingleWeather.js';

const searchItem = getElement('.search-items');

searchItem.addEventListener('click', (e) => {
  let eTarget = e.target;
  for (let i = 1; i <= 3; i++) {
    if (!eTarget.dataset.lat) {
      eTarget = eTarget.parentElement;
    } else {
      break;
    }
  }
  console.log(eTarget);
  let singleGeocoding = {};
  singleGeocoding.lat = eTarget.dataset.lat;
  singleGeocoding.lng = eTarget.dataset.lng;
  singleGeocoding.countryEN = eTarget.dataset.countryen;
  singleGeocoding.countryZH = eTarget.dataset.countryzh;
  singleGeocoding.cityNameZH = eTarget.dataset.citynamezh;
  console.log(singleGeocoding);
  hiddenSearchBox();
  presentSingleWeather(singleGeocoding);
});
