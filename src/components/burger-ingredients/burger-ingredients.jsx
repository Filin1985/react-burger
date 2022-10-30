import React from 'react'
import {
  Tab,
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('Булки')
  return (
    <section className={styles.ingredients}>
      <h1 className={styles.ingredients__header}>Соберите бургер</h1>
      <div className={styles.tab}>
        <Tab value='Булки' active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='Соусы' active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value='Начинки'
          active={current === 'Начинки'}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredients__container}>
        <ul className={styles.ingredients__list}>
          <li className={styles.ingredients__bun}>
            <h2 className={styles.ingredients__subheader}>Булки</h2>
            <ul className={styles.ingredients__items}>
              <li className={styles.ingredients__item}>
                <Counter count={1} size='default' />
                <img
                  src='https://code.s3.yandex.net/react/code/bun-02.png'
                  alt='Краторная булка'
                />
                <div className={styles.ingredients__curency}>
                  <span className={styles.ingredients__number}>20</span>
                  <CurrencyIcon type='primary' />
                </div>
                <p className={styles.ingredients__name}>
                  Краторная булка N-200i
                </p>
              </li>
              <li className={styles.ingredients__item}>
                <img
                  src='https://code.s3.yandex.net/react/code/bun-01.png'
                  alt='Флюоресцентная булка'
                />
                <div className={styles.ingredients__curency}>
                  <span className={styles.ingredients__number}>20</span>
                  <CurrencyIcon type='primary' />
                </div>
                <p className={styles.ingredients__name}>
                  Флюоресцентная булка R2-D3
                </p>
              </li>
            </ul>
          </li>
          <li className={styles.ingredients__bun}>
            <h2 className={styles.ingredients__subheader}>Соусы</h2>
            <ul className={styles.ingredients__items}>
              <li className={styles.ingredients__item}>
                <img
                  src='https://code.s3.yandex.net/react/code/sauce-02.png'
                  alt='Соус Spicy-X'
                />
                <div className={styles.ingredients__curency}>
                  <span className={styles.ingredients__number}>30</span>
                  <CurrencyIcon type='primary' />
                </div>
                <p className={styles.ingredients__name}>Соус Spicy-X</p>
              </li>
              <li className={styles.ingredients__item}>
                <img
                  src='https://code.s3.yandex.net/react/code/sauce-04.png'
                  alt='Соус фирменный Space Sauce'
                />
                <div className={styles.ingredients__curency}>
                  <span className={styles.ingredients__number}>30</span>
                  <CurrencyIcon type='primary' />
                </div>
                <p className={styles.ingredients__name}>
                  Соус фирменный Space Sauce
                </p>
              </li>
              <li className={styles.ingredients__item}>
                <Counter count={1} size='default' />
                <img
                  src='https://code.s3.yandex.net/react/code/sauce-03.png'
                  alt='Соус традиционный галактический'
                />
                <div className={styles.ingredients__curency}>
                  <span className={styles.ingredients__number}>30</span>
                  <CurrencyIcon type='primary' />
                </div>
                <p className={styles.ingredients__name}>
                  Соус традиционный галактический
                </p>
              </li>
              <li className={styles.ingredients__item}>
                <img
                  src='https://code.s3.yandex.net/react/code/sauce-01.png'
                  alt='Соус с шипами Антарианского плоскоходца'
                />
                <div className={styles.ingredients__curency}>
                  <span className={styles.ingredients__number}>30</span>
                  <CurrencyIcon type='primary' />
                </div>
                <p className={styles.ingredients__name}>
                  Соус с шипами Антарианского плоскоходца
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles.scroll}>
          <div className={styles.scroll__inner}></div>
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients
