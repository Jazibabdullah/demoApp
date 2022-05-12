// a library to wrap and simplify api calls
import apisauce from 'apisauce';

// our "constructor"
const create = (baseURL = 'https://www.admin.edugigs.org/api') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    // headers: {
    //   'Cache-Control': 'no-cache',
    // },
    // 10 second timeout...
    timeout: 1000000,
  });
  const setAuthToken = (token) => {
    if (token) {
      api.setHeader('Authorization', token);
    }
  };

  const loginRequest = (payload) => {
    console.log(payload);
    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));
    console.log(JSON.stringify(formData, null, 8));

    return api.post('/login', formData);
  };

  const postsRequest = () => {
    return api.get('/all_gigs_system');
  };
  const gigsRequest = () => {
    return api.get('/all_posts');
  };
  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRoot = () => api.get('');
  const getRate = () => api.get('rate_limit');
  const getUser = (username) => api.get('search/users', {q: username});

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getRate,
    getUser,
    setAuthToken,
    loginRequest,
    postsRequest,
    gigsRequest
  };
};

// let's return back our create method as the default.
export default {
  create,
};
