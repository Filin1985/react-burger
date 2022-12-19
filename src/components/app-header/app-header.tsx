import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
//@ts-ignore
import styles from './app-header.module.css'

const Header = () => {
  const isConstructor = useRouteMatch({ path: '/constructor', exact: true })
  const isOrderList = useRouteMatch({ path: '/order_list' })
  const isProfile = useRouteMatch({ path: '/profile' })

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <NavLink
          className={styles.header__item}
          to='/constructor'
          activeClassName={styles.header__item_active}
        >
          <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
          <p className={styles.header__name}>Конструктор</p>
        </NavLink>
        <NavLink
          className={styles.header__item}
          to='/feed'
          activeClassName={styles.header__item_active}
        >
          <ListIcon type={isOrderList ? 'primary' : 'secondary'} />
          <p className={styles.header__name}>Лента заказов</p>
        </NavLink>
      </div>
      <div className={styles.header__item}>
        <Logo />
      </div>
      <NavLink
        className={styles.header__item}
        to='/profile'
        activeClassName={styles.header__item_active}
      >
        <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
        <p className={styles.header__name}>Личный кабинет</p>
      </NavLink>
    </header>
  )
}

export default Header
