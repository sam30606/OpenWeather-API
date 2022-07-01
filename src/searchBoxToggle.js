import getElement from './getElement.js';

const searchItem = getElement('.search-item');

const searchBox = getElement('.search-box');
const searchBoxCSS = searchBox.classList;

const inputWrapper = getElement('.inputWrapper');
const inputWrapperCSS = inputWrapper.classList;

export const hiddenSearchBox = () => {
  searchBoxCSS.add('hiddenBox');
  inputWrapperCSS.add('radius90');
  searchItem.innerHTML = '';
};
export const showSearchBox = () => {
  searchBoxCSS.remove('hiddenBox');
  inputWrapperCSS.remove('radius90');
};
