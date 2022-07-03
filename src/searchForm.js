import getElement from './getElement.js';
import presentSerchBox from './presentSerchBox.js';

const form = getElement('.search-form');

const searchIcon = getElement('.fa-search');
const input = getElement('[name="Location"]');

const googleAPIKEY = 'AIzaSyCBq0e5XOQjj4gkPMXjezKcR4-xYmtbkv0';

const sentURL = () => {
  const value = input.value;
  const baseURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&language=zh-TW&key=${googleAPIKEY}`;
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
