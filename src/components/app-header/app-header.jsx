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
    <ul className={styles.header}>
      <li className={styles.header__container}>
        <a
          className={`${styles.header__item} ${styles.header__item_type_active}`}
          href='#'
        >
          <BurgerIcon type='primary' />
          <p className={styles.header__name}>Конструктор</p>
        </a>
        <a className={styles.header__item} href='#'>
          <ListIcon />
          <p className={styles.header__name}>Лента заказов</p>
        </a>
      </li>
      <li className={styles.header__item}>
        <Logo />
      </li>
      <a className={styles.header__item} href='#'>
        <ProfileIcon />
        <p className={styles.header__name}>Личный кабинет</p>
      </a>
    </ul>
  )
}

export default Header
