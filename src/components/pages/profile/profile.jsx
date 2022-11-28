import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './profile.module.css'
import { NavLink, Link } from 'react-router-dom'
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { logoutUser } from '../../../services/action/auth'

const Profile = () => {
  const activeUserName = useSelector((store) => store.user.name)
  const activeUserEmail = useSelector((store) => store.user.email)
  const dispatch = useDispatch()
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    nameEdit: false,
    emailEdit: false,
    passwordEdit: false,
  })
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  useEffect(() => {
    setState({
      ...state,
      name: activeUserName,
      email: activeUserEmail,
    })
  }, [activeUserName, activeUserEmail])

  let nameIcon = state.nameEdit ? 'CloseIcon' : 'EditIcon'
  let emailIcon = state.emailEdit ? 'CloseIcon' : 'EditIcon'
  let passwordIcon = state.passwordEdit ? 'CloseIcon' : 'EditIcon'

  const onNameIconClick = () => {
    setState({
      ...state,
      nameEdit: state.nameEdit ? false : true,
    })
    nameRef.current.disabled = !nameRef.current.disabled
  }

  const onEmailIconClick = () => {
    setState({
      ...state,
      emailEdit: state.emailEdit ? false : true,
    })
    emailRef.current.disabled = !emailRef.current.disabled
  }

  const onPasswordIconClick = () => {
    setState({
      ...state,
      passwordEdit: state.passwordEdit ? false : true,
    })
    passwordRef.current.disabled = !passwordRef.current.disabled
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

  const handleLogout = () => {
    dispatch(logoutUser())
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
          <span onClick={handleLogout}>Выход</span>
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
          ref={nameRef}
          onIconClick={onNameIconClick}
          errorText='Ошибка'
          size='default'
          icon={nameIcon}
          disabled={!state.nameEdit}
        />
        <Input
          type='text'
          placeholder='E-mail'
          onChange={handleChange}
          value={state.email}
          name='email'
          ref={emailRef}
          error={false}
          onIconClick={onEmailIconClick}
          errorText='Ошибка'
          size='default'
          icon={emailIcon}
          disabled={!state.emailEdit}
        />
        <Input
          type='password'
          placeholder='пароль'
          onChange={handleChange}
          value={state.password}
          icon={passwordIcon}
          onIconClick={onPasswordIconClick}
          name='password'
          ref={passwordRef}
          disabled={!state.passwordEdit}
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
