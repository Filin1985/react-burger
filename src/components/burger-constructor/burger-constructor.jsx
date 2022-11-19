import { v4 as uuid } from 'uuid'
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details.jsx'
import IngredientItem from '../ingredient-item/ingredient-item.jsx'
import Modal from '../modal/modal.jsx'
import { useSelector, useDispatch } from 'react-redux'
import {
  DECREASE_INGREDIENT_ITEM,
  getOrderDetails,
  REMOVE_INGREDIENT,
  UPDATE_LIST,
} from '../../services/action/ingredient'
import { useDrop } from 'react-dnd'
import { CLOSE_MODAL, OPEN_MODAL } from '../../services/action/modal'
import Placeholder from '../placeholder/placeholder'

const BurgerConstructor = ({ onDropHandler }) => {
  const { bun, otherIngredients, orderSum } = useSelector(
    (store) => store.ingredients.ingredientsBurger
  )

  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(itemId) {
      onDropHandler(itemId)
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  })

  const dropClassModifier = isHover ? styles.constructor_active : ''

  const handleCloseModal = () => {
    dispatch({ type: CLOSE_MODAL })
  }

  const handleClick = () => {
    const bunId = [bun._id]
    const ingredientsIds = bunId.concat(
      otherIngredients.map((ingredient) => ingredient._id),
      bunId
    )
    dispatch(getOrderDetails(ingredientsIds))
    dispatch({ type: OPEN_MODAL })
  }

  const moveIngredient = useCallback(
    (dragIngredientIndex, hoverIngredientIndex) => {
      dispatch({
        type: UPDATE_LIST,
        toIndex: hoverIngredientIndex,
        fromIndex: dragIngredientIndex,
      })
    },
    [dispatch]
  )

  return (
    <section
      className={`${styles.constructor} ${dropClassModifier}`}
      ref={dropTarget}
    >
      {isOpen && (
        <Modal withTitle={true} closeModal={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}

      {bun ? (
        <ul className={styles.constructor__items}>
          {bun ? (
            <li
              className={`${styles.constructor__item} ${styles.constructor__items_pos_left}`}
            >
              <ConstructorElement
                type='top'
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          ) : (
            <ConstructorElement text='Выберите булку' />
          )}
          <div className={styles.constructor__scroll}>
            {otherIngredients.length > 0 &&
              otherIngredients.map((ingredient, index) => {
                const removeIngredient = () => {
                  dispatch({
                    type: REMOVE_INGREDIENT,
                    item: ingredient,
                    key: ingredient.key,
                  })
                  dispatch({
                    type: DECREASE_INGREDIENT_ITEM,
                    ingredient,
                    _id: ingredient._id,
                  })
                }
                return (
                  <IngredientItem
                    key={ingredient.key}
                    ingredient={ingredient}
                    handleDelete={removeIngredient}
                    index={index}
                    moveIngredient={moveIngredient}
                  />
                )
              })}
          </div>

          {bun ? (
            <li
              className={`${styles.constructor__item} ${styles.constructor__items_pos_left}`}
            >
              <ConstructorElement
                type='bottom'
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          ) : null}
        </ul>
      ) : (
        <Placeholder />
      )}
      <div className={styles.constructor__final}>
        <p className={styles.constructor__number}>{orderSum}</p>
        <CurrencyIcon type='primary' size='large' />
        <Button
          htmlType='button'
          type='primary'
          size='large'
          onClick={handleClick}
          disabled={!bun}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  onDropHandler: PropTypes.func.isRequired,
}

export default BurgerConstructor
