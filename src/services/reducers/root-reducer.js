import { ingredientsReducer } from './ingredients.js'
import { constructorReducer } from './burgerConstructor.js'
import { modalReducer } from './modal.js'
import { authReducer } from './auth.js'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  modal: modalReducer,
  burgerConstructor: constructorReducer,
  user: authReducer,
})
