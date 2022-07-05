import getElement from './getElement.js';
import presentSerchBox from './presentSerchBox.js';
import { setGeocodingURL } from './setAPIURL.js';

const form = getElement('.search-form');

const searchIcon = getElement('.fa-magnifying-glass');
const input = getElement('[name="Location"]');

const sentURL = () => {
  const value = input.value;
  const baseURL = setGeocodingURL(value);
  if (value) {
    presentSerchBox(`${baseURL}`);
  }
};

form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sentURL();
  }
});

searchIcon.addEventListener('click', sentURL);
