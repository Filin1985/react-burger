export type TAuthInitialState = {
  name: string
  email: string
  password: string
  registerRequest: boolean
  registerFailed: boolean
  loginRequest: boolean
  loginFailed: boolean
  logoutRequest: boolean
  logoutFailed: boolean
  tokenRequest: boolean
  tokenFailed: boolean
  forgotPasswordRequest: boolean
  forgotPasswordFailed: boolean
  resetPasswordRequest: boolean
  resetPasswordFailed: boolean
  visitedPath: string
  authChecked: boolean
}
