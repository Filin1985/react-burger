import { request } from '../../utils/utils.js'
import { API_URL } from '../../utils/config.js'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'

export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST'
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS'
export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED'

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    })
    request(`${API_URL}/ingredients`)
      .then((res) => {
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
}

export function getOrderDetails(ingredientsIds) {
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
        ingredients: ingredientsIds,
      }),
    })
      .then((res) => {
        dispatch({
          type: GET_ORDER_DETAILS_SUCCESS,
          order: res,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_DETAILS_FAILED,
        })
      })
  }
}
