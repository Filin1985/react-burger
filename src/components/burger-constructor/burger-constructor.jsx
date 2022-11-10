import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details.jsx'
import Modal from '../modal/modal.jsx'
import { IngredientsContext } from '../../context/ingredientsContext'
import { API_URL } from '../../utils/config.js'
import { request } from '../../utils/utils.js'

const initialState = { count: 0 }

const BurgerConstructor = () => {
  const [openModal, setOpenModal] = useState(false)
  const [orderDetails, setOrderDetails] = useState({})
  const { ingredients } = useContext(IngredientsContext)

  const bun = useMemo(() => {
    return ingredients.find((ingredient) => ingredient.type === 'bun')
  }, [ingredients])

  const otherIngredients = useMemo(() => {
    return ingredients.filter((ingredient) => ingredient.type !== 'bun')
  }, [ingredients])

  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state, action) {
    switch (action.type) {
      case 'calculate':
        return {
          count:
            otherIngredients.reduce((acc, item) => {
              return acc + item.price
            }, 0) +
            bun.price * 2,
        }
      default:
        throw new Error(`Wrong type of action: ${action.type}`)
    }
  }

  const ingredientsIds = useMemo(() => {
    return ingredients.map((ingredient) => ingredient._id)
  }, [ingredients])

  useEffect(() => {
    dispatch({ type: 'calculate' })
  }, [ingredients])

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleClick = () => {
    request(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: ingredientsIds,
      }),
    })
      .then((data) => {
        setOrderDetails(data)
        setOpenModal(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <section className={styles.contructor}>
      {openModal && (
        <Modal isOrder={true} closeModal={handleCloseModal}>
          <OrderDetails orderDetails={orderDetails} />
        </Modal>
      )}

      <ul className={styles.contructor__items}>
        {bun ? (
          <li
            className={`${styles.contructor__item} ${styles.contructor__items_pos_left}`}
          >
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        ) : null}
        <div className={styles.contructor__scroll}>
          {otherIngredients.map((ingredient) => {
            return (
              <li key={ingredient._id} className={styles.contructor__item}>
                <DragIcon type='primary' />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            )
          })}
        </div>

        {bun ? (
          <li
            className={`${styles.contructor__item} ${styles.contructor__items_pos_left}`}
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
      <div className={styles.contructor__final}>
        <p className={styles.contructor__number}>{state.count}</p>
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
