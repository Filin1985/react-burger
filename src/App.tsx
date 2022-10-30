import React from 'react'
import Header from './components/app-header/app-header.jsx'
import BurgerConstructor from './components/burger-constructor/burger-constructor.jsx'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  )
}

export default App
