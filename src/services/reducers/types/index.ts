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

export type TOrder = {
  _id: string
  ingredients: string[]
  status: string
  name: string
  createdAt: string
  updatedAt: string
  number: number
}

export type TOrders = TOrder[]

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
  burgerOrder: Array<TOrder> | number
  burgerOrderRequest: boolean
  burgerOrderFailed: boolean
}

export type TIngredientsInitialState = {
  ingredients: Array<IIngredient>
  ingredientsRequest: boolean
  ingredientsFailed: boolean
}

export type TWsInitialState = {
  wsConnected: boolean
  orders: TOrders
  userOrders: TOrders
  total: number
  totalToday: number
  loading: boolean
  error?: Event
}

export type TModalInitialState = {
  isOpen: boolean
}
