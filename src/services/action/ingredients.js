import { request } from '../../utils/utils'
import { API_URL } from '../../utils/config'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED'

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
