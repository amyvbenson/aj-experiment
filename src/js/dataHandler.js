import 'whatwg-fetch'

const store = {
  categories: [],
  pageData: ''
};

const getCategories = () => {
  const categories = 'https://asylum-journey-staging.herokuapp.com/categories';

  return fetch(categories).then((resp) => resp.json()) 
    .then(function(data) {
      store.categories = data._embedded.categories;
    }).catch(error => {
      console.log('error', error)
    });
}

const storePageData = (data) => {
  store.pageData = data
}

export { store, getCategories, storePageData }