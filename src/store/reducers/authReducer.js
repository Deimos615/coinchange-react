import { LOGIN_SUCCESS, LOGIN_ERROR, SET_AUTHSTATE } from "../types";

const initialState = {
  authState: false,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authState: action.payload.authState,
        user: action.payload.user,
        loading: false,
      };

    case LOGIN_ERROR:
      return {
        loading: false,
        authState: action.payload.authState,
      };
    case SET_AUTHSTATE:
      return {
        loading: false,
        authState: action.payload.authState,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;