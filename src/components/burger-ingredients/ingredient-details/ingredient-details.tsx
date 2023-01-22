import styles from './ingredient-details.module.css'
import { useSelector } from '../../../services/hooks'
import { useLocation } from 'react-router-dom'

const IngredientDetails = () => {
  const location = useLocation()
  const ingredientId = location.pathname.split('/').at(-1)
  const { ingredients } = useSelector((store) => store.ingredients)
  const currentIngredient = ingredients.filter(
    (item) => item._id === ingredientId
  )[0]

  return (
    <div className={styles.ingredient__details}>
      <h2 className={styles.ingredient__header}>Детали ингредиента</h2>
      <div className={styles.ingredient__ingredient}>
        <img
          className={styles.ingredient__image}
          src={currentIngredient?.image}
          alt={currentIngredient?.name}
          data-test='ingredient-image'
        />
        <h3
          className={styles.ingredient__subheader}
          data-test='ingredient-name'
        >
          {currentIngredient?.name}
        </h3>
        <ul className={styles.ingredient__items}>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Калории, ккал</p>
            <span
              className={styles.ingredient__number}
              data-test='ingredient-calories'
            >
              {currentIngredient?.calories}
            </span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Белки, г</p>
            <span
              className={styles.ingredient__number}
              data-test='ingredient-proteins'
            >
              {currentIngredient?.proteins}
            </span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Жиры, г</p>
            <span
              className={styles.ingredient__number}
              data-test='ingredient-fat'
            >
              {currentIngredient?.fat}
            </span>
          </li>
          <li className={styles.ingredient__item}>
            <p className={styles.ingredient__text}>Углеводы, г</p>
            <span
              className={styles.ingredient__number}
              data-test='ingredient-carbohydrates'
            >
              {currentIngredient?.carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IngredientDetails
