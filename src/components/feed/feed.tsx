import React, { useEffect, FC } from 'react'
import styles from './feed.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from '../../services/hooks'
import FeedItem from './feed-item/feed-item'
import FeedTable from './feed-table/feed-table'
import {
  wsConnectionStartAction,
  wsDisconnectionAction,
} from '../../services/action/wsActions'
import Loader from '../loader/loader'

const WS_ALL_ORDERS_URL = 'wss://norma.nomoreparties.space/orders/all'

const Feed: FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const { loading } = useSelector((store) => store.wsFeed)

  useEffect(() => {
    dispatch(wsConnectionStartAction(WS_ALL_ORDERS_URL))
    return () => {
      dispatch(wsDisconnectionAction())
    }
  }, [dispatch])

  const { orders } = useSelector((store) => store.wsFeed)

  if (loading) {
    return <Loader />
  }

  return (
    <section className={styles.orders}>
      <>
        <h1 className={styles.orders__header}>Лента заказов</h1>
        <div className={styles.orders__list}>
          <ul className={styles.orders__scroll}>
            {orders?.map((item) => (
              <Link
                key={item._id}
                to={{
                  pathname: `/feed/${item.number}`,
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
    </section>
  )
}

export default Feed
