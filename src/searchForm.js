import getElement from './getElement.js';
import presentData from './presentData.js';
import { hiddenSearchBox, showSearchBox } from './searchBoxToggle.js';
const form = getElement('.search-form');
const searchBox = getElement('.search-box');
const searchIcon = getElement('.fa-search');
const input = getElement('[name="Location"]');

const googleAPIKEY = 'AIzaSyCBq0e5XOQjj4gkPMXjezKcR4-xYmtbkv0';

const sentURL = async () => {
  const value = input.value;
  const baseURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${value}&language=zh-TW&key=${googleAPIKEY}`;
  if (value) {
    await presentData(`${baseURL}`);
  }
};

form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log(e);
    showSearchBox();
    sentURL();
  }
});

searchIcon.addEventListener('click', sentURL);
searchBox.addEventListener('click', hiddenSearchBox);
