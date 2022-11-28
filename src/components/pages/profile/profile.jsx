import React, { useState } from 'react'
import styles from './profile.module.css'
import { NavLink, Link } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'

const Profile = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onIconClick = () => {
    alert('Icon Click Callback')
  }
  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    setState({
      ...state,
      [name]: value,
    })
  }
  return (
    <section className={styles.profile}>
      <ul className={styles.profile__links}>
        <NavLink
          activeClassName={styles.profile__link_active}
          className={styles.profile__link}
          to='/profile'
        >
          Профиль
        </NavLink>
        <NavLink
          activeClassName={styles.profile__link_active}
          className={styles.profile__link}
          to='/order_list'
        >
          История заказов
        </NavLink>
        <NavLink
          activeClassName={styles.profile__link_active}
          className={styles.profile__link}
          to='/login'
        >
          Выход
        </NavLink>
      </ul>
      <form className={styles.profile__data}>
        <Input
          type='text'
          placeholder='Имя'
          onChange={handleChange}
          value={state.name}
          name='name'
          error={false}
          onIconClick={onIconClick}
          errorText='Ошибка'
          size='default'
          icon={'EditIcon'}
        />
        <Input
          type='text'
          placeholder='E-mail'
          onChange={handleChange}
          value={state.email}
          name='email'
          error={false}
          onIconClick={onIconClick}
          errorText='Ошибка'
          size='default'
          icon={'EditIcon'}
        />
        <PasswordInput
          onChange={handleChange}
          value={state.password}
          icon={'EditIcon'}
          name='password'
        />
        <div className={styles.profile__change}>
          <p className={styles.profile__cancel}>
            <Link to='/'>Отмена</Link>
          </p>
          <Button htmlType='submit' type='primary' size='medium'>
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  )
}

export default Profile
