import React from 'react'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-item.module.css'

const IngredientItem = ({ ingredient, handleDelete }) => {
  return (
    <li key={ingredient._id} className={styles.constructor__item}>
      <DragIcon type='primary' />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleDelete}
      />
    </li>
  )
}

export default IngredientItem
