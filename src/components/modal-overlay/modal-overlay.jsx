import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './modal-overlay.module.css'

const ModalOverlay = forwardRef((props, ref) => {
  return (
    <div ref={ref} onClick={props.onClick} className={styles.modal__overlay}>
      {props.children}
    </div>
  )
})

ModalOverlay.propTypes = {
  children: PropTypes.element,
}

export default ModalOverlay
