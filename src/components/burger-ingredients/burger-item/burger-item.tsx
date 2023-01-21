import { FC } from 'react'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-item.module.css'
import { IIngredient } from '../../../types'
import { useDrag } from 'react-dnd'

interface IBurgerItem {
  item: IIngredient
  count: number
}

const BurgerItem: FC<IBurgerItem> = ({ item, count }) => {
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
  })

  return (
    <li
      className={styles.ingredients__item}
      ref={dragRef}
      data-testid={item._id}
    >
      {count > 0 && <Counter count={count} size='default' />}
      <img src={item.image} alt={item.name} />
      <div className={styles.ingredients__currency}>
        <span className={styles.ingredients__number}>{item.price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <p className={styles.ingredients__name}>{item.name}</p>
    </li>
  )
}

export default BurgerItem
