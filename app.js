import presentSerchBox from './src/presentSerchBox.js';
import './src/searchForm.js';

const googleAPIKEY = 'AIzaSyCBq0e5XOQjj4gkPMXjezKcR4-xYmtbkv0';
const defaultURL = `https://maps.googleapis.com/maps/api/geocode/json?address=臺北市&language=zh-TW&key=${googleAPIKEY}`;

window.addEventListener('DOMContentLoaded', () => {
  presentSerchBox(defaultURL);
});
