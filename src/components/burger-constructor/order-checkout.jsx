import React from 'react'
import PropTypes from 'prop-types'
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'

const OrderCheckout = ({ setOpenModel }) => {
  const handleClick = (item) => {
    setOpenModel({
      isOpen: true,
      data: item,
      type: 'order',
    })
  }
  return (
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
  )
}

OrderCheckout.propTypes = {
  setOpenModel: PropTypes.func.isRequired,
}

export default OrderCheckout
