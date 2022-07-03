import getElement from './getElement.js';

const searchItems = getElement('.search-items');

const searchBox = getElement('.search-box');
const searchBoxCSS = searchBox.classList;

const searchForm = getElement('.search-form');
const searchFormCSS = searchForm.classList;

export const hiddenSearchBox = () => {
  searchBoxCSS.add('hiddenBox');
  searchFormCSS.add('noBox');
  searchItems.innerHTML = '';
};
export const showSearchBox = () => {
  searchBoxCSS.remove('hiddenBox');
  searchFormCSS.remove('noBox');
};
