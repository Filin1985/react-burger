import {
  getCookie,
  request,
  setCookie,
  deleteCookie,
  refreshToken,
  fetchWithRefresh,
} from '../../utils/utils.js'
import { API_URL } from '../../utils/config.js'

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED'

export const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST'
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS'
export const AUTH_USER_FAILED = 'AUTH_USER_FAILED'

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED'

export const TOKEN_USER_REQUEST = 'TOKEN_USER_REQUEST'
export const TOKEN_USER_SUCCESS = 'TOKEN_USER_SUCCESS'
export const TOKEN_USER_FAILED = 'TOKEN_USER_FAILED'

export function registerUser({ email, password, name }, history) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_USER_REQUEST,
    })
    request(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((res) => {
        if (res && res.success) {
          console.log(res)
          const authToken = res.accessToken.split('Bearer')[1]
          const refreshToken = res.refreshToken
          setCookie('token', authToken)
          localStorage.setItem('refreshToken', refreshToken)
          dispatch({
            type: REGISTER_USER_SUCCESS,
            user: res.user,
          })
          history.push('/')
        } else {
          console.log('Error')
          dispatch({
            type: REGISTER_USER_FAILED,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_USER_FAILED,
        })
        console.log(error)
      })
  }
}

export function loginUser({ email, password }, history) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_USER_REQUEST,
    })
    request(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res && res.success) {
          console.log(res)
          const authToken = res.accessToken.split('Bearer')[1]
          const refreshToken = res.refreshToken
          setCookie('token', authToken)
          localStorage.setItem('refreshToken', refreshToken)
          dispatch({
            type: LOGIN_USER_SUCCESS,
            user: res.user,
          })
          history.push('/')
        } else {
          dispatch({
            type: LOGIN_USER_FAILED,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_USER_FAILED,
        })
      })
  }
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_USER_REQUEST,
    })
    request(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken'),
      }),
    })
      .then((res) => {
        if (res && res.success) {
          deleteCookie('token')
          localStorage.removeItem('refreshToken')
          dispatch({
            type: LOGOUT_USER_SUCCESS,
          })
        } else {
          dispatch({
            type: LOGOUT_USER_FAILED,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: LOGOUT_USER_FAILED,
        })
      })
  }
}

export function updateToken() {
  return function (dispatch) {
    dispatch({
      type: TOKEN_USER_REQUEST,
    })
    refreshToken()
      .then((res) => {
        if (res && res.success) {
          const authToken = res.accessToken.split('Bearer')[1]
          const refreshToken = res.refreshToken
          setCookie('token', authToken)
          localStorage.setItem('refreshToken', refreshToken)
          dispatch({
            type: TOKEN_USER_SUCCESS,
          })
        } else {
          dispatch({
            type: TOKEN_USER_FAILED,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: TOKEN_USER_FAILED,
        })
      })
  }
}

export function authUser() {
  return function (dispatch) {
    dispatch({
      type: AUTH_USER_REQUEST,
    })
    fetchWithRefresh(`${API_URL}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
        Authorization: 'Bearer ' + getCookie('token'),
      },
    })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: AUTH_USER_SUCCESS,
            user: res.user,
          })
        } else {
          dispatch({
            type: AUTH_USER_FAILED,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: AUTH_USER_FAILED,
        })
      })
  }
}

export function updateUser({ name, email, password }) {
  console.log(name)
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    })
    fetchWithRefresh(`${API_URL}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
        Authorization: 'Bearer ' + getCookie('token'),
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: res.user,
          })
          console.log('Информация обновлена')
        } else {
          dispatch({
            type: UPDATE_USER_FAILED,
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_FAILED,
        })
      })
  }
}
