import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {filter} from 'ramda';
import {startsWith} from 'ramdasauce';

const LIST_DATA = [
  'sausage',
  'blubber',
  'pencil',
  'cloud',
  'moon',
  'water',
  'computer',
  'school',
  'network',
  'hammer',
  'walking',
  'violently',
  'mediocre',
  'literature',
  'chair',
  'two',
  'window',
  'cords',
  'musical',
  'zebra',
  'xylophone',
  'penguin',
  'home',
  'dog',
  'final',
  'ink',
  'teacher',
  'fun',
  'website',
  'banana',
  'uncle',
  'softly',
  'mega',
  'ten',
  'awesome',
  'attatch',
  'blue',
  'internet',
  'bottle',
  'tight',
  'zone',
  'tomato',
  'prison',
  'hydro',
  'cleaning',
  'telivision',
  'send',
  'frog',
  'cup',
  'book',
  'zooming',
  'falling',
  'evily',
  'gamer',
  'lid',
  'juice',
  'moniter',
  'captain',
  'bonding',
  'loudly',
  'thudding',
  'guitar',
  'shaving',
  'hair',
  'soccer',
  'water',
  'racket',
  'table',
  'late',
  'media',
  'desktop',
  'flipper',
  'club',
  'flying',
  'smooth',
  'monster',
  'purple',
  'guardian',
  'bold',
  'hyperlink',
  'presentation',
  'world',
  'national',
  'comment',
  'element',
  'magic',
  'lion',
  'sand',
  'crust',
  'toast',
  'jam',
  'hunter',
  'forest',
  'foraging',
  'silently',
  'tawesomated',
  'joshing',
  'pong',
  'RANDOM',
  'WORD',
];

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginRequest: ['payload', 'onSuccess'],
  loginSuccess: ['data'],
  loginFailure: null,
  postsRequest: ['payload'],
  postsSuccess: ['data'],
  postsFailure: null,
  gigsRequest: ['payload'],
  gigsSuccess: ['data'],
  gigsFailure: null,
  search: ['searchTerm'],
  cancelSearch: null,
});

export const SearchTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  searchTerm: '',
  searching: false,
  results: LIST_DATA,
  login: {
    data: null,
    user: null,
    error: null,
    payload: null,
    loading: false,
  },
  posts: {
    data: null,
    error: null,
    payload: null,
    loading: false,
  },
  gigs: {
    data: null,
    error: null,
    payload: null,
    loading: false,
  },
});

/* ------------- Reducers ------------- */

export const performSearch = (state, {searchTerm}) => {
  const results = filter(startsWith(searchTerm), LIST_DATA);
  return state.merge({searching: true, searchTerm, results});
};

export const cancelSearch = (state) => INITIAL_STATE;

export const loginRequest = (state, {payload}) => {
  return state.merge({
    login: {
      ...state.login,
      loading: true,
      payload: payload,
    },
  });
};

export const loginSuccess = (state, {data}) => {
  return state.merge({
    login: {
      ...state.login,
      loading: false,
      data: data,
      user: data,
      error: null,
    },
  });
};

export const loginFailure = (state, {data}) => {
  return state.merge({
    login: {
      ...state.login,
      loading: false,
      payload: null,
      error: true,
    },
  });
};
export const postsRequest = (state, {payload}) => {
  console.log(payload);
  return state.merge({
    posts: {
      ...state.posts,
      loading: true,
      payload: payload,
    },
  });
};

export const postsSuccess = (state, {data}) => {
  return state.merge({
    posts: {
      ...state.posts,
      loading: false,
      data: data,
      error: null,
    },
  });
};

export const postsFailure = (state, {data}) => {
  return state.merge({
    posts: {
      ...state.posts,
      loading: false,
      payload: null,
      error: true,
    },
  });
};
export const gigsRequest = (state, {payload}) => {
  console.log(payload);
  return state.merge({
    gigs: {
      ...state.gigs,
      loading: true,
      payload: payload,
    },
  });
};

export const gigsSuccess = (state, {data}) => {
  return state.merge({
    gigs: {
      ...state.gigs,
      loading: false,
      data: data,
      error: null,
    },
  });
};

export const gigsFailure = (state, {data}) => {
  return state.merge({
    gigs: {
      ...state.gigs,
      loading: false,
      payload: null,
      error: true,
    },
  });
};
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.POSTS_REQUEST]: postsRequest,
  [Types.POSTS_SUCCESS]: postsSuccess,
  [Types.POSTS_FAILURE]: postsFailure,
  [Types.GIGS_REQUEST]: gigsRequest,
  [Types.GIGS_SUCCESS]: gigsSuccess,
  [Types.GIGS_FAILURE]: gigsFailure,
  [Types.SEARCH]: performSearch,
  [Types.CANCEL_SEARCH]: cancelSearch,
});
