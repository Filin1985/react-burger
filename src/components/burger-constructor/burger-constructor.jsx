import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import Modal from '../modal/modal.jsx'
import OrderCheckout from './order-checkout.jsx'
import OrderDetails from '../order-details/order-details.jsx'

const BurgerConstructor = ({ ingredientsData }) => {
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    data: null,
    type: null,
  })

  const bun = ingredientsData.find((ingredient) => ingredient.type === 'bun')
  const otherIngredients = ingredientsData.filter(
    (ingredient) => ingredient.type !== 'bun'
  )

  const handleCloseModal = () => {
    setOpenModal({
      isOpen: false,
      data: null,
      type: null,
    })
  }

  return (
    <section className={styles.contructor}>
      <Modal
        type={openModal.type}
        isOpen={openModal.isOpen}
        onClose={handleCloseModal}
      >
        <OrderDetails card={openModal} />
      </Modal>
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
      <OrderCheckout setOpenModel={setOpenModal} />
    </section>
  )
}

BurgerConstructor.propTypes = {
  ingredientsData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
      __v: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default BurgerConstructor
