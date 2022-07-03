import getElement from './getElement.js';
import { hiddenSearchBox } from './searchBoxToggle.js';

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

  let singleGeocoding = {};
  singleGeocoding.lat = eTarget.dataset.lat;
  singleGeocoding.lng = eTarget.dataset.lng;
  console.log(singleGeocoding);
  hiddenSearchBox();
});
