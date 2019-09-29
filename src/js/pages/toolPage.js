import servicesList from '../components/servicesList';

const toolPage = () => {
  return `
    <div>
      <h1>tool page</h1>
      ${servicesList()}
      <p><a href="./index.html">Back</a></p>
    </div>
  `
}

export default toolPage;