import getElement from './getElement.js';

const searchItem = getElement('.search-item');

const getItemData = (Items) => {
  console.log(Items);
};

searchItem.addEventListener('click', (e) => {
  console.log(e);
});
