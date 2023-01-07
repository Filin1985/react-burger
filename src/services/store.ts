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
} from './action/wsActions'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const wsUrl = 'wss://norma.nomoreparties.space/orders/all'

export const wsActions = {
  wsConnect: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onOrders: WS_GET_ORDER,
  onSendOrders: WS_SEND_ORDER,
  wsDisconnect: WS_CONNECTION_STOP,
}

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsActions))
)

export const store = createStore(rootReducer, enhancer)
