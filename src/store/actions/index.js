import * as actionTypes from "../types";

export const loginRequest = (data) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload: data,
  };
};
export const loginRequestSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_REQUEST_SUCCESS,
    payload: data,
  };
};
export const loginRequestFail = (error) => {
  return {
    type: actionTypes.LOGIN_REQUEST_FAIL,
    payload: error,
  };
};

export const fetchPostRequest = () => {
  return {
    type: actionTypes.FETCH_POST_REQUEST,
  };
};
export const fetchPostRequestSuccess = (data) => {
  return {
    type: actionTypes.FETCH_POST_REQUEST_SUCCESS,
    payload: data,
  };
};
export const fetchPostRequestFail = (error) => {
  return {
    type: actionTypes.FETCH_POST_REQUEST_FAIL,
    payload: error,
  };
};

export const fetchUserRequest = () => {
  return {
    type: actionTypes.FETCH_USER_REQUEST,
  };
};
export const fetchUserRequestSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USER_REQUEST_SUCCESS,
    payload: data,
  };
};
export const fetchUserRequestFail = (error) => {
  return {
    type: actionTypes.FETCH_USER_REQUEST_FAIL,
    payload: error,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};
