import React, { useEffect } from 'react'
import styles from './modal.module.css'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay.jsx'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ESC_KEYCODE = 27
const modalSelector = document.querySelector('#react-modals')

const Modal = ({ children, closeModal, withTitle }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeByEsc)
    return () => {
      window.removeEventListener('keydown', closeByEsc)
    }
  }, [])

  const closeByEsc = (e) => {
    if (e.keyCode === ESC_KEYCODE) {
      closeModal(e)
    }
  }

  return ReactDOM.createPortal(
    <>
      <div
        className={
          withTitle ? styles.order__container : styles.ingredient_container
        }
      >
        <span className={styles.modal__close}>
          <CloseIcon type='primary' onClick={closeModal} />
        </span>
        {children}
      </div>
      <ModalOverlay onClick={closeModal} />
    </>,
    modalSelector
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  isOrder: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
}

export default Modal
