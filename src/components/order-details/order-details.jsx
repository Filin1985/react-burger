import React from 'react'
import styles from './order-details.module.css'
import checkImage from '../../images/done.svg'
import { useSelector } from 'react-redux'
import Loader from '../loader/loader'

const OrderDetails = () => {
  const { burgerOrder, burgerOrderRequest } = useSelector(
    (store) => store.ingredients
  )

  return (
    <div className={styles.order__details}>
      {burgerOrderRequest ? (
        <Loader />
      ) : (
        <>
          <h2 className={styles.order__number}>{burgerOrder.number}</h2>
          <p className={styles.order__text}>идентификатор заказа</p>
          <img
            src={checkImage}
            alt='check icon'
            className={styles.order__icon}
          />
          <p className={styles.order__text}>ваш заказа начали готовить</p>
          <p className={styles.order__text}>
            дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </div>
  )
}

export default OrderDetails
