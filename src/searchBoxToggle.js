import getElement from './getElement.js';

const searchItems = getElement('.search-items');

const searchBox = getElement('.search-box');
const searchBoxCSS = searchBox.classList;

const inputWrapper = getElement('.inputWrapper');
const inputWrapperCSS = inputWrapper.classList;

export const hiddenSearchBox = () => {
  searchBoxCSS.add('hiddenBox');
  inputWrapperCSS.add('radius90');
  searchItems.innerHTML = '';
};
export const showSearchBox = () => {
  searchBoxCSS.remove('hiddenBox');
  inputWrapperCSS.remove('radius90');
};
