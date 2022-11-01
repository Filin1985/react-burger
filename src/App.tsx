import React, { useEffect, useState } from 'react'
import Header from './components/app-header/app-header.jsx'
import BurgerConstructor from './components/burger-constructor/burger-constructor.jsx'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import { API_URL } from './utils/config.js'
import { getDataApi } from './utils/api.js'
import './App.css'

function App() {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    getDataApi(API_URL, setIngredients)
  }, [API_URL, getDataApi])

  return (
    <>
      <Header />
      <div className='container'>
        <BurgerIngredients ingredientsData={ingredients} />
        <BurgerConstructor ingredientsData={ingredients} />
      </div>
    </>
  )
}

export default App
