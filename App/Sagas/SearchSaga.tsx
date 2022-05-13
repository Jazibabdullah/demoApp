import {call, put} from 'redux-saga/effects';
// import {navigation, Toast_Types} from '../Constants';
// import {ROUTE} from '../Navigation/RouteNames';
import SearchActions from '../Redux/SearchRedux';

export function* loginRequest(api, action) {
  try {
    const {payload,onSuccess} = action;
    console.log(payload);
    const response = yield call(api.loginRequest, payload);
    console.log(JSON.stringify(response, null, 8));
    const {data} = response;

    if (data?.isSuccess) {
      yield put(SearchActions.loginSuccess(data));
      
    } else {
      //   if (count > 3) {
      //     navigation.navigate(ROUTE.FORGOTPASSWORDSCREEN);
      //     yield put(AuthActions.loginFailure());
      //   } else {
      //     yield put(AuthActions.loginFailure(true));
      //     showForgotpassword?.();
      //     catchError(
      //       'The login credentials you’ve entered are incorrect',
      //       Toast_Types.error
      //     );
      //   }
    }
  } catch (err) {
    alert(err);

    yield put(SearchActions.loginFailure(''));
  }
}
export function* postsRequest(api, action) {
  try {
    api.setAuthToken('Bearer 194|BHOmvGpU8zXcvq9L6ENwuCK3pwOCaOV49WnSLlI1');

    const response = yield call(api.postsRequest);
    console.log(JSON.stringify(response, null, 8));
    const {data} = response;

    if (data?.success) {
      yield put(SearchActions.postsSuccess(data?.body));
    } else {
      yield put(SearchActions.postsFailure(''));
    }
  } catch (err) {
    alert(err);

    yield put(SearchActions.postsFailure(''));
  }
}
export function* gigsRequest(api, action) {
  try {
    api.setAuthToken('Bearer 194|BHOmvGpU8zXcvq9L6ENwuCK3pwOCaOV49WnSLlI1');

    const response = yield call(api.gigsRequest);
    console.log(JSON.stringify(response, null, 8));
    const {data} = response;

    if (data?.success) {
      yield put(SearchActions.gigsSuccess(data?.body));
    } else {
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
  //   setAuthorizationToken(payload.token, payload.user);
}
