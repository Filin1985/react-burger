import React, { useEffect, useState } from 'react'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import styles from './app.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHOOSE_INGREDIENTS,
  getIngredients,
} from '../../services/action/ingredient.js'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [items, setItems] = useState([])
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  )

  const dispatch = useDispatch()

  const handleDrop = (item) => {
    dispatch({ type: CHOOSE_INGREDIENTS, item })
  }

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

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
