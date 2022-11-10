import React, { useMemo, useState, useContext } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import IngredientCategory from '../ingredients-category/ingredient-category.jsx'
import { IngredientsContext } from '../../context/ingredientsContext'
import Modal from '../modal/modal.jsx'

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun')
  const [selectIngredient, setSelectIngredient] = useState(null)
  const { ingredients } = useContext(IngredientsContext)

  const bun = useMemo(() => {
    return ingredients.filter((ingredient) => ingredient.type === 'bun')
  }, [ingredients])

  const sauce = useMemo(() => {
    return ingredients.filter((ingredient) => ingredient.type === 'sauce')
  }, [ingredients])

  const main = useMemo(() => {
    return ingredients.filter((ingredient) => ingredient.type === 'main')
  }, [ingredients])

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
        <Modal closeModal={handleCloseModal}>
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

export default BurgerIngredients
