import React, { useEffect, FC, ReactNode } from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

interface IModalProps {
  closeModal: () => void
  children: ReactNode
  withTitle?: boolean
}

const ESC_KEYCODE = 27
const modalSelector = document.querySelector('#react-modals') as HTMLElement

const Modal: FC<IModalProps> = ({ children, closeModal, withTitle }) => {
  const closeByEsc = (e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEYCODE) {
      closeModal()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeByEsc)
    return () => {
      window.removeEventListener('keydown', closeByEsc)
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <div
        className={
          withTitle ? styles.order__container : styles.ingredient_container
        }
        data-test='modal'
      >
        <span className={styles.modal__close} data-test='close-btn'>
          <CloseIcon
            type='primary'
            onClick={closeModal}
            data-test='close-btn'
          />
        </span>
        {children}
      </div>
      <ModalOverlay onClick={closeModal} />
    </>,
    modalSelector
  )
}

export default Modal
