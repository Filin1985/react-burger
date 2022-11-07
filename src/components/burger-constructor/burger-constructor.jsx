import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details.jsx'
import Modal from '../modal/modal.jsx'
import { cardPropTypes } from '../../prop-types.js'

const BurgerConstructor = ({ ingredientsData }) => {
  const [openModal, setOpenModal] = useState(false)

  const bun = useMemo(() => {
    return ingredientsData.find((ingredient) => ingredient.type === 'bun')
  }, [ingredientsData])

  const otherIngredients = useMemo(() => {
    return ingredientsData.filter((ingredient) => ingredient.type !== 'bun')
  }, [ingredientsData])

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <section className={styles.contructor}>
      {openModal && (
        <Modal isConstructor={true} closeModal={handleCloseModal}>
          <OrderDetails />
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
        <p className={styles.contructor__number}>610</p>
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

BurgerConstructor.propTypes = {
  ingredientsData: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
}

export default BurgerConstructor
