import { request } from '../../utils/utils'
import { API_URL } from '../../utils/config'
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../constants/ingredients'
import { ThunkAction } from 'redux-thunk'
import { Action, ActionCreator, Dispatch } from 'redux'
import { RootState } from '../../utils/utils'
import { IIngredient } from '../../types'

export interface IGetIngredientsAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS
  readonly ingredients: IIngredient[]
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED
}

export type TIngredientsActions =
  | IGetIngredientsAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction

type TApplicationActions = TIngredientsActions
export type AppDispatch = Dispatch<TApplicationActions>

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>

export const getIngredientsAction = (): IGetIngredientsAction => ({
  type: GET_INGREDIENTS_REQUEST,
})

export const getIngredientsSuccessAction = (
  ingredients: IIngredient[]
): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  ingredients,
})

export const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
  type: GET_INGREDIENTS_FAILED,
})

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  })
  request<IIngredient>(`${API_URL}/ingredients`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: GET_INGREDIENTS_FAILED,
      })
    })
}
