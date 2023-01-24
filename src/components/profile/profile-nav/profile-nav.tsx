import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './profile-nav.module.css'
import { logoutUser } from '../../../services/action/auth'
import { useDispatch } from '../../../services/hooks'

const ProfileNav = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }
  return (
    <>
      <ul className={styles.profile__links}>
        <NavLink
          activeClassName={styles.profile__link_active}
          className={styles.profile__link}
          to='/profile'
          exact={true}
        >
          Профиль
        </NavLink>
        <NavLink
          activeClassName={styles.profile__link_active}
          className={styles.profile__link}
          to='/profile/orders'
          exact={true}
        >
          История заказов
        </NavLink>
        <NavLink
          activeClassName={styles.profile__link_active}
          className={styles.profile__link}
          to='/login'
        >
          <span onClick={handleLogout}>Выход</span>
        </NavLink>
      </ul>
    </>
  )
}

export default ProfileNav
