import { wsReducer, initialState } from './wsReducer'
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER,
} from '../constants/ws'

describe('ws reducer', () => {
  test('should return the initial state', () => {
    expect(wsReducer(undefined, {} as any)).toEqual(initialState)
  })
  it('should handle WS_CONNECTION_START', () => {
    const state = {
      ...initialState,
      loading: false,
    }
    const action = { type: WS_CONNECTION_START, wsUrl: 'string' }
    const result = wsReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      loading: true,
    })
  })

  it('should handle WS_CONNECTION_SUCCESS', () => {
    const state = {
      ...initialState,
    }
    const action = { type: WS_CONNECTION_SUCCESS }
    const result = wsReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: true,
    })
  })

  it('should handle WS_CONNECTION_ERROR', () => {
    const state = {
      ...initialState,
      wsConnected: true,
    }
    const action = { type: WS_CONNECTION_ERROR, payload: 'error' as any }
    const result = wsReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: false,
      loading: false,
    })
  })

  it('should handle WS_CONNECTION_CLOSED', () => {
    const state = {
      ...initialState,
      wsConnected: true,
    }
    const action = { type: WS_CONNECTION_CLOSED }
    const result = wsReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: false,
      loading: false,
    })
  })

  it('should handle WS_GET_ORDER', () => {
    const state = {
      ...initialState,
      wsConnected: true,
    }
    const action = {
      type: WS_GET_ORDER,
      payload: {
        success: true,
        orders: [
          {
            createdAt: '10102023',
            ingredients: [
              '60666c42cc7b410027a1a9b5',
              '60666c42cc7b410027a1a9b1',
            ],
            name: 'string',
            number: 1,
            status: 'string',
            updatedAt: 'string',
            _id: 'string',
          },
        ],
        total: 1000,
        totalToday: 2000,
      },
    }
    const result = wsReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      wsConnected: true,
      total: 1000,
      totalToday: 2000,
      orders: [
        {
          createdAt: '10102023',
          ingredients: ['60666c42cc7b410027a1a9b5', '60666c42cc7b410027a1a9b1'],
          name: 'string',
          number: 1,
          status: 'string',
          updatedAt: 'string',
          _id: 'string',
        },
      ],
    })
  })
})
