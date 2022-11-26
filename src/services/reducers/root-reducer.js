import { ingredientsReducer } from './ingredient.js'
import { modalReducer } from './modal.js'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  modal: modalReducer,
})
