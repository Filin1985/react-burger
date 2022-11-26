import React, { useMemo, useRef, useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import IngredientCategory from '../ingredients-category/ingredient-category.jsx'
import Modal from '../modal/modal.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { UNSET_CURRENT_INGREDIENT } from '../../services/action/ingredient'
import { CLOSE_MODAL } from '../../services/action/modal'

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun')
  const { currentIngredient } = useSelector((store) => store.ingredients)
  const { ingredients } = useSelector((store) => store.ingredients)
  const dispatch = useDispatch()
  const parentRef = useRef(null)
  const bunRef = useRef(null)
  const sauceRef = useRef(null)
  const mainRef = useRef(null)

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
    dispatch({
      type: UNSET_CURRENT_INGREDIENT,
    })
    dispatch({ type: CLOSE_MODAL })
  }

  const scrollToIngredient = () => {
    const bunInterval = Math.abs(
      parentRef.current.getBoundingClientRect().top -
        bunRef.current.getBoundingClientRect().top
    )
    const sauceInterval = Math.abs(
      parentRef.current.getBoundingClientRect().top -
        sauceRef.current.getBoundingClientRect().top
    )
    const mainInterval = Math.abs(
      parentRef.current.getBoundingClientRect().top -
        mainRef.current.getBoundingClientRect().top
    )
    const minInterval = Math.min(bunInterval, sauceInterval, mainInterval)
    const nearestTab =
      minInterval === bunInterval
        ? 'bun'
        : minInterval === sauceInterval
        ? 'sauce'
        : 'main'
    setCurrent((prevState) => {
      if (nearestTab === prevState.current) {
        return prevState.current
      }
      return nearestTab
    })
  }

  return (
    <section className={styles.ingredients}>
      {currentIngredient && (
        <Modal closeModal={handleCloseModal}>
          <IngredientDetails
            image={currentIngredient.image}
            name={currentIngredient.name}
            calories={currentIngredient.calories}
            carbohydrates={currentIngredient.carbohydrates}
            fat={currentIngredient.fat}
            proteins={currentIngredient.proteins}
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
        <ul
          className={styles.ingredients__list}
          ref={parentRef}
          onScroll={scrollToIngredient}
        >
          <IngredientCategory
            data={bun}
            id={'bun'}
            name={'Булки'}
            ref={bunRef}
          />
          <IngredientCategory
            data={sauce}
            id={'sauce'}
            name={'Соусы'}
            ref={sauceRef}
          />
          <IngredientCategory
            data={main}
            id={'main'}
            name={'Начинки'}
            ref={mainRef}
          />
        </ul>
      </div>
    </section>
  )
}

export default BurgerIngredients
