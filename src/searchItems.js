import getElement from './getElement.js';

const searchList = getElement('.search-item');

const getListData = (items) => {
  console.log(items);
};

searchList.addEventListener('click', (e) => {
  console.log(e.target.dataset.lat);
});
