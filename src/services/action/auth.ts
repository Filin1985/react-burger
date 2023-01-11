import { AppThunk, AppDispatch } from '../hooks'

import {
  getCookie,
  request,
  setCookie,
  deleteCookie,
  refreshToken,
  fetchWithRefresh,
} from '../../utils/utils'
import { API_URL } from '../../utils/config'
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  TOKEN_USER_REQUEST,
  TOKEN_USER_SUCCESS,
  TOKEN_USER_FAILED,
  AUTH_CHECKED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from '../constants/auth'
import {
  TUserData,
  TRegister,
  TUserRegisterResponse,
  TLogin,
  TLogoutResponse,
  TForgotPassword,
  TProfile,
} from './types'
import { History } from 'history'

export interface IRegisterRequestAction {
  readonly type: typeof REGISTER_USER_REQUEST
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_USER_SUCCESS
  readonly user: TProfile
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_USER_FAILED
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_USER_REQUEST
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_USER_SUCCESS
  readonly user: TUserData
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_USER_FAILED
}

export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_USER_REQUEST
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_USER_SUCCESS
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_USER_FAILED
}

export interface ITokenRequestAction {
  readonly type: typeof TOKEN_USER_REQUEST
}

export interface ITokenSuccessAction {
  readonly type: typeof TOKEN_USER_SUCCESS
}

export interface ITokenFailedAction {
  readonly type: typeof TOKEN_USER_FAILED
}

export interface IAuthRequestAction {
  readonly type: typeof AUTH_USER_REQUEST
}

export interface IAuthSuccessAction {
  readonly type: typeof AUTH_USER_SUCCESS
  readonly user: TUserData
}

export interface IAuthFailedAction {
  readonly type: typeof AUTH_USER_FAILED
}

export interface IUpdateRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST
}

export interface IUpdateSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS
  readonly user: TUserData
}

export interface IUpdateFailedAction {
  readonly type: typeof UPDATE_USER_FAILED
}

export interface IForgotRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST
}

export interface IForgotSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS
  readonly visitedPath: string
}

export interface IForgotFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED
}

export interface IResetRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST
}

export interface IResetSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS
}

export interface IResetFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED
}

export interface IAuthCheckedAction {
  readonly type: typeof AUTH_CHECKED
}

export type TUserActions =
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | ITokenRequestAction
  | ITokenSuccessAction
  | ITokenFailedAction
  | IAuthRequestAction
  | IAuthSuccessAction
  | IAuthFailedAction
  | IUpdateRequestAction
  | IUpdateSuccessAction
  | IUpdateFailedAction
  | IForgotRequestAction
  | IForgotSuccessAction
  | IForgotFailedAction
  | IResetRequestAction
  | IResetSuccessAction
  | IResetFailedAction
  | IAuthCheckedAction

export const registerAction = (): IRegisterRequestAction => ({
  type: REGISTER_USER_REQUEST,
})

export const registerSuccessAction = (
  user: TProfile
): IRegisterSuccessAction => ({
  type: REGISTER_USER_SUCCESS,
  user,
})

export const registerFailedAction = (): IRegisterFailedAction => ({
  type: REGISTER_USER_FAILED,
})

export const loginAction = (): ILoginRequestAction => ({
  type: LOGIN_USER_REQUEST,
})

export const loginSuccessAction = (user: TUserData): ILoginSuccessAction => ({
  type: LOGIN_USER_SUCCESS,
  user,
})

export const loginFailedAction = (): ILoginFailedAction => ({
  type: LOGIN_USER_FAILED,
})

export const logoutAction = (): ILogoutRequestAction => ({
  type: LOGOUT_USER_REQUEST,
})

export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_USER_SUCCESS,
})

export const logoutFailedAction = (): ILogoutFailedAction => ({
  type: LOGOUT_USER_FAILED,
})

export const updateTokenAction = (): ITokenRequestAction => ({
  type: TOKEN_USER_REQUEST,
})

export const updateTokenSuccessAction = (): ITokenSuccessAction => ({
  type: TOKEN_USER_SUCCESS,
})

