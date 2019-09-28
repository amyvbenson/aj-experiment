import indexPage from './js/indexPage.js';
import toolPage from './js/toolPage.js';

const pageElement = document.querySelector('#jsPage');

const handleLinks = () => {
  // to do, make only for internal links
  const linkElements = document.querySelectorAll('a');

  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].onclick = (event) => {
      event.preventDefault();
      const linkTarget = linkElements[i].dataset.jsPage;
      renderPage(linkTarget, true);
    }
  }
}

const renderPage = (page, updateUrl) => {
  // consosle.log('khkjhk')
  if (page === 'tool') {
    pageElement.innerHTML = toolPage();
    if (updateUrl) {
      history.pushState({}, 'tool', 'tool.html')
      document.title = 'tool';
    }
    handleLinks();
    return;
  }

  //default page
  pageElement.innerHTML = indexPage();

  // insert elements shared with html page
  // const header = window.ajShared.header();
  // pageElement.insertAdjacentHTML('afterbegin', header);

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

  //default
  renderPage();
};

handlePageLoad();
handleBackButton();
