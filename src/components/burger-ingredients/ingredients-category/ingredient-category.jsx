import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import styles from './ingredients-category.module.css'
import { cardPropTypes } from '../../../prop-types.js'
import BurgerItem from '../burger-item/burger-item'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CURRENT_INGREDIENT } from '../../../services/action/burgerConstructor'

const IngredientCategory = React.forwardRef(({ name, data, id }, ref) => {
  const { bun, otherIngredients } = useSelector(
    (store) => store.burgerConstructor.ingredientsBurger
  )
  const dispatch = useDispatch()
  const handleClick = (item) => {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      item: item,
    })
  }

  const allIngredients = useMemo(() => {
    return [...otherIngredients, bun ? bun : 0]
  }, [otherIngredients, bun])

  let res = new Map()
  useMemo(() => {
    return allIngredients[0] !== null
      ? allIngredients.reduce(
          (acc, e) => acc.set(e._id, (acc.get(e._id) || 0) + 1),
          res
        )
      : 0
  }, [allIngredients, res])

  let location = useLocation()

  return (
    <li className={styles.ingredients__bun}>
      <h2 className={styles.ingredients__subheader} id={id} ref={ref}>
        {name}
      </h2>
      <ul className={styles.ingredients__items}>
        {data.map((item) => (
          <Link
            key={item._id}
            to={{
              pathname: `/ingredients/${item._id}`,
              state: { background: location },
            }}
          >
            <BurgerItem
              count={res.get(item._id)}
              item={item}
              handleClick={handleClick}
            />
          </Link>
        ))}
      </ul>
    </li>
  )
})

IngredientCategory.propTypes = {
  data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default IngredientCategory