import * as actionTypes from "../types";

const initialState = {
  userData: [],
  error: null,
  loading: false,
  hasAccess: false,
  posts: [],
  userinfo: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false,
        hasAccess: true,
      };
    case actionTypes.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case actionTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_USER_REQUEST_SUCCESS:
      return {
        ...state,
        userinfo: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_USER_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case actionTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_POST_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case actionTypes.FETCH_POST_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default homeReducer;
