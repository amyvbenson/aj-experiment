import categoriesList from './categoriesList.js';
import ajShared from './shared.js';

const indexPage = () => {
  // const pageContent = document.querySelector('#pageContent');
  // if (pageContent) {
  //   storePageData(pageContent.outerHTML)
  // }
  console.log('indexPage')
  return `
  ${ajShared.indexContent()}
    <h1>index page raaa</h1>
    ${categoriesList()}
    <a href="./tool.html" data-js-page="tool">Tool</a>
  `
}

export default indexPage;