import { IIngredient } from '../../../types'

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
  counts:
    | TCountsIngredients
    | {
        [_id: string]: number
      }
  orderSum: number
  prevBunPrice: number
}

export type TConstructorInitialState = {
  ingredientsBurger: TIngredientsBurger
  currentIngredient: IIngredient | null
  burgerOrder: TOrderNumber
  burgerOrderRequest: boolean
  burgerOrderFailed: boolean
}

export type TOrderNumber = {
  number: number
}

export type TIngredientsInitialState = {
  ingredients: Array<IIngredient>
  ingredientsRequest: boolean
  ingredientsFailed: boolean
}

export type TOrderItem = {
  createdAt: string
  ingredients: Array<string>
  name: string
  number: number
  status: string
  updatedAt: string
  _id: string
}

export type TOrders = TOrderItem[]

export type TWsInitialState = {
  wsConnected: boolean
  orders: Array<TOrderItem>
  total: number
  totalToday: number
  loading: boolean
  error?: Event
}

export type TModalInitialState = {
  isOpen: boolean
}
