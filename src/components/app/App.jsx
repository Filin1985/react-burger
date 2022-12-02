import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import styles from './app.module.css'
import Header from '../app-header/app-header.jsx'
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import LoginPage from '../pages/login-page/login-page.jsx'
import OrderHistory from '../order-history/order-history.jsx'
import Loader from '../loader/loader.jsx'
import Profile from '../pages/profile/profile.jsx'
import RegisterPage from '../pages/register/register-page'
import ForgotPassword from '../pages/forgot-password/forgot-password'
import ResetPassword from '../pages/reset-password/reset-password'
import ProtectedRoute from '../protected-route'
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details'

import { useSelector, useDispatch } from 'react-redux'
import {
  INCREASE_INGREDIENT_ITEM,
  UNSET_CURRENT_INGREDIENT,
} from '../../services/action/burgerConstructor.js'
import { getIngredients } from '../../services/action/ingredients.js'
import { actionCreators } from '../../services/actionCreators/burgerConstructor.js'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Modal from '../modal/modal'
import { CLOSE_MODAL } from '../../services/action/modal'

function App() {
  const location = useLocation()
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  )
  const { visitedPath } = useSelector((store) => store.user)
  console.log(visitedPath)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const handleDrop = (item) => {
    dispatch(actionCreators.chooseIngredients(item))
    dispatch({ type: INCREASE_INGREDIENT_ITEM, item, _id: item._id })
  }
  const history = useHistory()

  const handleCloseModal = (e) => {
    e.preventDefault()
    history.goBack()
    dispatch({ type: CLOSE_MODAL })
    dispatch({ type: UNSET_CURRENT_INGREDIENT })
  }

  let background =
    (history.action === 'PUSH' || history.action === 'REPLACE') &&
    location.state &&
    location.state.background

  return (
    <>
      <Header />
      <Switch location={background || location}>
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
        <Route path='/ingredients/:id' exact>
          <IngredientDetails />
        </Route>
        <ProtectedRoute path='/register' onlyUnAuth={true} exact>
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute path='/login' onlyUnAuth={true} exact>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path='/forgot-password' onlyUnAuth={true} exact>
          <ForgotPassword />
        </ProtectedRoute>
        {visitedPath === '/forgot-password' && (
          <ProtectedRoute path='/reset-password' onlyUnAuth={true} exact>
            <ResetPassword />
          </ProtectedRoute>
        )}
        <ProtectedRoute path='/reset-password' onlyUnAuth={true} exact>
          <ResetPassword />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/orders' onlyUnAuth={true} exact>
          <OrderHistory />
        </ProtectedRoute>
        <ProtectedRoute path='/profile' exact>
          <Profile />
        </ProtectedRoute>
      </Switch>
      {background && (
        <>
          <Route
            path='/ingredients/:id'
            children={
              <Modal closeModal={handleCloseModal}>
                <IngredientDetails />
              </Modal>
            }
          />
        </>
      )}
    </>
  )
}

export default App
