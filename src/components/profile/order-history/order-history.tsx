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
import { TOrderItem } from '../../../services/reducers/types'
import { SET_CURRENT_ORDER } from '../../../services/constants/burgerConstructor'
import { getCookie } from '../../../utils/utils'

export const WS_USER_ORDERS = 'wss://norma.nomoreparties.space/orders'

const OrderHistory: FC = () => {
  const location = useLocation()

  const dispatch = useDispatch()

  const { loading } = useSelector((store) => store.wsUserFeed)

  useEffect(() => {
    const token = getCookie('token')
    dispatch(wsConnectionStartAction(`${WS_USER_ORDERS}?token=${token}`))
    return () => {
      dispatch(wsDisconnectionAction())
    }
  }, [])

  const { orders } = useSelector((store) => store.wsUserFeed)

  const handleClick = (item: TOrderItem) => {
    dispatch({
      type: SET_CURRENT_ORDER,
      item,
    })
  }

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
        {orders
          .map((item) => (
            <Link
              to={{
                pathname: `/profile/orders/${item.number}`,
                state: { background: location },
              }}
              className={styles.orders__link}
              key={item._id}
            >
              <OrderItem order={item} handleClick={handleClick} />
            </Link>
          ))
          .reverse()}
      </ul>
    </section>
  )
}

export default OrderHistory
