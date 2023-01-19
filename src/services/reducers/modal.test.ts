import { modalReducer } from './modal'
import { OPEN_MODAL, CLOSE_MODAL } from '../constants/modal'

describe('modal reducer', () => {
  it('should handle OPEN_MODAL', () => {
    const state = {
      isOpen: false,
    }
    const action = { type: OPEN_MODAL }
    const result = modalReducer(state, action)

    expect(result).toEqual({
      isOpen: true,
    })
  })

  it('should handle CLOSE_MODAL', () => {
    const state = {
      isOpen: true,
    }
    const action = { type: CLOSE_MODAL }
    const result = modalReducer(state, action)

    expect(result).toEqual({
      isOpen: false,
    })
  })
})
