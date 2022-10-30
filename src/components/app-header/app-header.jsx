import React from 'react'
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'

const Header = () => {
  // const [current, setCurrent] = React.useState('one')
  return (
    <ul className={styles.header} style={{ display: 'flex' }}>
      <li className={styles.header__container}>
        <div className={styles.header__item}>
          <BurgerIcon type='primary' />
          <p className={styles.header__name}>Конструктор</p>
        </div>
        <div className={styles.header__item}>
          <ListIcon />
          <p className={styles.header__name}>Лента заказов</p>
        </div>
      </li>
      <li className={styles.header__item}>
        <Logo />
      </li>
      <li className={styles.header__item}>
        <ProfileIcon />
        <p className={styles.header__name}>Личный кабинет</p>
      </li>
    </ul>
  )
}

export default Header
