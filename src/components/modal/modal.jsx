import React, { useEffect, useRef } from 'react'
import styles from './modal.module.css'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay.jsx'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = ({ isOpen, children, onClose, type }) => {
  const closeByEsc = (evt) => {
    if (evt.keyCode === 27) {
      onClose()
    }
  }

  const modalOverlayRef = useRef()

  useEffect(() => {
    window.addEventListener('keydown', (evt) => {
      closeByEsc(evt)
    })
    if (modalOverlayRef.current) {
      modalOverlayRef.current.addEventListener('click', onClose)
    }
    return () => {
      if (modalOverlayRef.current) {
        modalOverlayRef.current.removeEventListener('click', onClose)
      }
      window.removeEventListener('keydown', closeByEsc)
    }
  })

  return ReactDOM.createPortal(
    <>
      {isOpen ? (
        <ModalOverlay ref={modalOverlayRef}>
          <div
            className={
              type === 'order'
                ? styles.order__container
                : styles.ingredient_container
            }
          >
            <span className={styles.modal__close} onClick={onClose}>
              <CloseIcon type='primary' />
            </span>
            {children}
          </div>
        </ModalOverlay>
      ) : null}
    </>,
    document.querySelector('#react-modals')
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export default Modal
