import { request } from '../../utils/utils.js'
import { API_URL } from '../../utils/config.js'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'

export const CHOOSE_INGREDIENTS = 'CHOOSE_INGREDIENTS'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST'
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS'
export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED'
export const CLEAN_ORDER = 'CLEAN_ORDER'

export const SET_CURRENT_INGREDIENT = 'SET_CURRENT_INGREDIENT'
export const UNSET_CURRENT_INGREDIENT = 'UNSET_CURRENT_INGREDIENT'

export const INCREASE_INGREDIENT_ITEM = 'INCREASE_INGREDIENT_ITEM'
export const DECREASE_INGREDIENT_ITEM = 'DECREASE_INGREDIENT_ITEM'

export const UPDATE_LIST = 'UPDATE_LIST'

export function getOrderDetails(ingredients) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_DETAILS_REQUEST,
    })
    request(`${API_URL}/orders`, {
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
}
