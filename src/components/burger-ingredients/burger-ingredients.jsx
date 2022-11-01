import React from 'react'
import {
  Tab,
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import { data as ingredients } from '../../utils/data.js'

const BurgerIngredients = () => {
  const bun = ingredients.filter((ingredient) => ingredient.type === 'bun')
  const sauce = ingredients.filter((ingredient) => ingredient.type === 'sauce')
  const main = ingredients.filter((ingredient) => ingredient.type === 'main')

  const setTab = (tab) => {
    setCurrent(tab)
    const element = document.getElementById(tab)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const [current, setCurrent] = React.useState('bun')
  return (
    <section className={styles.ingredients}>
      <h1 className={styles.ingredients__header}>Соберите бургер</h1>
      <div className={styles.tab}>
        <Tab value='bun' active={current === 'bun'} onClick={setTab}>
          Булки
        </Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value='main' active={current === 'main'} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredients__container}>
        <ul className={styles.ingredients__list}>
          <li className={styles.ingredients__bun}>
            <h2 className={styles.ingredients__subheader} id='bun'>
              Булки
            </h2>
            <ul className={styles.ingredients__items}>
              {bun.map((item) => (
                <a href='#' key={item._id} className={styles.ingredients__item}>
                  {item.count > 0 && (
                    <Counter count={item.count} size='default' />
                  )}
                  <img src={item.image} alt={item.name} />
                  <div className={styles.ingredients__curency}>
                    <span className={styles.ingredients__number}>
                      {item.price}
                    </span>
                    <CurrencyIcon type='primary' />
                  </div>
                  <p className={styles.ingredients__name}>{item.name}</p>
                </a>
              ))}
            </ul>
          </li>
          <li className={styles.ingredients__bun}>
            <h2 className={styles.ingredients__subheader} id='sauce'>
              Соусы
            </h2>
            <ul className={styles.ingredients__items}>
              {sauce.map((item) => (
                <a href='#' key={item._id} className={styles.ingredients__item}>
                  {item.count > 0 && (
                    <Counter count={item.count} size='default' />
                  )}
                  <img src={item.image} alt={item.name} />
                  <div className={styles.ingredients__curency}>
                    <span className={styles.ingredients__number}>
                      {item.price}
                    </span>
                    <CurrencyIcon type='primary' />
                  </div>
                  <p className={styles.ingredients__name}>{item.name}</p>
                </a>
              ))}
            </ul>
          </li>
          <li className={styles.ingredients__bun}>
            <h2 className={styles.ingredients__subheader} id='main'>
              Начинки
            </h2>
            <ul className={styles.ingredients__items}>
              {main.map((item) => (
                <a href='#' key={item._id} className={styles.ingredients__item}>
                  {item.count > 0 && (
                    <Counter count={item.count} size='default' />
                  )}
                  <img src={item.image} alt={item.name} />
                  <div className={styles.ingredients__curency}>
                    <span className={styles.ingredients__number}>
                      {item.price}
                    </span>
                    <CurrencyIcon type='primary' />
                  </div>
                  <p className={styles.ingredients__name}>{item.name}</p>
                </a>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default BurgerIngredients
