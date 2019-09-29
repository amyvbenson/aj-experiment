import indexPage from './js/pages/indexPage.js';
import toolPage from './js/pages/toolPage.js';
import adminPage from './js/pages/admin/adminPage.js';
import { registerAdminPageElements } from './js/pages/admin/admin';
import { checkAuthentication } from './js/authService';

const pageElement = document.querySelector('#jsPage');

const handleLinks = () => {
  // to do, make only for internal links
  const linkElements = document.querySelectorAll('a');

  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].onclick = (event) => {
      event.preventDefault();
      const linkTarget = linkElements[i].getAttribute('data-js-page');
      renderPage(linkTarget, true);
    }
  }
}


const renderPage = (page, updateUrl) => {
  checkAuthentication();
  if (page === 'tool') {
    pageElement.innerHTML = toolPage();
    if (updateUrl) {
      history.pushState({}, 'tool', 'tool.html')
      document.title = 'tool';
    }
    handleLinks();
    return;
  }
  if (page === 'admin') {
    pageElement.innerHTML = adminPage();
    if (updateUrl) {
      history.pushState({}, 'admin', 'admin.html')
      document.title = 'admin';
    }
    handleLinks();
    registerAdminPageElements();
    return;
  }


  //default page
  pageElement.innerHTML = indexPage();
  history.pushState({}, 'home', 'index.html')
  document.title = 'home';

  handleLinks();
}


const handleBackButton = () => {
  window.addEventListener('popstate', (event) => {
    // just render the default page for now
    // TO DO handle other pages
    renderPage();
  });
}

const handlePageLoad = () => {
  const path = window.location.pathname;
  // to do just strip the .html and slash
  // will need to handle query strings
  if (path === '/tool.html') {
    renderPage('tool');
    return;
  }
  if (path === '/admin.html') {
    renderPage('admin');
    return;
  }

  //default
  renderPage();
};

handlePageLoad();
handleBackButton();
