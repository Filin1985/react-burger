import React, { useEffect, useState } from 'react'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import styles from './app.module.css'
import { API_URL } from '../../utils/config.js'
import { IngredientsContext } from '../../context/ingredientsContext.js'
import { request } from '../../utils/utils.js'
import { useSelector, useDispatch } from 'react-redux'
import { getIngredients } from '../../services/action/ingredient.js'

function App() {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <Header />
      <main className={styles.container}>
        {(ingredients.length > 0 && (
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        )) || <h1>Данные отсутствуют</h1>}
      </main>
    </>
  )
}

export default App
