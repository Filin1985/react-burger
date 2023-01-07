import { TOrderActions } from '../action/burgerConstructor'
import { TConstructorInitialState, TIngredientWithKey } from './types'

import {
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
  CLEAN_ORDER,
} from '../constants/burgerConstructor'

export const initialState = {
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

export const constructorReducer = (
  state = initialState,
  action: TOrderActions
): TConstructorInitialState => {
  switch (action.type) {
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
      } else if (state.ingredientsBurger.bun) {
        return {
          ...state,
          ingredientsBurger: {
            ...state.ingredientsBurger,
            otherIngredients: [
              ...state.ingredientsBurger.otherIngredients,
              { ...action.item, key: action.key },
            ],
            orderSum: state.ingredientsBurger.orderSum + action.item.price,
          },
        }
      } else {
        return state
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
            (element: TIngredientWithKey) => element.key !== action.key
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
    case CLEAN_ORDER: {
      return {
        ...state,
        ingredientsBurger: {
          ...state.ingredientsBurger,
          bun: null,
          otherIngredients: [],
          orderSum: 0,
          prevBunPrice: 0,
        },
      }
    }
    default:
      return state
  }
}
