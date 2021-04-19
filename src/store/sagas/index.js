import { takeEvery, put } from "redux-saga/effects";
import * as actionTypes from "../types";
import * as actions from "../actions";
import { services } from "../../services/services";

const user = {
  name: "Rıfat Can Gurbuz",
  email: "rcg@gmail.com",
  password: "123456",
};

export function* loginRequestSaga({ payload }) {
  try {
    if (user.email === payload.email && user.password === payload.password) {
      yield put(actions.loginRequestSuccess(user));
    } else {
      yield put(actions.loginRequestFail("Please check your information"));
    }
  } catch (error) {
    yield put(actions.loginRequestFail(error));
  }
}

export function* fetchUserRequestSaga(action) {
  try {
    const response = yield services.getUserRequestService();
    yield put(actions.fetchUserRequestSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchUserRequestFail(error));
  }
}

export function* fetchPostRequestSaga(action) {
  try {
    const response = yield services.getPostRequestService();
    yield put(actions.fetchPostRequestSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchPostRequestFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequestSaga);
  yield takeEvery(actionTypes.FETCH_USER_REQUEST, fetchUserRequestSaga);
  yield takeEvery(actionTypes.FETCH_POST_REQUEST, fetchPostRequestSaga);
}
