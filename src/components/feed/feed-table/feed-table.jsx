import React from 'react'
import styles from './feed-table.module.css'
import { useSelector } from '../../../services/hooks'

const ORDERS_NUMBER = 10

const FeedTable = () => {
  const { orders, total, totalToday } = useSelector((store) => store.wsFeed)
  const doneOrders = orders
    .filter((order) => order.status === 'done')
    .slice(0, ORDERS_NUMBER)
  const inWorkOrders = orders
    .filter((order) => order.status !== 'done')
    .slice(0, ORDERS_NUMBER)
  return (
    <div className={styles.statistics}>
      <div className={styles.statistics__list}>
        <div className={styles.statistics__ready}>
          <h2 className={styles.statistics__header}>Готовы:</h2>
          <ul className={styles.statistics__numbers}>
            {doneOrders.length > 0
              ? doneOrders.map((item) => (
                  <li key={item.number} className={styles.statistics__number}>
                    {item.number}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className={styles.statistics__work}>
          <h2 className={styles.statistics__header}>В работе:</h2>
          <ul className={styles.statistics__numbers}>
            {inWorkOrders.length > 0
              ? inWorkOrders.map((item) => (
                  <li key={item.number} className={styles.statistics__number}>
                    {item.number}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
      <div className={styles.statistics__time}>
        <h2 className={styles.statistics__header}>Выполнено за все время:</h2>
        <p className={styles.statistics__count}>{total}</p>
      </div>
      <div className={styles.statistics__today}>
        <h2 className={styles.statistics__header}>Выполнено за сегодня:</h2>
        <p className={styles.statistics__count}>{totalToday}</p>
      </div>
    </div>
  )
}

export default FeedTable
