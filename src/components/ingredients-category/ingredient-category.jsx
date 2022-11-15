import React from 'react'
import PropTypes from 'prop-types'
import styles from './ingredients-category.module.css'
import { cardPropTypes } from '../../prop-types.js'
import BurgerItem from '../burger-item/burger-item'
import { useDispatch } from 'react-redux'
import { SET_CURRENT_INGREDIENT } from '../../services/action/ingredient'

const IngredientCategory = ({ name, data, id }) => {
  const dispatch = useDispatch()
  const handleClick = (item) => {
    dispatch({
      type: SET_CURRENT_INGREDIENT,
      item: item,
    })
  }

  return (
    <li className={styles.ingredients__bun}>
      <h2 className={styles.ingredients__subheader} id={id}>
        {name}
      </h2>
      <ul className={styles.ingredients__items}>
        {data.map((item) => (
          <BurgerItem key={item._id} item={item} handleClick={handleClick} />
        ))}
      </ul>
    </li>
  )
}

IngredientCategory.propTypes = {
  data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default IngredientCategory
