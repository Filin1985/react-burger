import { ingredientsReducer } from './ingredients.js'
import { constructorReducer } from './burgerConstructor.js'
import { modalReducer } from './modal.js'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  modal: modalReducer,
  burgerConstructor: constructorReducer,
})
