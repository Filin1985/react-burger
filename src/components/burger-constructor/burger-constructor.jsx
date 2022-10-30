import React from 'react'
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'

const BurgerConstructor = () => {
  return (
    <section className={styles.contructor}>
      <div className={styles.contructor__container}>
        <ul className={styles.contructor__items}>
          <li className={styles.contructor__item}>
            <div className={styles.contructor__element}>
              <ConstructorElement
                type='top'
                isLocked={true}
                text='Краторная булка N-200i (верх)'
                price={200}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </div>
          </li>
          <li className={styles.contructor__item}>
            <DragIcon type='primary' />
            <ConstructorElement
              text='Краторная булка N-200i (верх)'
              price={50}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.contructor__item}>
            <DragIcon type='primary' />
            <ConstructorElement
              text='Краторная булка N-200i (верх)'
              price={50}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.contructor__item}>
            <DragIcon type='primary' />
            <div className={styles.contructor__element}>
              <ConstructorElement
                text='Краторная булка N-200i (верх)'
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </div>
          </li>
          <li className={styles.contructor__item}>
            <DragIcon type='primary' />
            <div className={styles.contructor__element}>
              <ConstructorElement
                text='Краторная булка N-200i (верх)'
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </div>
          </li>
          <li className={styles.contructor__item}>
            <DragIcon type='primary' />
            <div className={styles.contructor__element}>
              <ConstructorElement
                text='Краторная булка N-200i (верх)'
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              />
            </div>
          </li>
          <li className={styles.contructor__item}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text='Краторная булка N-200i (низ)'
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
        </ul>
        <div className={styles.contructor__final}>
          <p className={styles.contructor__number}>610</p>
          <CurrencyIcon type='primary' size='large' />
          <Button type='primary' size='large'>
            Оформить заказ
          </Button>
        </div>
      </div>
      <div className={styles.scroll}>
        <div className={styles.scroll__inner}></div>
      </div>
    </section>
  )
}

export default BurgerConstructor
