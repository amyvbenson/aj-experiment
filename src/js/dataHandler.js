import 'whatwg-fetch'

const store = {
  categories: [],
  services: []
};


// request.headers.Authorization = 'Bearer ' + token;

const getCategories = () => {
  const categories = 'https://asylum-journey-staging.herokuapp.com/categories';

  // add token if exists.
  // need to handle refresh and retry if get a 401.
  const token = localStorage.getItem('ajToken');
  const request = {
    method: 'GET'
  }
  if (token) {
    request.headers = {
      'Authorization': 'Bearer ' + token
    }
  }

  console.log('token', token)
  return fetch(categories, request).then((resp) => resp.json()) 
    .then(function(data) {
      store.categories = data._embedded.categories;
    }).catch(error => {
      console.log('error', error)
    });

}

const getServices = () => {
  const services = 'https://asylum-journey-staging.herokuapp.com/services';
  // add token if exists.
  // need to handle refresh and retry if get a 401.
  const token = localStorage.getItem('ajToken');
  const request = {
    method: 'GET'
  }
  if (token) {
    request.headers = {
      'Authorization': 'Bearer ' + token
    }
  }

  return fetch(services, request).then((resp) => resp.json()) 
    .then(function(data) {
      store.services = data._embedded.services;
    }).catch(error => {
      console.log('error', error)
    });
}

export { store, getCategories, getServices }