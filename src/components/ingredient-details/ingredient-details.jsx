import React from 'react'
import PropTypes from 'prop-types'
import styles from './ingredient-details.module.css'

const IngredientDetails = ({ card }) => {
  return (
    <div className={styles.ingredient__details}>
      <h2 className={styles.ingredient__header}>Детали ингредиента</h2>
      <div className={styles.ingredient__ingredient}>
        <img
          className={styles.ingredient__image}
          src={card.image}
          alt={card.name}
        />
        <h3 className={styles.ingredient__subheader}>{card.name}</h3>
        <ul className={styles.ingredient__items}>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Калории, ккал</p>
            <span className={styles.ingredient__number}>{card.calories}</span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Белки, г</p>
            <span className={styles.ingredient__number}>{card.proteins}</span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Жиры, г</p>
            <span className={styles.ingredient__number}>{card.fat}</span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Углеводы, г</p>
            <span className={styles.ingredient__number}>
              {card.carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  card: PropTypes.objectOf(
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
    }).isRequired
  ),
}

export default IngredientDetails
