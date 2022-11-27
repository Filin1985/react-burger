import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import styles from './app.module.css'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import LoginPage from '../pages/login-page.jsx'
import OrderList from '../order-list/order-list.jsx'
import Loader from '../loader/loader.jsx'
import Profile from '../profile/profile.jsx'

import { useSelector, useDispatch } from 'react-redux'
import { INCREASE_INGREDIENT_ITEM } from '../../services/action/burgerConstructor.js'
import { getIngredients } from '../../services/action/ingredients.js'
import { actionCreators } from '../../services/actionCreators/burgerConstructor.js'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import RegisterPage from '../pages/register-page'

function App() {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const handleDrop = (item) => {
    dispatch(actionCreators.chooseIngredients(item))
    dispatch({ type: INCREASE_INGREDIENT_ITEM, item, _id: item._id })
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path='/register' exact>
          <RegisterPage />
        </Route>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
        <Route path={['/', '/constructor']} exact>
          <main className={styles.container}>
            {ingredientsRequest && <Loader />}
            {ingredientsFailed && <h1>Ошибка при загрузке данных</h1>}
            {!ingredientsRequest &&
              !ingredientsFailed &&
              ingredients.length > 0 && (
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor onDropHandler={handleDrop} />
                </DndProvider>
              )}
          </main>
        </Route>
        <Route path='/order_list'>
          <OrderList />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
      </Switch>
    </>
  )
}

export default App
