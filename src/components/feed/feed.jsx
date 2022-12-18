import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './feed.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Feed = () => {
  return (
    <section className={styles.orders}>
      <h1 className={styles.orders__header}>Лента заказов</h1>
      <div className={styles.orders__list}>
        <ul className={styles.orders__scroll}>
          {[...Array(10)].map((item) => (
            <li className={styles.orders__item}>
              <NavLink to='#' className={styles.orders__link}>
                <div className={styles.orders__info}>
                  <h3 className={styles.orders__number}>#034535</h3>
                  <p className={styles.orders__date}>Сегодня, 16:20 i-GMT+3</p>
                </div>
                <h2 className={styles.orders__name}>
                  Death Star Starship Main бургер
                </h2>
                <div className={styles.orders__container}>
                  <ul className={styles.orders__ingredients}>
                    {[...Array(6).keys()].map((item, index) => (
                      <li key={item} className={styles.orders__ingredient}>
                        <img
                          className={styles.orders__image}
                          style={{
                            left: `${0 + 50 * index}px`,
                            zIndex: -index,
                          }}
                          src='https://code.s3.yandex.net/react/code/meat-04.png'
                          alt=''
                        />
                      </li>
                    ))}
                  </ul>
                  <div className={styles.orders__result}>
                    <p className={styles.orders__price}>630</p>
                    <CurrencyIcon />
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
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
            <h2 className={styles.statistics__header}>
              Выполнено за все время:
            </h2>
            <p className={styles.statistics__count}>28752</p>
          </div>
          <div className={styles.statistics__today}>
            <h2 className={styles.statistics__header}>Выполнено за сегодня:</h2>
            <p className={styles.statistics__count}>138</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feed
