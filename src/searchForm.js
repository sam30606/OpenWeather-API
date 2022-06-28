import fetchData from './fetchData.js';
import getElement from './getElement.js';
import setLocations from './setLocations.js';
import presentData from './presentData.js';

const form = getElement('.search-form');

const input = getElement('[name="Location"]');

// console.log(form, input);

form.addEventListener('keypress', async (e) => {
  // //   console.log('input', input.value);
  // e.preventDefault();
  // if (e.key === 'Enter') {
  //   const value = input.value;
  //   const baseURL = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=9d6dfc926f81e26a8339901dbb287995`;
  //   if (value) {
  //     await presentData(`${baseURL}`);
  //   }
  // }
  if (e.key === 'Enter') {
    console.log(e);
    const value = input.value;
    const baseURL = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=9d6dfc926f81e26a8339901dbb287995`;
    if (value) {
      await presentData(`${baseURL}`);
    }
  }
});
