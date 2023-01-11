import React, { FC } from 'react'
import styles from '../order-history/order-history.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { TOrderItem } from '../../feed/feed-item/feed-item'
import { useSelector } from '../../../services/hooks'
import { useLocation } from 'react-router-dom'
import {
  getFormatedDate,
  getOrderIngredients,
  getTotalPrice,
} from '../../../utils/utils'

const SLICE_NUMBER = 6
const MOVE_ITEM_LEFT_NUMBER = 50

interface IOrderItem {
  order: TOrderItem
  handleClick: (item: TOrderItem) => void
}

const OrderItem: FC<IOrderItem> = ({ order, handleClick }) => {
  const { ingredients } = useSelector((store) => store.ingredients)

  const orderIngredients = getOrderIngredients(ingredients, order.ingredients)
  const totalPrice = getTotalPrice(orderIngredients)
  const sliceOrderIngredients = orderIngredients.slice(0, SLICE_NUMBER)
  const formattedDate = getFormatedDate(order.createdAt)

  return (
    <li
      key={order._id}
      className={styles.orders__item}
      onClick={() => handleClick(order)}
    >
      <div className={styles.orders__info}>
        <h3 className={styles.orders__number}>#{order.number}</h3>
        <p className={styles.orders__date}>{formattedDate}</p>
      </div>
      <h2 className={styles.orders__name}>{order.name}</h2>
      <p className={styles.orders__subname}>
        {order.status === 'done' ? 'Выполнено' : 'Готовится'}
      </p>
      <div className={styles.orders__container}>
        <ul className={styles.orders__ingredients}>
          {sliceOrderIngredients.map((item, index) => (
            <li key={index} className={styles.orders__ingredient}>
              <img
                className={styles.orders__image}
                style={{
                  left: `${MOVE_ITEM_LEFT_NUMBER * index}px`,
                  zIndex: SLICE_NUMBER - index,
                }}
                src={item.image}
                alt=''
              />
            </li>
          ))}
          {orderIngredients.length > 6 ? (
            <div className={styles.orders__count}>
              <p>{`+${orderIngredients.length - SLICE_NUMBER}`}</p>
            </div>
          ) : null}
        </ul>
        <div className={styles.orders__result}>
          <p className={styles.orders__price}>{totalPrice}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </li>
  )
}

export default OrderItem
