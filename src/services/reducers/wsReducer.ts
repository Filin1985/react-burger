import { TWsActionTypes } from '../action/wsActions'
import { TWsInitialState } from './types'
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER,
} from '../constants/ws'

export const initialState: TWsInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  loading: false,
}

export const wsReducer = (
  state = initialState,
  action: TWsActionTypes
): TWsInitialState => {
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
        wsConnected: true,
      }
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
        loading: false,
      }
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
        loading: false,
      }
    }
    case WS_GET_ORDER: {
      return {
        ...state,
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
