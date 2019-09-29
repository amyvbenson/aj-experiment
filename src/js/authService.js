import 'whatwg-fetch'

const authStatus = {
  isAuthenticated: false
}

const checkAuthentication = () => {
  // need to handle expiry and refreshing token here
  const token = localStorage.getItem('ajToken');
  if (token) {
    console.log('is authed')
    authStatus.isAuthenticated = true;
    return;
  }
  authStatus.isAuthenticated = false;
}

const removeToken = () => {
  localStorage.removeItem('ajToken');
  localStorage.removeItem('ajRefreshToken');
}

const storeToken = (data) => {
  localStorage.setItem('ajToken', data.token);
  localStorage.setItem('ajRefreshToken', data.refresh_token);
}

const logIn = (formData) => {
  return fetch('https://asylum-journey-staging.herokuapp.com/api/login_check', {
    method: 'post',
    body: formData
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('data', data)
    storeToken(data);
    authStatus.isAuthenticated = true;
  });
}


const logOut = () => {
  return new Promise((resolve) => {
    console.log('logout promise')
    removeToken();
    authStatus.isAuthenticated = false;
    return resolve();
  })
  
}

export { authStatus, checkAuthentication, logIn, logOut };
