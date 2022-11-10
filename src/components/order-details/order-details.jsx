import React from 'react'
import PropTypes from 'prop-types'
import styles from './order-details.module.css'
import checkImage from '../../images/done.svg'

const OrderDetails = ({ orderDetails }) => {
  console.log(orderDetails)
  return (
    <div className={styles.order__details}>
      <h2 className={styles.order__number}>{orderDetails.order.number}</h2>
      <p className={styles.order__text}>идентификатор заказа</p>
      <img src={checkImage} alt='check icon' className={styles.order__icon} />
      <p className={styles.order__text}>ваш заказа начали готовить</p>
      <p className={styles.order__text}>
        дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

OrderDetails.propTypes = {
  orderDetails: PropTypes.shape({
    success: PropTypes.bool,
    name: PropTypes.string,
    order: PropTypes.object.isRequired,
  }).isRequired,
}

export default OrderDetails