export const updateTokenFailedAction = (): ITokenFailedAction => ({
  type: TOKEN_USER_FAILED,
})

export const authUserAction = (): IAuthRequestAction => ({
  type: AUTH_USER_REQUEST,
})

export const authUserSuccessAction = (user: TUserData): IAuthSuccessAction => ({
  type: AUTH_USER_SUCCESS,
  user,
})

export const authUserFailedAction = (): IAuthFailedAction => ({
  type: AUTH_USER_FAILED,
})

export const updateUserAction = (): IUpdateRequestAction => ({
  type: UPDATE_USER_REQUEST,
})

export const updateUserSuccessAction = (
  user: TUserData
): IUpdateSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  user,
})

export const updateUserFailedAction = (): IUpdateFailedAction => ({
  type: UPDATE_USER_FAILED,
})

export const forgotPasswordAction = (): IForgotRequestAction => ({
  type: FORGOT_PASSWORD_REQUEST,
})

export const forgotPasswordSuccessAction = (
  visitedPath: string
): IForgotSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
  visitedPath,
})

export const forgotPasswordFailedAction = (): IForgotFailedAction => ({
  type: FORGOT_PASSWORD_FAILED,
})

export const resetPasswordAction = (): IResetRequestAction => ({
  type: RESET_PASSWORD_REQUEST,
})

export const resetPasswordSuccessAction = (): IResetSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
})

export const resetPasswordFailedAction = (): IResetFailedAction => ({
  type: RESET_PASSWORD_FAILED,
})

export const authCheckedAction = (): IAuthCheckedAction => ({
  type: AUTH_CHECKED,
})

export const registerUser: AppThunk =
  ({ email, password, name }: TProfile, history) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: REGISTER_USER_REQUEST,
    })
    request<TUserRegisterResponse>(`${API_URL}/auth/register`, {
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
          const authToken = res.accessToken.split('Bearer ')[1]
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

export const loginUser: AppThunk =
  ({ email, password }: TLogin) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: LOGIN_USER_REQUEST,
    })
    request<TUserRegisterResponse>(`${API_URL}/auth/login`, {
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
          const authToken = res.accessToken.split('Bearer ')[1]
          const refreshToken = res.refreshToken
          setCookie('token', authToken)
          localStorage.setItem('refreshToken', refreshToken)
          dispatch({
            type: LOGIN_USER_SUCCESS,
            user: res.user,
          })
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

export const logoutUser: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: LOGOUT_USER_REQUEST,
  })
  request<TLogoutResponse>(`${API_URL}/auth/logout`, {
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

export const updateToken: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: TOKEN_USER_REQUEST,
  })
  refreshToken()
    .then((res) => {
      if (res && res.success) {
        const authToken = res.accessToken.split('Bearer ')[1]
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

export const authUser: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: AUTH_USER_REQUEST,
  })
  fetchWithRefresh<TUserRegisterResponse>(`${API_URL}/auth/user`, {
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

export const updateUser: AppThunk =
  ({ name, email, password }: TRegister) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: UPDATE_USER_REQUEST,
    })
    fetchWithRefresh<TUserRegisterResponse>(`${API_URL}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
        authorization: `Bearer ${getCookie('token')}`,
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

export const forgotPassword: AppThunk =
  (email: string, prevPath: string, history: History) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    })
    request<TForgotPassword>(`${API_URL}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          visitedPath: prevPath,
        })
        history.push('/reset-password')
      })
      .catch((error) => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        })
      })
  }

export const resetPassword: AppThunk =
  (password: string, token: string, history: History) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    })
    request(`${API_URL}/password-reset/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charger=utf-8',
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })
      .then((res) => {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
        })
        history.push('/login')
      })
      .catch((error) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        })
      })
  }

export const checkUserAuth: AppThunk = () => async (dispatch) => {
  if (getCookie('token')) {
    try {
      await dispatch(authUser())
    } catch (error) {
      console.log(error)
    }
  }
  await dispatch({ type: AUTH_CHECKED })
}
