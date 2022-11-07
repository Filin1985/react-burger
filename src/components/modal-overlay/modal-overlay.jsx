import PropTypes from 'prop-types'
import styles from './modal-overlay.module.css'

export const ModalOverlay = ({ children, onClick }) => {
  return <div className={styles.modal__overlay} onClick={onClick} />
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
}

export default ModalOverlay
