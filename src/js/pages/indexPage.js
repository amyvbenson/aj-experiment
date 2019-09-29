import categoriesList from '../components/categoriesList.js';
import ajShared from '../shared.js';

const indexPage = () => {
  return `
  ${ajShared.indexContent()}
    <h1>index page</h1>
    ${categoriesList()}
    <a href="./tool.html" data-js-page="tool">Tool</a><br>
    <a href="./admin.html" data-js-page="admin">Admin</a>
  `
}

export default indexPage;