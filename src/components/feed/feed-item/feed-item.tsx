import React, { FC } from 'react'
import styles from './feed-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IOrder } from '../../../types'

const FeedItem: FC<IOrder> = ({ order }) => {
  return (
    <li className={styles.orders__item}>
      <div className={styles.orders__info}>
        <h3 className={styles.orders__number}>#{order.number}</h3>
        <p className={styles.orders__date}>Сегодня, 16:20 i-GMT+3</p>
      </div>
      <h2 className={styles.orders__name}>Death Star Starship Main бургер</h2>
      <div className={styles.orders__container}>
        <ul className={styles.orders__ingredients}>
          {/* {
            //@ts-ignore
            [...Array(6).keys()].map((item, index) => (
              <li key={index} className={styles.orders__ingredient}>
                <img
                  className={styles.orders__image}
                  style={{
                    left: `${0 + 50 * index}px`,
                    zIndex: 100 - index,
                  }}
                  src='https://code.s3.yandex.net/react/code/meat-02.png'
                  alt=''
                />
              </li>
            ))
          } */}
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
