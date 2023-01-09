import React from 'react'
import styles from './profile-order-details.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from '../../../services/hooks'
import {
  getFormatedDate,
  getOrderIngredients,
  getTotalPrice,
} from '../../../utils/utils'

const ProfileOrderDetails = () => {
  const { currentOrder } = useSelector((store) => store.burgerConstructor)
  const { ingredients } = useSelector((store) => store.ingredients)

  if (!currentOrder) {
    return null
  } else {
    const orderIngredients = getOrderIngredients(
      ingredients,
      currentOrder.ingredients
    )
    const formattedDate = getFormatedDate(currentOrder.createdAt)
    const totalPrice = getTotalPrice(orderIngredients)
    return (
      <div className={styles.details}>
        <p className={styles.details__order}>#{currentOrder.number}</p>
        <h1 className={styles.details__title}>{currentOrder.name}</h1>
        <p className={styles.details__status}>
          {currentOrder.status === 'done' ? 'Выполнен' : 'Готовится'}
        </p>
        <p className={styles.details__ingredients}>Состав:</p>
        <ul className={styles.details__list}>
          {orderIngredients.map((item, index) => (
            <li key={index} className={styles.details__item}>
              <div className={styles.details__wrap}>
                <img
                  className={styles.details__image}
                  src={item.image}
                  alt=''
                />
                <p className={styles.details__name}>{item.name}</p>
              </div>
              <div className={styles.details__result}>
                <p className={styles.details__price}>
                  <span className={styles.details__extra}>1 X</span>630
                </p>
                <CurrencyIcon type='primary' />
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.details__data}>
          <p className={styles.details__date}>{formattedDate}</p>
          <div className={styles.details__result}>
            <p className={styles.details__price}>{totalPrice}</p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileOrderDetails
