import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-item.module.css'
import { useDrag } from 'react-dnd'

const BurgerItem = ({ item, handleClick }) => {
  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
  })

  return (
    <li
      onClick={() => handleClick(item)}
      className={styles.ingredients__item}
      ref={dragRef}
    >
      {item.count > 0 && <Counter count={item.count} size='default' />}
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
