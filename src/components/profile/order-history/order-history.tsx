import React from 'react'
import ProfileNav from '../profile-nav/profile-nav'
import { Link, useLocation } from 'react-router-dom'
import styles from './order-history.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const OrderHistory = () => {
  const location = useLocation()

  return (
    <section className={styles.orders}>
      <div className={styles.orders__nav}>
        <ProfileNav />
        <p className={styles.orders__text}>
          В этом разделе вы можете промотреть свою историю заказов
        </p>
      </div>
      <ul className={styles.orders__items}>
        {[...Array(10)].map((item, index) => (
          <li key={index} className={styles.orders__item}>
            <Link
              to={{
                pathname: `/profile/orders/${index}`,
                state: { background: location },
              }}
              className={styles.orders__link}
            >
              <div className={styles.orders__info}>
                <h3 className={styles.orders__number}>#034535</h3>
                <p className={styles.orders__date}>Сегодня, 16:20 i-GMT+3</p>
              </div>
              <h2 className={styles.orders__name}>
                Death Star Starship Main бургер
              </h2>
              <p className={styles.orders__subname}>Готовится</p>
              <div className={styles.orders__container}>
                <ul className={styles.orders__ingredients}>
                  {
                    //@ts-ignore
                    [...Array(6).keys()].map((item, index) => (
                      <li key={index} className={styles.orders__ingredient}>
                        <img
                          className={styles.orders__image}
                          style={{
                            left: `${0 + 50 * index}px`,
                            zIndex: 1 - 0.01 * index,
                          }}
                          src='https://code.s3.yandex.net/react/code/meat-02.png'
                          alt=''
                        />
                      </li>
                    ))
                  }
                </ul>
                <div className={styles.orders__result}>
                  <p className={styles.orders__price}>630</p>
                  <CurrencyIcon type='primary' />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OrderHistory
