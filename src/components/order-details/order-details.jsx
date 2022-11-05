import React from 'react'
import styles from './order-details.module.css'
import checkImage from '../../images/done.svg'

const OrderDetails = () => {
  return (
    <div className={styles.order__details}>
      <h2 className={styles.order__number}>034536</h2>
      <p className={styles.order__text}>идентификатор заказа</p>
      <img src={checkImage} alt='check icon' className={styles.order__icon} />
      <p className={styles.order__text}>ваш заказа начали готовить</p>
      <p className={styles.order__text}>
        дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

export default OrderDetails