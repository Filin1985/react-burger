import PropTypes from 'prop-types'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-item.module.css'
import { IIngredient } from '../../../types'
import { useDrag } from 'react-dnd'

const BurgerItem = ({ item, handleClick, count }) => {
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
  })

  return (
    <li
      onClick={() => handleClick(item)}
      className={styles.ingredients__item}
      ref={dragRef}
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

// BurgerItem.propTypes = {
//   item: cardPropTypes.isRequired,
//   handleClick: PropTypes.func.isRequired,
//   count: PropTypes.number,
// }

export default BurgerItem
