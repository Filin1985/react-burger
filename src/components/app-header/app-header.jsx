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
      </li>
      <li className={styles.header__item}>
        <Logo />
      </li>
      {/* We will change the anchor tag to the Link tag in the next step */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.header__item} href='#'>
        <ProfileIcon />
        <p className={styles.header__name}>Личный кабинет</p>
      </a>
    </ul>
  )
}

export default Header
