import { LOGIN_SUCCESS, LOGIN_ERROR, SET_AUTHSTATE } from "../types";
import Cookies from 'js-cookie'
import { commonAxios } from "../../api/axios";

export const setAuthState = (token) => async (dispatch) => {
  try {
    if (token) {
      const response = await commonAxios.get(`/auth/check`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.data.success) {
        dispatch({
          type: SET_AUTHSTATE,
          payload: {
            authState: response.data.success,
            user: response.data.user
          },
        });
      }
    } else {
      dispatch({
        type: SET_AUTHSTATE,
        payload: {
          authState: false,
          user: null
        },
      });
    }
  } catch (err) {
    if (!!err.response) {
      if (!err.response.data.success) {
        if (err.response.status === 401) {
          Cookies.remove('token')
          window.location.href = '/'
          dispatch({
            type: SET_AUTHSTATE,
            payload: {
              authState: false,
              user: null
            },
          });
        }
      } else {
        console.log(err)
      }
    } else {
      console.log(err)
    }
  }
}

export const loginAction = (responseData) => async (dispatch) => {
  Cookies.set('token', responseData.user.token)
  console.log('login token......', Cookies.get('token'))
  if (responseData.success) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        authState: true,
        user: responseData.user
      },
    })
  } else {
    dispatch({
      type: LOGIN_ERROR,
      payload: {
        authState: false,
        user: null
      },
    })
  }
}