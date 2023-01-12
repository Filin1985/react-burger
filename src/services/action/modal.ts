import { AppThunk, AppDispatch } from '../hooks'

import { OPEN_MODAL, CLOSE_MODAL } from '../constants/modal'

export interface IOpenModal {
  readonly type: typeof OPEN_MODAL
}

export interface ICloseModal {
  readonly type: typeof CLOSE_MODAL
}

export type TModalActions = IOpenModal | ICloseModal

export const openModalAction = (): IOpenModal => ({
  type: OPEN_MODAL,
})

export const closeModalAction = (): ICloseModal => ({
  type: CLOSE_MODAL,
})
