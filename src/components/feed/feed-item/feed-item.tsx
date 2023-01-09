import React, { FC } from 'react'
import styles from './feed-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from '../../../services/hooks'
import {
  getFormatedDate,
  getOrderIngredients,
  getTotalPrice,
} from '../../../utils/utils'

const SLICE_NUMBER = 6

export type TOrder = {
  order: TOrderItem
  handleClick: (item: TOrderItem) => void
}

export type TOrderItem = {
  createdAt: string
  ingredients: Array<string>
  name: string
  number: number
  status: string
  updatedAt: string
  _id: string
}

const FeedItem: FC<TOrder> = ({ order, handleClick }) => {
  const { ingredients } = useSelector((store) => store.ingredients)

  const orderIngredients = getOrderIngredients(ingredients, order.ingredients)
  const totalPrice = getTotalPrice(orderIngredients)
  const sliceOrderIngredients = orderIngredients.slice(0, SLICE_NUMBER)
  const formattedDate = getFormatedDate(order.createdAt)
  return (
    <li className={styles.orders__item} onClick={() => handleClick(order)}>
      <div className={styles.orders__info}>
        <h3 className={styles.orders__number}>#{order.number}</h3>
        <p className={styles.orders__date}>{formattedDate}</p>
      </div>
      <h2 className={styles.orders__name}>{order.name}</h2>
      <div className={styles.orders__container}>
        <ul className={styles.orders__ingredients}>
          {sliceOrderIngredients.map((item, index) => (
            <li key={index} className={styles.orders__ingredient}>
              <img
                className={styles.orders__image}
                style={{
                  left: `${0 + 50 * index}px`,
                  zIndex: 100 - index,
                }}
                src={item.image}
                alt=''
              />
            </li>
          ))}
          {orderIngredients.length > 6 ? (
            <div className={styles.orders__count}>
              <p className={styles.orders__text}>{`+${
                orderIngredients.length - SLICE_NUMBER
              }`}</p>
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

export default FeedItem
