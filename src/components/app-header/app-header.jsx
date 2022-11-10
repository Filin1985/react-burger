import React from 'react'
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {/* We will change the anchor tag to the Link tag in the next step */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className={`${styles.header__item} ${styles.header__item_type_active}`}
          href='#'
        >
          <BurgerIcon type='primary' />
          <p className={styles.header__name}>Конструктор</p>
        </a>
        {/* We will change the anchor tag to the Link tag in the next step */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.header__item} href='#'>
          {' '}
          <ListIcon />
          <p className={styles.header__name}>Лента заказов</p>
        </a>
      </div>
      <div className={styles.header__item}>
        <Logo />
      </div>
      {/* We will change the anchor tag to the Link tag in the next step */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.header__item} href='#'>
        <ProfileIcon />
        <p className={styles.header__name}>Личный кабинет</p>
      </a>
    </header>
  )
}

export default Header
