import { authReducer } from './auth'
import { initialState } from './auth'
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

describe('auth reducer', () => {
  test('should return the initial state', () => {
    expect(authReducer(undefined, {} as any)).toEqual(initialState)
  })

  it('should handle AUTH_CHECKED', () => {
    const state = {
      ...initialState,
      authChecked: false,
    }

    const action = { type: AUTH_CHECKED }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      authChecked: true,
    })
  })

  it('should handle REGISTER_USER_REQUEST', () => {
    const state = {
      ...initialState,
      registerRequest: false,
      registerFailed: false,
    }

    const action = { type: REGISTER_USER_REQUEST }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      registerRequest: true,
      registerFailed: false,
    })
  })

  it('should handle REGISTER_USER_SUCCESS', () => {
    const state = {
      ...initialState,
      name: '',
      email: '',
      registerRequest: false,
      registerFailed: false,
    }

    const action = {
      type: REGISTER_USER_SUCCESS,
      success: true,
      user: {
        name: 'Marat',
        email: 'examaple@mail.com',
        password: '123',
      },
      accessToken: 'string',
      refreshToken: 'string',
    }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      name: 'Marat',
      email: 'examaple@mail.com',
      registerRequest: false,
      registerFailed: false,
    })
  })

  it('should handle REGISTER_USER_FAILED', () => {
    const state = {
      ...initialState,
      registerRequest: false,
      registerFailed: false,
    }
    const action = {
      type: REGISTER_USER_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      registerRequest: false,
      registerFailed: true,
    })
  })

  it('should handle LOGIN_USER_REQUEST', () => {
    const state = {
      ...initialState,
      loginRequest: false,
      loginFailed: false,
    }
    const action = {
      type: LOGIN_USER_REQUEST,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      loginRequest: true,
      loginFailed: false,
    })
  })

  it('should handle LOGIN_USER_SUCCESS', () => {
    const state = {
      ...initialState,
      name: '',
      email: '',
      loginRequest: false,
      loginFailed: false,
    }

    const action = {
      type: LOGIN_USER_SUCCESS,
      success: true,
      user: {
        name: 'Marat',
        email: 'examaple@mail.com',
        password: '123',
      },
      accessToken: 'string',
      refreshToken: 'string',
    }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      name: 'Marat',
      email: 'examaple@mail.com',
      loginRequest: false,
      loginFailed: false,
    })
  })

  it('should handle LOGIN_USER_FAILED', () => {
    const state = {
      ...initialState,
      loginRequest: false,
      loginFailed: false,
    }
    const action = {
      type: LOGIN_USER_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      loginRequest: false,
      loginFailed: true,
    })
  })

  it('should handle LOGOUT_USER_REQUEST', () => {
    const state = {
      ...initialState,
      logoutRequest: false,
      logoutFailed: false,
    }
    const action = {
      type: LOGOUT_USER_REQUEST,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      logoutRequest: true,
      logoutFailed: false,
    })
  })

  it('should handle LOGOUT_USER_SUCCESS', () => {
    const state = {
      ...initialState,
      name: '',
      email: '',
      loginRequest: false,
      loginFailed: false,
    }

    const action = {
      type: LOGOUT_USER_SUCCESS,
      success: true,
      user: {
        name: 'Marat',
        email: 'examaple@mail.com',
        password: '123',
      },
      accessToken: 'string',
      refreshToken: 'string',
    }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      name: '',
      email: '',
      loginRequest: false,
      loginFailed: false,
    })
  })

  it('should handle LOGOUT_USER_FAILED', () => {
    const state = {
      ...initialState,
      logoutRequest: false,
      logoutFailed: false,
    }
    const action = {
      type: LOGOUT_USER_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      logoutRequest: false,
      logoutFailed: true,
    })
  })

  it('should handle TOKEN_USER_REQUEST', () => {
    const state = {
      ...initialState,
      tokenRequest: false,
      tokenFailed: false,
    }
    const action = {
      type: TOKEN_USER_REQUEST,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      tokenRequest: true,
      tokenFailed: false,
    })
  })

  it('should handle TOKEN_USER_SUCCESS', () => {
    const state = {
      ...initialState,
      tokenRequest: false,
      tokenFailed: false,
    }
    const action = {
      type: TOKEN_USER_SUCCESS,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      tokenRequest: false,
      tokenFailed: false,
    })
  })

  it('should handle TOKEN_USER_FAILED', () => {
    const state = {
      ...initialState,
      tokenRequest: false,
      tokenFailed: false,
    }
    const action = {
      type: TOKEN_USER_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      tokenRequest: false,
      tokenFailed: true,
    })
  })

  it('should handle AUTH_USER_REQUEST', () => {
    const state = {
      ...initialState,
      loginRequest: false,
      loginFailed: false,
    }
    const action = {
      type: AUTH_USER_REQUEST,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      loginRequest: true,
      loginFailed: false,
    })
  })

  it('should handle AUTH_USER_SUCCESS', () => {
    const state = {
      ...initialState,
      name: '',
      email: '',
      loginRequest: false,
      loginFailed: false,
    }

    const action = {
      type: AUTH_USER_SUCCESS,
      success: true,
      user: {
        name: 'Marat',
        email: 'examaple@mail.com',
        password: '123',
      },
      accessToken: 'string',
      refreshToken: 'string',
    }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      name: 'Marat',
      email: 'examaple@mail.com',
      loginRequest: false,
      loginFailed: false,
    })
  })

  it('should handle AUTH_USER_FAILED', () => {
    const state = {
      ...initialState,
      loginRequest: false,
      loginFailed: false,
    }
    const action = {
      type: AUTH_USER_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      loginRequest: false,
      loginFailed: true,
    })
  })

  it('should handle UPDATE_USER_REQUEST', () => {
    const state = {
      ...initialState,
      registerRequest: false,
      registerFailed: false,
    }

    const action = { type: UPDATE_USER_REQUEST }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      registerRequest: true,
      registerFailed: false,
    })
  })

  it('should handle UPDATE_USER_SUCCESS', () => {
    const state = {
      ...initialState,
      name: '',
      email: '',
      registerRequest: false,
      registerFailed: false,
    }

    const action = {
      type: UPDATE_USER_SUCCESS,
      success: true,
      user: {
        name: 'Marat',
        email: 'examaple@mail.com',
        password: '123',
      },
      accessToken: 'string',
      refreshToken: 'string',
    }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      name: 'Marat',
      email: 'examaple@mail.com',
      registerRequest: false,
      registerFailed: false,
    })
  })

  it('should handle UPDATE_USER_FAILED', () => {
    const state = {
      ...initialState,
      registerRequest: false,
      registerFailed: false,
    }
    const action = {
      type: UPDATE_USER_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      registerRequest: false,
      registerFailed: true,
    })
  })

  it('should handle FORGOT_PASSWORD_REQUEST', () => {
    const state = {
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: false,
    }

    const action = { type: FORGOT_PASSWORD_REQUEST }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordFailed: false,
    })
  })

  it('should handle FORGOT_PASSWORD_SUCCESS', () => {
    const state = {
      ...initialState,
      registerRequest: false,
      registerFailed: false,
      visitedPath: '',
    }

    const action = {
      type: FORGOT_PASSWORD_SUCCESS,
      visitedPath: 'https://my-path',
    }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      visitedPath: 'https://my-path',
      registerRequest: false,
      registerFailed: false,
    })
  })

  it('should handle FORGOT_PASSWORD_FAILED', () => {
    const state = {
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: false,
    }
    const action = {
      type: FORGOT_PASSWORD_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
    })
  })

  it('should handle RESET_PASSWORD_REQUEST', () => {
    const state = {
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: false,
      visitedPath: 'https://my-path',
    }

    const action = { type: RESET_PASSWORD_REQUEST }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      visitedPath: '',
      resetPasswordRequest: true,
      resetPasswordFailed: false,
    })
  })

  it('should handle RESET_PASSWORD_SUCCESS', () => {
    const state = {
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: false,
    }

    const action = {
      type: RESET_PASSWORD_SUCCESS,
    }
    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: false,
    })
  })

  it('should handle RESET_PASSWORD_FAILED', () => {
    const state = {
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: false,
    }
    const action = {
      type: RESET_PASSWORD_FAILED,
    }

    const result = authReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: true,
    })
  })
})
