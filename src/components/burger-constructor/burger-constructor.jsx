import React, { useState } from 'react'
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
  getOrderDetails,
  REMOVE_INGREDIENT,
} from '../../services/action/ingredient'
import { useDrop } from 'react-dnd'
import { CLOSE_MODAL, OPEN_MODAL } from '../../services/action/modal'

// const initialState = { count: 0 }

const BurgerConstructor = ({ onDropHandler }) => {
  const { bun, otherIngredients } = useSelector(
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

  return (
    <section
      className={`${styles.constructor} ${dropClassModifier}`}
      ref={dropTarget}
    >
      {isOpen && (
        <Modal isOrder={true} closeModal={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}

      <ul className={styles.constructor__items}>
        {bun && (
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
        )}
        <div className={styles.constructor__scroll}>
          {otherIngredients &&
            otherIngredients.map((ingredient) => {
              const removeIngredient = () => {
                dispatch({
                  type: REMOVE_INGREDIENT,
                  id: ingredient._id,
                })
              }
              return (
                <IngredientItem
                  key={ingredient._id}
                  ingredient={ingredient}
                  handleDelete={removeIngredient}
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
      <div className={styles.constructor__final}>
        <p className={styles.constructor__number}>0</p>
        <CurrencyIcon type='primary' size='large' />
        <Button
          htmlType='button'
          type='primary'
          size='large'
          onClick={handleClick}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor
