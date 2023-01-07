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

type TUnionActions =
  | TIngredientsActions
  | TUserActions
  | TOrderActions
  | TWsActionTypes
  | TModalActions

type TApplicationActions = TUnionActions
export type AppDispatch = Dispatch<TApplicationActions>

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>()
