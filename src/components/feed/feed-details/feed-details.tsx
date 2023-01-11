import React, { useEffect, useState } from 'react'
import styles from './feed-details.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from '../../../services/hooks'
import { getCurrentOrder } from '../../../utils/utils'
import { useParams } from 'react-router-dom'
import Loader from '../../loader/loader'
import {
  getFormatedDate,
  getOrderIngredients,
  getTotalPrice,
} from '../../../utils/utils'
import { TOrderItem } from '../feed-item/feed-item'

type TOrderNumber = {
  number: string
}

type HeadersInit = Headers | string[][] | { [key: string]: string }

const FeedDetails = () => {
  const [order, setOrder] = useState<TOrderItem>()
  const { ingredients } = useSelector((store) => store.ingredients)

  const params: TOrderNumber = useParams()
  const currentOrderNumber = Number(params.number)

  const GET_ORDER_URL: string = `https://norma.nomoreparties.space/api/orders/${currentOrderNumber}`
  const HEADERS: HeadersInit = {
    'Content-Type': 'application/json',
  }

  useEffect(() => {
    getCurrentOrder(GET_ORDER_URL, HEADERS, setOrder)
  }, [])

  if (!order) {
    return <Loader />
  }

  const orderIngredients = getOrderIngredients(ingredients, order.ingredients)
  const formattedDate = getFormatedDate(order?.createdAt)
  const totalPrice = getTotalPrice(orderIngredients)

  return (
    <div className={styles.details}>
      <p className={styles.details__order}>#{order?.number}</p>
      <h1 className={styles.details__title}>{order?.name}</h1>
      <p className={styles.details__status}>
        {order?.status === 'done' ? 'Выполнен' : 'Готовится'}
      </p>
      <p className={styles.details__ingredients}>Состав:</p>
      <ul className={styles.details__list}>
        {orderIngredients.map((item, index) => (
          <li key={index} className={styles.details__item}>
            <div className={styles.details__wrap}>
              <img className={styles.details__image} src={item.image} alt='' />
              <p className={styles.details__name}>{item.name}</p>
            </div>
            <div className={styles.details__result}>
              <p className={styles.details__price}>
                <span className={styles.details__extra}>1 X </span>
                {item.price}
              </p>
              <CurrencyIcon type='primary' />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.details__data}>
        <p className={styles.details__date}>{formattedDate}</p>
        <div className={styles.details__result}>
          <p className={styles.details__price}>{totalPrice}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  )
}

export default FeedDetails
