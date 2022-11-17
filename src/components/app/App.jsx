import React, { useEffect } from 'react'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import styles from './app.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHOOSE_INGREDIENTS,
  getIngredients,
  INCREASE_INGREDIENT_ITEM,
} from '../../services/action/ingredient.js'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const handleDrop = (item) => {
    dispatch({ type: CHOOSE_INGREDIENTS, item })
    dispatch({ type: INCREASE_INGREDIENT_ITEM, item, _id: item._id })
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        {(ingredients.length > 0 && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor onDropHandler={handleDrop} />
          </DndProvider>
        )) || <h1>Данные отсутствуют</h1>}
      </main>
    </>
  )
}

export default App
