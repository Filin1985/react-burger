import React from 'react'
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import { data as ingredients } from '../../utils/data.js'

const BurgerConstructor = ({ ingredientsData }) => {
  const bun = ingredientsData.find((ingredient) => ingredient.type === 'bun')
  const otherIngredients = ingredientsData.filter(
    (ingredient) => ingredient.type !== 'bun'
  )

  return (
    <section className={styles.contructor}>
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
            return ingredient.type === 'main' || ingredient.type === 'sauce' ? (
              <li key={ingredient._id} className={styles.contructor__item}>
                <DragIcon type='primary' />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            ) : null
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
        <Button htmlType='submit' type='primary' size='large'>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor
