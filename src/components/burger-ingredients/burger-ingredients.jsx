import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import IngredientCategory from '../ingredients-category/ingredient-category.jsx'
import { cardPropTypes } from '../../prop-types.js'
import Modal from '../modal/modal.jsx'

const BurgerIngredients = ({ ingredientsData }) => {
  const [current, setCurrent] = useState('bun')
  const [selectIngredient, setSelectIngredient] = useState(null)

  const bun = useMemo(() => {
    return ingredientsData.filter((ingredient) => ingredient.type === 'bun')
  }, [ingredientsData])

  const sauce = useMemo(() => {
    return ingredientsData.filter((ingredient) => ingredient.type === 'sauce')
  }, [ingredientsData])

  const main = useMemo(() => {
    return ingredientsData.filter((ingredient) => ingredient.type === 'main')
  }, [ingredientsData])

  const setTab = (tab) => {
    setCurrent(tab)
    const element = document.getElementById(tab)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCloseModal = () => {
    setSelectIngredient(null)
  }

  return (
    <section className={styles.ingredients}>
      {selectIngredient && (
        <Modal
          selectIngredient={selectIngredient}
          closeModal={handleCloseModal}
        >
          <IngredientDetails
            image={selectIngredient.image}
            name={selectIngredient.name}
            calories={selectIngredient.calories}
            carbohydrates={selectIngredient.carbohydrates}
            fat={selectIngredient.fat}
            proteins={selectIngredient.proteins}
          />
        </Modal>
      )}
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
          <IngredientCategory
            data={bun}
            id={'bun'}
            name={'Булки'}
            setIngredient={setSelectIngredient}
          />
          <IngredientCategory
            data={sauce}
            id={'sauce'}
            name={'Соусы'}
            setIngredient={setSelectIngredient}
          />
          <IngredientCategory
            data={main}
            id={'main'}
            name={'Начинки'}
            setIngredient={setSelectIngredient}
          />
        </ul>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
  ingredientsData: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
}

export default BurgerIngredients
