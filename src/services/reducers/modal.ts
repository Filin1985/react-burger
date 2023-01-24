import { OPEN_MODAL, CLOSE_MODAL } from '../constants/modal'
import { TModalInitialState } from './types'
import { TModalActions } from '../action/modal'

export const initialState: TModalInitialState = {
  isOpen: false,
}

export const modalReducer = (
  state = initialState,
  action: TModalActions
): TModalInitialState => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        isOpen: true,
      }
    }
    case CLOSE_MODAL: {
      return {
        isOpen: false,
      }
    }
    default:
      return state
  }
}
