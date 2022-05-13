import {call, put} from 'redux-saga/effects';
// import {navigation, Toast_Types} from '../Constants';
// import {ROUTE} from '../Navigation/RouteNames';
import SearchActions from '../Redux/SearchRedux';

export function* loginRequest(api, action) {
  try {
    const {payload, onSuccess} = action;
    api.setAuthToken('');
    const response = yield call(api.loginRequest, payload);
    const {data} = response;

    if (data?.success) {
      api.setAuthToken(`Bearer ${data?.body?.access_token}`);
      yield put(SearchActions.loginSuccess(data?.body?.user));
      // onSuccess ? onSuccess() : null;
    } else {
      alert(data?.error);
      yield put(SearchActions.loginFailure(''));
    }
  } catch (err) {
    alert(err);

    yield put(SearchActions.loginFailure(''));
  }
}
export function* postsRequest(api, action) {
  try {
    const response = yield call(api.postsRequest);
    const {data} = response;

    if (data?.success) {
      yield put(SearchActions.postsSuccess(data?.body));
    } else {
      alert(data?.error);
      yield put(SearchActions.postsFailure(''));
    }
  } catch (err) {
    alert(err);

    yield put(SearchActions.postsFailure(''));
  }
}
export function* gigsRequest(api, action) {
  try {
    const response = yield call(api.gigsRequest);
    const {data} = response;

    if (data?.success) {
      yield put(SearchActions.gigsSuccess(data?.body));
    } else {
      alert(data?.error);
      yield put(SearchActions.gigsFailure(''));
    }
  } catch (err) {
    alert(err);

    yield put(SearchActions.gigsFailure(''));
  }
}
export function* setTokenRequest(api, action) {
  const {payload} = action;
  api.setAuthToken(payload.token);
}
