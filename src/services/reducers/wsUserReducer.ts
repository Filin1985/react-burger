import { TWsActionTypes } from '../action/wsUserActions'
import { TWsInitialState } from './types'
import {
  WS_CONNECTION_START_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_CLOSED_USER,
  WS_GET_ORDER_USER,
  WS_SEND_ORDER_USER,
} from '../constants/wsUser'

export const initialState: TWsInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  loading: false,
}

export const wsUserReducer = (
  state = initialState,
  action: TWsActionTypes
): TWsInitialState => {
  switch (action.type) {
    case WS_CONNECTION_START_USER: {
      return {
        ...state,
        loading: true,
      }
    }
    case WS_CONNECTION_SUCCESS_USER: {
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      }
    }
    case WS_CONNECTION_ERROR_USER: {
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
        loading: false,
      }
    }
    case WS_CONNECTION_CLOSED_USER: {
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        loading: false,
      }
    }
    case WS_GET_ORDER_USER: {
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
