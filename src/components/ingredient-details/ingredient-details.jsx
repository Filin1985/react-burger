import React from 'react'
import PropTypes from 'prop-types'
import styles from './ingredient-details.module.css'

const IngredientDetails = ({
  image,
  name,
  calories,
  fat,
  carbohydrates,
  proteins,
}) => {
  return (
    <div className={styles.ingredient__details}>
      <h2 className={styles.ingredient__header}>Детали ингредиента</h2>
      <div className={styles.ingredient__ingredient}>
        <img className={styles.ingredient__image} src={image} alt={name} />
        <h3 className={styles.ingredient__subheader}>{name}</h3>
        <ul className={styles.ingredient__items}>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Калории, ккал</p>
            <span className={styles.ingredient__number}>{calories}</span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Белки, г</p>
            <span className={styles.ingredient__number}>{proteins}</span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Жиры, г</p>
            <span className={styles.ingredient__number}>{fat}</span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Углеводы, г</p>
            <span className={styles.ingredient__number}>{carbohydrates}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
}

export default IngredientDetails
