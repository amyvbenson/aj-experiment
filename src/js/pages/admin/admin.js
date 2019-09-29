import { logIn, logOut } from '../../authService';
import adminPage from './adminPage';

const pageElement = document.querySelector('#jsPage');

const registerLogInButton = () => {
  const loginButton = document.querySelector('#loginButton');
  const form = document.querySelector('#loginForm');

  if (loginButton) {
    loginButton.addEventListener('click', (event) => {
      event.preventDefault();
      const formData = new FormData(form)
      
      logIn(formData).then(() => {
        console.log('THEN');
        pageElement.innerHTML = adminPage(); // brute force update after login, prob want to change.
      });
    })
  }
}

const registerLogOutButton = () => {
  const logOutButton = document.querySelector('#logOutButton');
  if (logOutButton) {
    return logOutButton.addEventListener('click', (event) => {
      event.preventDefault();
      logOut().then(() => {
        console.log('log out THEN');
        pageElement.innerHTML = adminPage(); // brute force update after logout, prob want to change.
      });
    })
  }
}

const registerAdminPageElements = () => {
  registerLogInButton();
  registerLogOutButton();
}

export { registerAdminPageElements }