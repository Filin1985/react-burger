import type { Middleware, ActionCreator } from 'redux'
import { RootState } from '../reducers/root-reducer'
import {
  WS_CONNECTION_START,
  WS_CONNECTION_STOP,
  WS_SEND_ORDER,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER,
} from '../action/wsActions'

type TWSOrderActions = {
  wsConnect: typeof WS_CONNECTION_START
  onOpen: typeof WS_CONNECTION_SUCCESS
  onClose: typeof WS_CONNECTION_CLOSED
  onError: typeof WS_CONNECTION_ERROR
  onOrders: typeof WS_GET_ORDER
  onSendOrders: typeof WS_SEND_ORDER
  wsDisconnect: typeof WS_CONNECTION_STOP
}

export const socketMiddleware = (
  wsAction: TWSOrderActions
): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null

    return (next) => (action) => {
      const { dispatch } = store
      const { type, payload, wsUrl } = action
      const {
        wsConnect,
        onSendOrders,
        wsDisconnect,
        onOpen,
        onClose,
        onError,
        onOrders,
      } = wsAction

      if (type === wsConnect) {
        socket = new WebSocket(wsUrl)
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen })
        }

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event })
        }

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data)
          if (data.success) {
            dispatch({ type: onOrders, payload: data })
          } else {
            socket!.close()
          }
        }

        socket.onclose = () => {
          dispatch({ type: onClose })
        }

        if (type === onClose) {
          socket.close()
        }

        if (type === onSendOrders) {
          socket.send(JSON.stringify(payload))
        }
      }
      next(action)
    }
  }
}
