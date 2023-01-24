import { TAuthInitialState } from './types'
import { TUserActions } from '../action/auth'

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
  TOKEN_USER_REQUEST,
  TOKEN_USER_SUCCESS,
  TOKEN_USER_FAILED,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  AUTH_CHECKED,
} from '../constants/auth'

export const initialState: TAuthInitialState = {
  name: '',
  email: '',
  password: '',
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  tokenRequest: false,
  tokenFailed: false,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  visitedPath: '',
  authChecked: false,
}

export const authReducer = (
  state = initialState,
  action: TUserActions
): TAuthInitialState => {
  switch (action.type) {
    case AUTH_CHECKED: {
      return {
        ...state,
        authChecked: true,
      }
    }
    case UPDATE_USER_REQUEST:
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      }
    }
    case UPDATE_USER_SUCCESS:
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
        name: action.user.name,
        email: action.user.email,
      }
    }
    case UPDATE_USER_FAILED:
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      }
    }
    case AUTH_USER_REQUEST:
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      }
    }
    case AUTH_USER_SUCCESS:
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        loginRequest: false,
        loginFailed: false,
      }
    }
    case AUTH_USER_FAILED:
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
    case TOKEN_USER_REQUEST: {
      return {
        ...state,
        tokenRequest: true,
        tokenFailed: false,
      }
    }
    case TOKEN_USER_SUCCESS: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: false,
      }
    }
    case TOKEN_USER_FAILED: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: true,
      }
    }
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        visitedPath: action.visitedPath,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false,
      }
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      }
    }

    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        visitedPath: '',
        resetPasswordRequest: true,
        resetPasswordFailed: false,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      }
    }
    default:
      return state
  }
}
