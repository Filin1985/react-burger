import React, { useEffect, useState } from 'react'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import './App.css'
import { API_URL } from '../../utils/config.js'

function App() {
  const [ingredients, setIngredients] = useState([])

  const checkResponse = (res: Response) => {
    return res.ok
      ? res.json()
      : res.json().then(() => Promise.reject(res.status))
  }

  const getApi = () => {
    fetch(`${API_URL}/ingredients`)
      .then((res) => {
        return checkResponse(res)
      })
      .then((data) => {
        setIngredients(data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <>
      <Header />
      <main className='container'>
        {(ingredients.length > 0 && (
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
