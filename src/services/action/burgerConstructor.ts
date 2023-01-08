import { getCookie, request } from '../../utils/utils'
import { API_URL } from '../../utils/config'
import { AppThunk, AppDispatch } from '../hooks'
import { IIngredient } from '../../types'

import {
  CHOOSE_INGREDIENTS,
  REMOVE_INGREDIENT,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  SET_CURRENT_INGREDIENT,
  SET_CURRENT_ORDER,
  UNSET_CURRENT_INGREDIENT,
  INCREASE_INGREDIENT_ITEM,
  DECREASE_INGREDIENT_ITEM,
  UPDATE_LIST,
  CLEAN_ORDER,
} from '../constants/burgerConstructor'

import { TOrderDetails } from './types'
import { TOrderNumber, TOrderItem } from '../reducers/types'
import { TOrder } from '../../components/feed/feed-item/feed-item'

export interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_DETAILS_REQUEST
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS
  readonly order: TOrderNumber
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_DETAILS_FAILED
}

export interface ICleanOrder {
  readonly type: typeof CLEAN_ORDER
}

export interface IChooseIngredientsAction {
  readonly type: typeof CHOOSE_INGREDIENTS
  readonly item: IIngredient
  readonly key: string
}

export interface IRemoveIngredientAction {
  readonly type: typeof REMOVE_INGREDIENT
  readonly item: IIngredient
  readonly key: string
}

export interface ISetIngredientsAction {
  readonly type: typeof SET_CURRENT_INGREDIENT
  readonly item: IIngredient
}

export interface ISetOrderAction {
  readonly type: typeof SET_CURRENT_ORDER
  readonly item: TOrderItem
}

export interface IUnsetIngredientAction {
  readonly type: typeof UNSET_CURRENT_INGREDIENT
}

export interface IIncreaseIngredientAction {
  readonly type: typeof INCREASE_INGREDIENT_ITEM
  readonly _id: string
  readonly item: IIngredient
}

export interface IDecreaseIngredientAction {
  readonly type: typeof DECREASE_INGREDIENT_ITEM
  readonly _id: string
  readonly ingredient: IIngredient
}

export interface IUpdateListAction {
  readonly type: typeof UPDATE_LIST
  readonly toIndex: number
  readonly fromIndex: number
}

export type TOrderActions =
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderFailedAction
  | ICleanOrder
  | IChooseIngredientsAction
  | IRemoveIngredientAction
  | ISetIngredientsAction
  | IUnsetIngredientAction
  | IIncreaseIngredientAction
  | IDecreaseIngredientAction
  | IUpdateListAction
  | ISetOrderAction

export const getOrderAction = (): IGetOrderRequestAction => ({
  type: GET_ORDER_DETAILS_REQUEST,
})

export const getOrderSuccessAction = (
  order: TOrderNumber
): IGetOrderSuccessAction => ({
  type: GET_ORDER_DETAILS_SUCCESS,
  order,
})

export const getOrderFailedAction = (): IGetOrderFailedAction => ({
  type: GET_ORDER_DETAILS_FAILED,
})

export const getOrderDetails: AppThunk =
  (ingredients) => (dispatch: AppDispatch) => {
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    })
    request<TOrderDetails>(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token'),
      },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    })
      .then((res) => {
        console.log(res)
        dispatch({
          type: GET_ORDER_DETAILS_SUCCESS,
          order: res.order,
        })
      })
      .then((res) => {
        dispatch({
          type: CLEAN_ORDER,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_DETAILS_FAILED,
        })
      })
  }
