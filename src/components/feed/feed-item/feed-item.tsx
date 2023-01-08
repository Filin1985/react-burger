import React, { FC } from 'react'
import styles from './feed-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export type TOrder = {
  order: TOrderItem
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

const FeedItem: FC<TOrder> = ({ order }) => {
  console.log(order)
  return (
    <li className={styles.orders__item}>
      <div className={styles.orders__info}>
        <h3 className={styles.orders__number}>#{order.number}</h3>
        <p className={styles.orders__date}>Сегодня, 16:20 i-GMT+3</p>
      </div>
      <h2 className={styles.orders__name}>Death Star Starship Main бургер</h2>
      <div className={styles.orders__container}>
        <ul className={styles.orders__ingredients}>
          {order.ingredients.map((item, index) => (
            <li key={index} className={styles.orders__ingredient}>
              <img
                className={styles.orders__image}
                style={{
                  left: `${0 + 50 * index}px`,
                  zIndex: 100 - index,
                }}
                src={item}
                alt=''
              />
            </li>
          ))}
        </ul>
        <div className={styles.orders__result}>
          <p className={styles.orders__price}>630</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </li>
  )
}

export default FeedItem
