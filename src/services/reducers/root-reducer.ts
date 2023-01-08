import { ingredientsReducer } from './ingredients'
import { constructorReducer } from './burgerConstructor'
import { modalReducer } from './modal'
import { authReducer } from './auth'
import { combineReducers } from 'redux'
import { wsReducer } from './wsReducer'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  modal: modalReducer,
  burgerConstructor: constructorReducer,
  user: authReducer,
  wsFeed: wsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
