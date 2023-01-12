import { TOrder, TOrdersResponse } from './types'

import {
  WS_CONNECTION_CLOSED_USER,
  WS_CONNECTION_ERROR_USER,
  WS_CONNECTION_START_USER,
  WS_CONNECTION_STOP_USER,
  WS_CONNECTION_SUCCESS_USER,
  WS_GET_ORDER_USER,
  WS_SEND_ORDER_USER,
} from '../constants/wsUser'

interface IWsConnectAction {
  readonly type: typeof WS_CONNECTION_START_USER
  readonly wsUrl: string
}

interface IWsDisconnectAction {
  readonly type: typeof WS_CONNECTION_STOP_USER
}

interface IWsSendOrderAction {
  readonly type: typeof WS_SEND_ORDER_USER
  readonly payload: TOrder
}

interface IOnOpenAction {
  readonly type: typeof WS_CONNECTION_SUCCESS_USER
}

interface IOnCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSED_USER
}

interface IOnErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR_USER
  readonly payload: Event
}

interface IWsGetOrderAction {
  readonly type: typeof WS_GET_ORDER_USER
  readonly payload: TOrdersResponse
}

export type TWsActionTypes =
  | IWsConnectAction
  | IWsDisconnectAction
  | IWsSendOrderAction
  | IOnOpenAction
  | IOnCloseAction
  | IOnErrorAction
  | IWsGetOrderAction

export const wsConnectionStartAction = (wsUrl: string): IWsConnectAction => {
  return {
    type: WS_CONNECTION_START_USER,
    wsUrl,
  }
}

export const wsDisconnectionAction = (): IWsDisconnectAction => {
  return {
    type: WS_CONNECTION_STOP_USER,
  }
}

export const wsConnectionSuccessAction = (): IOnOpenAction => {
  return {
    type: WS_CONNECTION_SUCCESS_USER,
  }
}

export const wsConnectionErrorAction = (error: Event): IOnErrorAction => {
  return {
    type: WS_CONNECTION_ERROR_USER,
    payload: error,
  }
}

export const wsConnectionClosedAction = (): IOnCloseAction => {
  return {
    type: WS_CONNECTION_CLOSED_USER,
  }
}

export const wsConnectionGetOrdersAction = (
  response: TOrdersResponse
): IWsGetOrderAction => {
  return {
    type: WS_GET_ORDER_USER,
    payload: response,
  }
}

export const wsConnectionSendOrderAction = (
  order: TOrder
): IWsSendOrderAction => {
  return {
    type: WS_SEND_ORDER_USER,
    payload: order,
  }
}
