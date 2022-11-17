import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-item.module.css'
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux'

const BurgerItem = ({ item, handleClick }) => {
  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: item,
  })

  const { bun, otherIngredients } = useSelector(
    (store) => store.ingredients.ingredientsBurger
  )

  const allIngredients = [...otherIngredients, bun]
  let count = 0
  if (allIngredients) {
    for (let ingredient of allIngredients) {
      if (item._id === ingredient._id) {
        count++
      }
    }
  }

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

export default BurgerItem
