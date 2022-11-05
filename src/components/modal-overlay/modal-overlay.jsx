import PropTypes from 'prop-types'
import styles from './modal-overlay.module.css'

export const ModalOverlay = ({ children, onClick }) => {
  return (
    <div className={styles.modal__overlay} onClick={onClick}>
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
}

export default ModalOverlay
