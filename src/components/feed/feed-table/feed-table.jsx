import React from 'react'
import styles from './feed-table.module.css'

const FeedTable = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.statistics__list}>
        <div className={styles.statistics__ready}>
          <h2 className={styles.statistics__header}>Готовы:</h2>
          <ul className={styles.statistics__numbers}>
            <li className={styles.statistics__number}>034533</li>
            <li className={styles.statistics__number}>034532</li>
            <li className={styles.statistics__number}>034530</li>
            <li className={styles.statistics__number}>034527</li>
            <li className={styles.statistics__number}>034525</li>
          </ul>
        </div>
        <div className={styles.statistics__work}>
          <h2 className={styles.statistics__header}>В работе:</h2>
          <ul className={styles.statistics__numbers}>
            <li className={styles.statistics__number}>034538</li>
            <li className={styles.statistics__number}>034541</li>
            <li className={styles.statistics__number}>034542</li>
          </ul>
        </div>
      </div>
      <div className={styles.statistics__time}>
        <h2 className={styles.statistics__header}>Выполнено за все время:</h2>
        <p className={styles.statistics__count}>28752</p>
      </div>
      <div className={styles.statistics__today}>
        <h2 className={styles.statistics__header}>Выполнено за сегодня:</h2>
        <p className={styles.statistics__count}>138</p>
      </div>
    </div>
  )
}

export default FeedTable
