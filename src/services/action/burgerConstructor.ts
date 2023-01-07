import { request } from '../../utils/utils'
import { API_URL } from '../../utils/config'
import { ThunkAction } from 'redux-thunk'
import { Action, ActionCreator, Dispatch } from 'redux'
import { RootState } from '../../utils/utils'

import {
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  CLEAN_ORDER,
} from '../constants/burgerConstructor'

import { TOrderDetails, TOrder } from './types'

export interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_DETAILS_REQUEST
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS
  readonly order: number
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_DETAILS_FAILED
}

export interface ICleanOrder {
  readonly type: typeof CLEAN_ORDER
}

export type TOrderActions =
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderFailedAction
  | ICleanOrder

type TApplicationActions = TOrderActions
export type AppDispatch = Dispatch<TApplicationActions>

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>

export const getOrderAction = (): IGetOrderRequestAction => ({
  type: GET_ORDER_DETAILS_REQUEST,
})

export const getOrderSuccessAction = (
  order: number
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
      },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    })
      .then((res) => {
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
