import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
// });

const api = axios.create({
  baseURL: 'http://ec2-35-180-140-63.eu-west-3.compute.amazonaws.com'
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// AUTH ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOGIN ///////////////////////////////////////////////////////////////
async function userLogin(email, password) {
  // set parameters for login request + inclued email and password
  let user = {
    grant_type: 'password',
    client_secret: 'oauth2csecret',
    client_id: 'oauth2cid',
    email,
    password
  };

  try {
    let response = (await api.post('/auth/login/', user)).data; // call login endpoint with user info
    localStorage.setItem('user', JSON.stringify(response)); // store locally and load user on app
    return { success: true };
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
}

// GET USER INFO //////////////////////////////////////////////////////
async function getUserInfo() {
  try {
    let response = (await api.get('/api/v1/users/me/')).data; // call user info
    return response;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
}

// LOG OUT ////////////////////////////////////////////////////////////
function logOut(vm) {
  delete axios.defaults.headers.common['Authorization']; // Clear headers from axios
  localStorage.removeItem('user'); // Remove data from local storage
  vm.$store.commit('clearUser'); // Remove from Vuex Store
  vm.$router.push('login'); // push to login page
}

// LOAD USER //////////////////////////////////////////////////////////
async function loadUser(vm) {
  const user = JSON.parse(localStorage.user || 'null'); // retrieve token in local storage
  if (user) {
    // if data found in local storage, load user to store
    axios.defaults.headers.common.Authorization = 'Bearer ' + user.access_token; // Add token to axios headers
    let userInfo = await getUserInfo(); // call user info
    // TO DO // IF ERROR, CALL LOGOUT AND PUSH
    userInfo.acess_token = user.access_token; // add access token to user info
    vm.$store.commit('loadUser', { user: userInfo }); // load user to store
    // TEAMS //
    let teams = await getUserTeams(vm.$store.state.user.id); // fetch user TEAMS
    vm.$store.commit('loadTeams', { teams: teams }); // load user TEAMS to store
    // load tasks // TO DO
    // load tickets // TO DO
    // load notifications // TO DO
    return { success: true };
  } else {
    vm.$store.commit('clearUser'); // otherwise clear any user data from store
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// TEAM ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET USER INFO //////////////////////////////////////////////////////
async function getUserTeams(userId) {
  try {
    let response = (await api.get('/api/v1/user/' + userId + '/teams/')).data; // call user info
    return response;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// EXPORT  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default {
  // AUTH ////////////////
  userLogin,
  getUserInfo,
  loadUser,
  logOut,
  // TEAMS ////////////////
  getUserTeams
};
