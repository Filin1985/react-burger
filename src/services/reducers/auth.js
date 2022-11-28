import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
} from '../action/auth.js'

const initialState = {
  name: '',
  email: '',
  password: '',
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  logoutRequest: false,
  logoutFailed: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      }
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
        name: action.user.name,
        email: action.user.email,
        password: action.user.password,
      }
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      }
    }
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      }
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        loginRequest: false,
        loginFailed: false,
      }
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      }
    }
    case LOGOUT_USER_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      }
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        name: '',
        email: '',
        password: '',
        logoutRequest: false,
        logoutFailed: false,
      }
    }
    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      }
    }
    default:
      return state
  }
}
