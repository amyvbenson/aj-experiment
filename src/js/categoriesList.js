import { store, getCategories } from './dataHandler.js';

const renderCategories = (categories) => {
  return `
    <h2>Categories</h2>
    <ul>
      ${categories.map(category => 
        `<li>${category.name}</li>`
      ).join('')}
    </ul>
  `;
}

const categoriesList = () => {
  if(!store.categories.length) {
    getCategories().then(() => {
      document.querySelector('#categoriesList').innerHTML = renderCategories(store.categories);
    });

    return `<div id="categoriesList">Loading...</div>`
  }

  return renderCategories(store.categories);
}

export default categoriesList;