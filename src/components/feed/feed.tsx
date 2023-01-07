import React, { useEffect, FC } from 'react'
import styles from './feed.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FeedItem from './feed-item/feed-item'
import FeedTable from './feed-table/feed-table'
import {
  wsConnectionStartAction,
  wsDisconnectionAction,
} from '../../services/action/wsActions'
import Loader from '../loader/loader'
import { store } from '../../services/store'
import { IOrder } from '../../types'

const WS_ALL_ORDERS_URL = 'wss://norma.nomoreparties.space/orders/all'

const Feed: FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const { loading } = useSelector((store: any) => store.wsFeed)

  useEffect(() => {
    dispatch(wsConnectionStartAction(WS_ALL_ORDERS_URL))
    return () => {
      dispatch(wsDisconnectionAction())
    }
  }, [dispatch])

  const { orders } = useSelector((store: any) => store.wsFeed)
  console.log(orders[0])

  if (loading) {
    return <Loader />
  }

  return (
    <section className={styles.orders}>
      {orders.length > 0 && (
        <>
          <h1 className={styles.orders__header}>Лента заказов</h1>
          <div className={styles.orders__list}>
            <ul className={styles.orders__scroll}>
              {orders.map((item: IOrder) => (
                <Link
                  key={item._id}
                  to={{
                    pathname: `/feed/${item._id}`,
                    state: { background: location },
                  }}
                  className={styles.orders__link}
                >
                  <FeedItem order={item} />
                </Link>
              ))}
            </ul>
            <FeedTable />
          </div>
        </>
      )}
    </section>
  )
}

export default Feed
