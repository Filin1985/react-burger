export type TProfile = {
  name: string
  email: string
  password: string
}

export type TRegister = Pick<TProfile, 'name' | 'email' | 'password'>
export type TLogin = Pick<TProfile, 'email' | 'password'>
export type TForgotPassword = Pick<TProfile, 'email'>
export type TResetPassword = Pick<TProfile, 'password'> & {
  token: string
}

export type TUserData = Pick<TProfile, 'name' | 'email'>

export type TUserRegisterResponse = {
  success: boolean
  user: TProfile
  accessToken: string
  refreshToken: string
}

export type TLogoutResponse = {
  success: boolean
  message: string
}

export type TOrderDetails = {
  name: string
  order: TOrderNumber
  success: boolean
}

export type TOrderNumber = {
  number: number
}

export type TOrder = {
  createdAt: string
  ingredients: Array<string>
  name: string
  number: number
  status: string
  updatedAt: string
  _id: string
}

export type TOrdersResponse = {
  success: boolean
  orders: TOrder[]
  total: number
  totalToday: number
}
