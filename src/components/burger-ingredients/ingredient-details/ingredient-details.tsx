import React, { memo } from 'react'

import styles from './ingredient-details.module.css'
import { useSelector } from '../../../services/hooks'

const IngredientDetails = () => {
  const { currentIngredient } = useSelector((store) => store.burgerConstructor)

  if (!currentIngredient) {
    return null
  } else {
    return (
      <div className={styles.ingredient__details}>
        <h2 className={styles.ingredient__header}>Детали ингредиента</h2>
        <div className={styles.ingredient__ingredient}>
          <img
            className={styles.ingredient__image}
            src={currentIngredient.image}
            alt={currentIngredient.name}
          />
          <h3 className={styles.ingredient__subheader}>
            {currentIngredient.name}
          </h3>
          <ul className={styles.ingredient__items}>
            <li className={styles.ingredient__item}>
              <p className={styles.ingredient__text}>Калории, ккал</p>
              <span className={styles.ingredient__number}>
                {currentIngredient.calories}
              </span>
            </li>
            <li className={styles.ingredient__item}>
              <p className={styles.ingredient__text}>Белки, г</p>
              <span className={styles.ingredient__number}>
                {currentIngredient.proteins}
              </span>
            </li>
            <li className={styles.ingredient__item}>
              <p className={styles.ingredient__text}>Жиры, г</p>
              <span className={styles.ingredient__number}>
                {currentIngredient.fat}
              </span>
            </li>
            <li className={styles.ingredient__item}>
              <p className={styles.ingredient__text}>Углеводы, г</p>
              <span className={styles.ingredient__number}>
                {currentIngredient.carbohydrates}
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default memo(IngredientDetails)
