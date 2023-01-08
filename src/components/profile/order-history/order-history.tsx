import React, { useEffect, FC } from 'react'
import ProfileNav from '../profile-nav/profile-nav'
import { Link, useLocation } from 'react-router-dom'
import styles from './order-history.module.css'

import { useDispatch } from 'react-redux'
import { useSelector } from '../../../services/hooks'
import Loader from '../../loader/loader'
import {
  wsConnectionStartAction,
  wsDisconnectionAction,
} from '../../../services/action/wsUserActions'
import OrderItem from '../order-item/order-item'

export const WS_USER_ORDERS = 'wss://norma.nomoreparties.space/orders'

const OrderHistory: FC = () => {
  const location = useLocation()

  const dispatch = useDispatch()

  const { loading } = useSelector((store) => store.wsUserFeed)

  useEffect(() => {
    dispatch(wsConnectionStartAction(WS_USER_ORDERS))
    return () => {
      dispatch(wsDisconnectionAction())
    }
  }, [dispatch])

  const { orders } = useSelector((store) => store.wsUserFeed)

  if (loading) {
    return <Loader />
  }

  return (
    <section className={styles.orders}>
      <div className={styles.orders__nav}>
        <ProfileNav />
        <p className={styles.orders__text}>
          В этом разделе вы можете промотреть свою историю заказов
        </p>
      </div>
      <ul className={styles.orders__items}>
        {orders.map((item) => (
          <li key={item._id} className={styles.orders__item}>
            <Link
              to={{
                pathname: `/profile/orders/${item._id}`,
                state: { background: location },
              }}
              className={styles.orders__link}
            >
              <OrderItem order={item} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OrderHistory
