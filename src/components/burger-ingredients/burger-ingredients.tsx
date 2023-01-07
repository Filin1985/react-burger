import React, { useMemo, useRef, useState, FC } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
//@ts-ignore
import styles from './burger-ingredients.module.css'
import IngredientDetails from './ingredient-details/ingredient-details'
import IngredientCategory from './ingredients-category/ingredient-category'
import Modal from '../modal/modal'
import { useSelector, useDispatch } from 'react-redux'
import { UNSET_CURRENT_INGREDIENT } from '../../services/constants/burgerConstructor'
import { CLOSE_MODAL } from '../../services/constants/modal'
import { IIngredient } from '../../types'

const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState<string>('bun')
  const { currentIngredient } = useSelector(
    (store: any) => store.burgerConstructor
  )
  const { ingredients } = useSelector((store: any) => store.ingredients)
  const dispatch = useDispatch()
  const parentRef = useRef<HTMLUListElement | null>(null)
  const bunRef = useRef<HTMLDivElement | null>(null)
  const sauceRef = useRef<HTMLDivElement | null>(null)
  const mainRef = useRef<HTMLDivElement | null>(null)

  const bun = useMemo(() => {
    return ingredients.filter(
      (ingredient: IIngredient) => ingredient.type === 'bun'
    )
  }, [ingredients])

  const sauce = useMemo(() => {
    return ingredients.filter(
      (ingredient: IIngredient) => ingredient.type === 'sauce'
    )
  }, [ingredients])

  const main = useMemo(() => {
    return ingredients.filter(
      (ingredient: IIngredient) => ingredient.type === 'main'
    )
  }, [ingredients])

  const setTab = (tab: string) => {
    console.log(tab)
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
    if (
      parentRef &&
      parentRef.current &&
      bunRef &&
      bunRef.current &&
      sauceRef &&
      sauceRef.current &&
      mainRef &&
      mainRef.current
    ) {
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
        if (nearestTab === prevState) {
          return prevState
        }
        return nearestTab
      })
    }
  }

  return (
    <section className={styles.ingredients}>
      {currentIngredient && (
        <Modal closeModal={handleCloseModal}>
          <IngredientDetails />
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
