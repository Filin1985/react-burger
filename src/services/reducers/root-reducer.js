import { ingredientsReducer } from './ingredient.js'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
})
