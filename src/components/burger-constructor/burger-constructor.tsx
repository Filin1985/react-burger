import React, { useCallback, FC } from 'react'
import PropTypes from 'prop-types'
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import IngredientItem from './ingredient-item/ingredient-item'
import Modal from '../modal/modal'
import { useSelector, useDispatch } from 'react-redux'
import {
  DECREASE_INGREDIENT_ITEM,
  REMOVE_INGREDIENT,
  UPDATE_LIST,
} from '../../services/constants/burgerConstructor'
import { getOrderDetails } from '../../services/action/burgerConstructor'
import { useDrop } from 'react-dnd'
import { CLOSE_MODAL, OPEN_MODAL } from '../../services/constants/modal'
import Placeholder from './placeholder/placeholder'
import { IIngredient } from '../../types'
import { TIngredientWithKey } from '../../services/reducers/types'

type TDrop = {
  onDropHandler: (item: IIngredient) => void
}

type TCallback = (
  dragIngredientIndex: number,
  hoverIngredientIndex: number
) => any

const BurgerConstructor: FC<TDrop> = ({ onDropHandler }) => {
  const { bun, otherIngredients, orderSum } = useSelector(
    (store: any) => store.burgerConstructor.ingredientsBurger
  )

  const { isOpen } = useSelector((store: any) => store.modal)

  const dispatch = useDispatch()

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(itemId: IIngredient) {
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
      otherIngredients.map((ingredient: IIngredient) => ingredient._id),
      bunId
    )
    //@ts-ignore
    dispatch(getOrderDetails(ingredientsIds))
    dispatch({ type: OPEN_MODAL })
  }

  const moveIngredient = useCallback<TCallback>(
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
            <ConstructorElement
              text='Выберите булку'
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
          <div className={styles.constructor__scroll}>
            {otherIngredients.length > 0 &&
              otherIngredients.map(
                (ingredient: TIngredientWithKey, index: number) => {
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
                }
              )}
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
        <CurrencyIcon type='primary' />
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
