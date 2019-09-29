import { authStatus } from '../../authService';

const logInForm = `
  <form id="loginForm">
  <label for="username">User name</label>
  <input type="text" name="username" id="username" />
  <br>
  <label for="password">Password</label>
  <input type="text" name="password" id="password" />
  <br>
  <button type="submit" id="loginButton">Log in</button>
  </form>
`;

const logOutButton = `
  <button type="button" id="logOutButton">Log out</button>
`;

const adminPage = () => {
  return `
  <div id="adminStuff">
    ${authStatus.isAuthenticated ? logOutButton : logInForm}
  </div>
  <p><a href="./index.html">home</a></p>  
`
}

export default adminPage;