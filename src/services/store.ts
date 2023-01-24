import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/root-reducer'
import { socketMiddleware } from './middleware/socket-middleware'
import {
  WS_CONNECTION_START,
  WS_CONNECTION_STOP,
  WS_SEND_ORDER,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER,
} from './constants/ws'

import {
  WS_CONNECTION_START_USER,
  WS_CONNECTION_STOP_USER,
  WS_SEND_ORDER_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_CLOSED_USER,
  WS_GET_ORDER_USER,
} from './constants/wsUser'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const wsActions = {
  wsConnect: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onOrders: WS_GET_ORDER,
  onSendOrders: WS_SEND_ORDER,
  wsDisconnect: WS_CONNECTION_STOP,
}

export const wsUserActions = {
  wsConnect: WS_CONNECTION_START_USER,
  onOpen: WS_CONNECTION_SUCCESS_USER,
  onClose: WS_CONNECTION_CLOSED_USER,
  onError: WS_CONNECTION_ERROR_USER,
  onOrders: WS_GET_ORDER_USER,
  onSendOrders: WS_SEND_ORDER_USER,
  wsDisconnect: WS_CONNECTION_STOP_USER,
}

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(wsActions, false),
    socketMiddleware(wsUserActions, true)
  )
)

export const store = createStore(rootReducer, enhancer)
export type AppDispatch = typeof store.dispatch
