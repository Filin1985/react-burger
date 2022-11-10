import React, { useEffect, useState } from 'react'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import styles from './app.module.css'
import { API_URL } from '../../utils/config.js'
import { IngredientsContext } from '../../context/ingredientsContext.js'
import { request } from '../../utils/utils.js'

function App() {
  const [ingredients, setIngredients] = useState([])

  const getIngredientsApi = () => {
    request(`${API_URL}/ingredients`)
      .then((data) => {
        setIngredients(data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getIngredientsApi()
  }, [])

  return (
    <>
      <Header />
      <IngredientsContext.Provider value={{ ingredients }}>
        <main className={styles.container}>
          {(ingredients.length > 0 && (
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          )) || <h1>Данные отсутствуют</h1>}
        </main>
      </IngredientsContext.Provider>
    </>
  )
}

export default App
