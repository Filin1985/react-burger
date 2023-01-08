import { TOrder, TOrdersResponse } from './types'

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START'
export const WS_CONNECTION_STOP: 'WS_CONNECTION_STOP' = 'WS_CONNECTION_STOP'
export const WS_SEND_ORDER: 'WS_SEND_ORDER' = 'WS_SEND_ORDER'
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' =
  'WS_CONNECTION_SUCCESS'
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR'
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' =
  'WS_CONNECTION_CLOSED'
export const WS_GET_ORDER: 'WS_GET_ORDER' = 'WS_GET_ORDER'

interface IWsConnectAction {
  readonly type: typeof WS_CONNECTION_START
  readonly wsUrl: string
}

interface IWsDisconnectAction {
  readonly type: typeof WS_CONNECTION_STOP
}

interface IWsSendOrderAction {
  readonly type: typeof WS_SEND_ORDER
  readonly payload: TOrder
}

interface IOnOpenAction {
  readonly type: typeof WS_CONNECTION_SUCCESS
}

interface IOnCloseAction {
  readonly type: typeof WS_CONNECTION_CLOSED
}

interface IOnErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR
  readonly payload: Event
}

interface IWsGetOrderAction {
  readonly type: typeof WS_GET_ORDER
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
    type: WS_CONNECTION_START,
    wsUrl,
  }
}

export const wsDisconnectionAction = (): IWsDisconnectAction => {
  return {
    type: WS_CONNECTION_STOP,
  }
}

export const wsConnectionSuccessAction = (): IOnOpenAction => {
  return {
    type: WS_CONNECTION_SUCCESS,
  }
}

export const wsConnectionErrorAction = (error: Event): IOnErrorAction => {
  return {
    type: WS_CONNECTION_ERROR,
    payload: error,
  }
}

export const wsConnectionClosedAction = (): IOnCloseAction => {
  return {
    type: WS_CONNECTION_CLOSED,
  }
}

export const wsConnectionGetOrdersAction = (
  response: TOrdersResponse
): IWsGetOrderAction => {
  return {
    type: WS_GET_ORDER,
    payload: response,
  }
}

export const wsConnectionSendOrderAction = (
  order: TOrder
): IWsSendOrderAction => {
  return {
    type: WS_SEND_ORDER,
    payload: order,
  }
}
