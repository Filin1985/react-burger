import { v4 as uuid } from 'uuid'
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
  INCREASE_INGREDIENT_ITEM,
  DECREASE_INGREDIENT_ITEM,
  UPDATE_LIST,
} from '../action/ingredient.js'

export const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientsBurger: {
    bun: null,
    otherIngredients: [],
    counts: {},
    orderSum: 0,
    prevBunPrice: 0,
  },
  currentIngredient: null,
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
            orderSum:
              state.ingredientsBurger.orderSum +
              action.item.price * 2 -
              state.ingredientsBurger.prevBunPrice * 2,
            prevBunPrice: action.item.price,
          },
        }
      }
      return {
        ...state,
        ingredientsBurger: {
          ...state.ingredientsBurger,
          otherIngredients: [
            ...state.ingredientsBurger.otherIngredients,
            { ...action.item, key: uuid() },
          ],
          orderSum: state.ingredientsBurger.orderSum + action.item.price,
        },
      }
    }
    case SET_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.item,
      }
    }
    case INCREASE_INGREDIENT_ITEM: {
      if (action.item.type !== 'bun') {
        return {
          ...state,
          ingredientsBurger: {
            ...state.ingredientsBurger,
            counts: {
              ...state.ingredientsBurger.counts,
              [action._id]:
                (state.ingredientsBurger.counts[action._id] || 0) + 1,
            },
          },
        }
      }
      return {
        ...state,
        ingredientsBurger: {
          ...state.ingredientsBurger,
          counts: {
            [action._id]: 1 || 0,
          },
        },
      }
    }
    case DECREASE_INGREDIENT_ITEM: {
      return {
        ...state,
        ingredientsBurger: {
          ...state.ingredientsBurger,
          counts: {
            ...state.ingredientsBurger.counts,
            [action._id]: state.ingredientsBurger.counts[action._id] - 1,
          },
        },
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
          otherIngredients: state.ingredientsBurger.otherIngredients.filter(
            (element) => element.key !== action.key
          ),
          orderSum: state.ingredientsBurger.orderSum - action.item.price,
        },
      }
    }
    case UPDATE_LIST: {
      const newOtherIngredients = [...state.ingredientsBurger.otherIngredients]
      newOtherIngredients.splice(
        action.toIndex,
        0,
        newOtherIngredients.splice(action.fromIndex, 1)[0]
      )
      return {
        ...state,
        ingredientsBurger: {
          ...state.ingredientsBurger,
          otherIngredients: newOtherIngredients,
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
