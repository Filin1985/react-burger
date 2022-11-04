import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import Modal from '../modal/modal.jsx'
import IngredientDetails from '../ingredient-details/ingredient-details.jsx'
import IngredientType from './ingredient-type.jsx'

const BurgerIngredients = ({ ingredientsData }) => {
  const [current, setCurrent] = useState('bun')
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    data: null,
    type: null,
  })

  const bun = ingredientsData.filter((ingredient) => ingredient.type === 'bun')
  const sauce = ingredientsData.filter(
    (ingredient) => ingredient.type === 'sauce'
  )
  const main = ingredientsData.filter(
    (ingredient) => ingredient.type === 'main'
  )

  const setTab = (tab) => {
    setCurrent(tab)
    const element = document.getElementById(tab)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCloseModal = () => {
    setOpenModal({
      isOpen: false,
      data: null,
      type: null,
    })
  }

  return (
    <section className={styles.ingredients}>
      <Modal
        type={openModal.type}
        isOpen={openModal.isOpen}
        onClose={handleCloseModal}
        setOpenModal={setOpenModal}
      >
        <IngredientDetails card={openModal.data} />
      </Modal>
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
          <IngredientType
            data={bun}
            id={'bun'}
            name={'Булки'}
            setOpenModel={setOpenModal}
          />
          <IngredientType
            data={sauce}
            id={'sauce'}
            name={'Соусы'}
            setOpenModel={setOpenModal}
          />
          <IngredientType
            data={main}
            id={'main'}
            name={'Начинки'}
            setOpenModel={setOpenModal}
          />
        </ul>
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = {
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

export default BurgerIngredients
