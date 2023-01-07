import { IIngredient } from '../../../types'
import { TOrder } from '../../action/types'

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

export type TIngredientWithKey = IIngredient & { key: string }
export type TCountsIngredients = {
  [_id: string]: number
}

export type TIngredientsBurger = {
  bun: IIngredient | null
  otherIngredients: Array<TIngredientWithKey>
  counts: TCountsIngredients | {}
  orderSum: number
  prevBunPrice: number
}

export type TConstructorInitialState = {
  ingredientsBurger: TIngredientsBurger
  currentIngredient: IIngredient | null
  burgerOrder: Array<TOrder> | number
  burgerOrderRequest: boolean
  burgerOrderFailed: boolean
}
