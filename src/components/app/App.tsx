import React, { useEffect } from 'react'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import styles from './app.module.css'
import Header from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import LoginPage from '../../pages/login-page/login-page'
import Loader from '../loader/loader'
import Profile from '../profile/profile'
import RegisterPage from '../../pages/register/register-page'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import ProtectedRoute from '../protected-route'
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details'
import { useSelector, useDispatch } from '../../services/hooks'
import { INCREASE_INGREDIENT_ITEM } from '../../services/constants/burgerConstructor'
import { getIngredients } from '../../services/action/ingredients'
import { actionCreators } from '../../services/actionCreators/burgerConstructor'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Modal from '../modal/modal'
import { CLOSE_MODAL } from '../../services/constants/modal'
import Feed from '../feed/feed'
import { IIngredient } from '../../types'
import * as H from 'history'
import FeedDetails from '../feed/feed-details/feed-details'
import OrderHistory from '../profile/order-history/order-history'
import ProfileOrderDetails from '../profile/profile-order-details/profile-order-details'
import { checkUserAuth } from '../../services/action/auth'

function App() {
  const location = useLocation<{ background: H.Location }>()
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(checkUserAuth())
  }, [dispatch])

  const handleDrop = (item: IIngredient) => {
    dispatch(actionCreators.chooseIngredients(item))
    dispatch({ type: INCREASE_INGREDIENT_ITEM, item, _id: item._id })
  }
  const history = useHistory()

  const handleCloseModal = () => {
    history.goBack()
    dispatch({ type: CLOSE_MODAL })
  }

  let background =
    (history.action === 'PUSH' || history.action === 'REPLACE') &&
    location.state &&
    location.state.background

  return (
    <>
      <Header />
      <Switch location={background || location}>
        <Route path={['/', '/react-burger']} exact>
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
        <ProtectedRoute path='/profile' exact>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/register' onlyUnAuth={true} exact>
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute path='/login' onlyUnAuth={true} exact>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute path='/forgot-password' onlyUnAuth={true} exact>
          <ForgotPassword />
        </ProtectedRoute>
        <ProtectedRoute path='/reset-password' onlyUnAuth={true} exact>
          <ResetPassword />
        </ProtectedRoute>
        <ProtectedRoute path='/reset-password' onlyUnAuth={true} exact>
          <ResetPassword />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/orders' exact>
          <OrderHistory />
        </ProtectedRoute>
        <ProtectedRoute path='/profile/orders/:id' exact>
          <ProfileOrderDetails />
        </ProtectedRoute>
        <Route path='/ingredients/:id'>
          <IngredientDetails />
        </Route>
        <Route path='/feed' exact>
          <Feed />
        </Route>
        <Route path='/feed/:number' exact>
          <FeedDetails />
        </Route>
      </Switch>
      {background && (
        <>
          <Route path='/ingredients/:id'>
            <Modal closeModal={handleCloseModal}>
              <IngredientDetails />
            </Modal>
          </Route>
          <Route path='/feed/:number'>
            <Modal closeModal={handleCloseModal}>
              <FeedDetails />
            </Modal>
          </Route>
          <ProtectedRoute path='/profile/orders/:number'>
            <Modal closeModal={handleCloseModal}>
              <ProfileOrderDetails />
            </Modal>
          </ProtectedRoute>
        </>
      )}
    </>
  )
}

export default App
