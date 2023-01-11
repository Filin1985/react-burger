import type { Middleware, ActionCreator } from 'redux'
import { RootState } from '../reducers/root-reducer'

import { getCookie } from '../../utils/utils'

type TWSOrderActions = {
  wsConnect: string
  onOpen: string
  onClose: string
  onError: string
  onOrders: string
  onSendOrders: string
  wsDisconnect: string
}

export const socketMiddleware = (
  wsAction: TWSOrderActions,
  userAuth: boolean
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
      const token = userAuth ? getCookie('token') : null

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

        if (type === wsDisconnect) {
          socket.close()
        }

        if (type === onSendOrders) {
          const result = token ? { ...payload, token } : { ...payload }
          socket.send(JSON.stringify(result))
        }
      }
      next(action)
    }
  }
}
