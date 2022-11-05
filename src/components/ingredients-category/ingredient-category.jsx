import React from 'react'
import PropTypes from 'prop-types'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredients-category.module.css'
import { cardPropTypes } from '../../prop-types.js'

const IngredientCategory = ({ name, data, id, setIngredient }) => {
  const handleClick = (item) => {
    setIngredient(item)
  }

  return (
    <li className={styles.ingredients__bun}>
      <h2 className={styles.ingredients__subheader} id={id}>
        {name}
      </h2>
      <ul className={styles.ingredients__items}>
        {data.map((item) => (
          <li
            onClick={() => handleClick(item)}
            key={item._id}
            className={styles.ingredients__item}
          >
            {item.count > 0 && <Counter count={item.count} size='default' />}
            <img src={item.image} alt={item.name} />
            <div className={styles.ingredients__curency}>
              <span className={styles.ingredients__number}>{item.price}</span>
              <CurrencyIcon type='primary' />
            </div>
            <p className={styles.ingredients__name}>{item.name}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}

IngredientCategory.propTypes = {
  data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setIngredient: PropTypes.func.isRequired,
}

export default IngredientCategory
