import React from 'react'
import PropTypes from 'prop-types'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'

const IngredientType = ({ name, data, id, setOpenModel }) => {
  const handleClick = (item) => {
    setOpenModel({
      isOpen: true,
      data: item,
      type: 'ingredients',
    })
  }

  return (
    <li className={styles.ingredients__bun}>
      <h2 className={styles.ingredients__subheader} id={id}>
        {name}
      </h2>
      <ul className={styles.ingredients__items}>
        {data.map((item) => (
          <a
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
          </a>
        ))}
      </ul>
    </li>
  )
}

IngredientType.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setOpenModel: PropTypes.func.isRequired,
}

export default IngredientType
