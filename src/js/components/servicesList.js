import { store, getServices } from '../dataHandler.js';

const renderServices = (services) => {
  return `
    <h2>Services</h2>
    <ul>
      ${services.map(service => 
        `<li>${service.name}</li>`
      ).join('')}
    </ul>
  `;
}

const servicesList = () => {
  if(!store.services.length) {
    getServices().then(() => {
      document.querySelector('#servicesList').innerHTML = renderServices(store.services);
    });

    return `<div id="servicesList">Loading...</div>`
  }

  return renderServices(store.services);
}

export default servicesList;