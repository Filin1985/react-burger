import { v4 as uuidv4 } from 'uuid'

import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  CHOOSE_INGREDIENTS,
  REMOVE_INGREDIENT,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED,
  SET_CURRENT_INGREDIENT,
  UNSET_CURRENT_INGREDIENT,
} from '../action/ingredient.js'

export const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientsBurger: {
    bun: null,
    otherIngredients: [],
  },
  currentIngredient: {},
  burgerOrder: [],
  burgerOrderRequest: false,
  burgerOrderFailed: false,
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      }
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: false,
        ingredients: action.ingredients,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
      }
    }
    case CHOOSE_INGREDIENTS: {
      if (action.item.type === 'bun') {
        return {
          ...state,
          ingredientsBurger: {
            ...state.ingredientsBurger,
            bun: action.item,
          },
        }
      }
      return {
        ...state,
        ingredientsBurger: {
          ...state.ingredientsBurger,
          otherIngredients: [
            ...state.ingredientsBurger.otherIngredients,
            { ...action.item, _id: uuidv4() },
          ],
        },
      }
    }
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.item,
      }
    }
    case UNSET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: null,
      }
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredientsBurger: {
          ...state.ingredientsBurger,
          otherIngredients: [
            ...state.ingredientsBurger.otherIngredients,
          ].filter((element) => element._id !== action.id),
        },
      }
    }
    case GET_ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        burgerOrderRequest: true,
        burgerOrderFailed: false,
      }
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        burgerOrderRequest: false,
        burgerOrderFailed: false,
        burgerOrder: action.order,
      }
    }
    case GET_ORDER_DETAILS_FAILED: {
      return {
        ...state,
        burgerOrderRequest: false,
        burgerOrderFailed: true,
      }
    }
    default:
      return state
  }
}
