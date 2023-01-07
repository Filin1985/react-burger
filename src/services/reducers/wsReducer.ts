import { TWsActionTypes } from '../action/wsActions'
import { TWsInitialState } from './types'
import {
  WS_CONNECTION_START,
  WS_CONNECTION_STOP,
  WS_SEND_ORDER,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER,
} from '../action/wsActions'

export const initialState: TWsInitialState = {
  wsConnected: false,
  orders: [],
  userOrders: [],
  total: 0,
  totalToday: 0,
  loading: false,
}

export const wsReducer = (state = initialState, action: TWsActionTypes) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      }
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
        loading: false,
      }
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        loading: false,
      }
    }
    case WS_GET_ORDER: {
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders ? action.payload.orders : state.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}
