import React, { useEffect, useState } from 'react'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import { getDataApi } from '../../utils/api.js'
import './App.css'

function App() {
  const [ingredients, setIngredients] = useState(null)

  useEffect(() => {
    getDataApi(setIngredients)
  }, [])

  return (
    <>
      <Header />
      <main className='container'>
        {(ingredients && (
          <>
            <BurgerIngredients ingredientsData={ingredients} />
            <BurgerConstructor ingredientsData={ingredients} />
          </>
        )) || <h1>Данные отсутствуют</h1>}
      </main>
    </>
  )
}

export default App
