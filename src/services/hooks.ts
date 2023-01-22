import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from 'react-redux'
import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../utils/utils'
import { TIngredientsActions } from './action/ingredients'
import { TUserActions } from './action/auth'
import { TOrderActions } from './action/burgerConstructor'
import { TWsActionTypes } from './action/wsActions'
import { TModalActions } from './action/modal'
import type { AppDispatch } from './store'
import type {} from 'redux-thunk/extend-redux'

type TUnionActions =
  | TIngredientsActions
  | TUserActions
  | TOrderActions
  | TWsActionTypes
  | TModalActions

type AppActions = TUnionActions

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, unknown, AppActions>
>
// export type AppDispatch<TReturnType = void> = (
//   action: AppActions | AppThunk<TReturnType>
// ) => TReturnType
type DispatchFunc = () => AppDispatch

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
// export const useDispatch: () => AppDispatch = dispatchHook
export const useDispatch: DispatchFunc = dispatchHook
