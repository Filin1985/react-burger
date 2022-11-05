import React, { useEffect } from 'react'
import styles from './modal.module.css'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay.jsx'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const ECK_KEYCODE = 27
const modalSelector = document.querySelector('#react-modals')

const Modal = ({ children, closeModal, isConstructor }) => {
  const onClose = () => {
    closeModal()
  }

  useEffect(() => {
    const closeByEsc = (evt) => {
      if (evt.keyCode === ECK_KEYCODE) {
        onClose()
      }
    }

    window.addEventListener('keydown', closeByEsc)
    return () => {
      window.removeEventListener('keydown', closeByEsc)
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <div
        className={
          isConstructor ? styles.order__container : styles.ingredient_container
        }
      >
        <span className={styles.modal__close} onClick={onClose}>
          <CloseIcon type='primary' />
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
  selectIngredient: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
}

export default Modal
